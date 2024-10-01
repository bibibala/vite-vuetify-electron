// 在 global.d.ts 中
import 'electron';

declare global {
  interface Window {
    ipcRenderer: {
      on(channel: string, listener: (...args: any[]) => void): void;
      off(channel: string, listener: (...args: any[]) => void): void;
      send(channel: string, ...args: any[]): void;
      invoke(channel: string, ...args: any[]): Promise<any>;
      select(args: any): void;
      selectOver(args: any): void;
    };
  }
}
