import 'electron';

declare module 'electron' {
  interface IpcRenderer {
    select(args: any): void;
    selectOver(args: any): void;
    readDir(pathRoot: string): string[];
  }
}
