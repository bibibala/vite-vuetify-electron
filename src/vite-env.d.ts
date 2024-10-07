/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import { IpcRenderer } from "electron";

declare global {
  interface Window {
    ipcRenderer: IpcRenderer & {
      select: (args: any) => void;
      selectOver: (args: any) => void;
      readDir: (pathRoot: string) => string[];
    };
  }
}
