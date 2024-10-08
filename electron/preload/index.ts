import { ipcRenderer, contextBridge } from "electron";
import { AndroidResourceFinder } from "../read";

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args),
    );
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },

  // You can expose other APTs you need here.
  // ...
  select: (args: any) => ipcRenderer.send("select", args),
  selectOver: (args: any) => ipcRenderer.on("selectOver", args),
  readDir: async (dirPath: string) => {
    if (dirPath) {
      const finder = new AndroidResourceFinder(dirPath);
      try {
        // 首先找出所有语言所在目录
        const languages = await finder.findLanguageFolders();
        // 使用 Promise.all 并行读取所有语言的资源
        const resources = await Promise.all(
          languages.map(async (item) => {
            return await finder.readResourcesForLanguage(item);
          }),
        );
        return resources.flatMap((resources) => {
          return resources.map((resource) => ({
            name: resource.name,
            from: resource.from,
            text: resource.text,
          }));
        });
      } catch (error) {
        console.error("Error processing resources:", error);
      }
    } else {
      console.log("file select cancel");
    }
  },
  showMessageBox: (type: string) =>
    ipcRenderer.invoke("show-message-box", type),
});
