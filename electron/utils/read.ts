import * as fs from 'fs/promises';
import * as path from 'path';
import X2js from 'x2js';

interface StringResource {
  name: string;
  text: string;
  from: string;
}

class AndroidResourceFinder {
  private rootPath: string;
  private currentLanguage: string;
  private stringList: StringResource[] = [];
  private languageList: string[] = [];

  constructor(rootPath: string) {
    this.rootPath = rootPath;
    this.currentLanguage = 'values'; // 默认语言文件夹
  }

  async findLanguageFolders(): Promise<string[]> {
    await this.traverseFolderForLanguages(this.rootPath);
    return this.languageList;
  }

  async readResourcesForLanguage(language: string): Promise<StringResource[]> {
    this.currentLanguage = language;
    this.stringList = [];
    await this.traverseFolderForResources(this.rootPath);
    return this.stringList;
  }

  private async traverseFolderForLanguages(folderPath: string): Promise<void> {
    const items = await fs.readdir(folderPath);
    for (const item of items) {
      await this.processItemForLanguages(folderPath, item);
    }
  }

  private async processItemForLanguages(
    folderPath: string,
    item: string,
  ): Promise<void> {
    const itemPath = path.join(folderPath, item);
    const stats = await fs.stat(itemPath);

    if (itemPath.indexOf(path.sep + 'build' + path.sep) === -1) {
      if (stats.isDirectory()) {
        if (item.startsWith('values')) {
          const stringsPath = path.join(itemPath, 'strings.xml');
          try {
            await fs.access(stringsPath);
            if (!this.languageList.includes(item)) {
              this.languageList.push(item);
            }
          } catch (error) {
            // strings.xml doesn't exist in this folder
          }
        }
        await this.traverseFolderForLanguages(itemPath);
      }
    }
  }

  private async traverseFolderForResources(folderPath: string): Promise<void> {
    const items = await fs.readdir(folderPath);
    for (const item of items) {
      await this.processItemForResources(folderPath, item);
    }
  }

  private async processItemForResources(
    folderPath: string,
    item: string,
  ): Promise<void> {
    const itemPath = path.join(folderPath, item);
    const stats = await fs.stat(itemPath);

    if (itemPath.indexOf(path.sep + 'build' + path.sep) === -1) {
      if (stats.isDirectory()) {
        await this.traverseFolderForResources(itemPath);
      } else if (stats.isFile()) {
        await this.processFile(itemPath);
      }
    }
  }

  private async processFile(filePath: string): Promise<void> {
    const parentPath = path.dirname(filePath);
    const parentName = path.basename(parentPath);
    const fileName = path.basename(filePath);

    if (parentName === this.currentLanguage && fileName === 'strings.xml') {
      await this.readXmlFile(filePath);
    }
  }

  private async readXmlFile(filePath: string): Promise<void> {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      this.parseXml(data, filePath);
    } catch (err) {
      console.error('读取文件失败:', err);
    }
  }

  private parseXml(data: string, filePath: string): void {
    const x2js = new X2js();
    const json = x2js.xml2js(data);

    if (json.resources && json.resources.string) {
      const strings = Array.isArray(json.resources.string)
        ? json.resources.string
        : [json.resources.string];

      strings.forEach((res) => {
        this.stringList.push({
          name: `${this.getParentDirection(filePath, 5)}.${res._name}`,
          text: res.__text,
          from: filePath.replace(this.rootPath, ''),
        });
      });
    }
  }

  private getParentDirection(currentPath: string, levels: number): string {
    let parentPath = currentPath;
    for (let i = 0; i < levels; i++) {
      parentPath = path.dirname(parentPath);
    }
    return path.basename(parentPath);
  }
}

export { AndroidResourceFinder };
