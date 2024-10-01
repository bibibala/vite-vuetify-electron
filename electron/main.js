"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RENDERER_DIST = exports.MAIN_DIST = exports.VITE_DEV_SERVER_URL = void 0;
var electron_1 = require("electron");
var node_module_1 = require("node:module");
var node_url_1 = require("node:url");
var node_path_1 = require("node:path");
var require = (0, node_module_1.createRequire)(import.meta.url);
var __dirname = node_path_1.default.dirname((0, node_url_1.fileURLToPath)(import.meta.url));
// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = node_path_1.default.join(__dirname, '..');
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
exports.VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
exports.MAIN_DIST = node_path_1.default.join(process.env.APP_ROOT, 'dist-electron');
exports.RENDERER_DIST = node_path_1.default.join(process.env.APP_ROOT, 'dist');
process.env.VITE_PUBLIC = exports.VITE_DEV_SERVER_URL ? node_path_1.default.join(process.env.APP_ROOT, 'public') : exports.RENDERER_DIST;
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({
        // frame: false,
        width: 1000,
        height: 650,
        icon: node_path_1.default.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
        webPreferences: {
            preload: node_path_1.default.join(__dirname, 'preload.mjs'),
        },
    });
    // Test active push message to Renderer-process.
    win.webContents.on('did-finish-load', function () {
        win === null || win === void 0 ? void 0 : win.webContents.send('main-process-message', (new Date).toLocaleString());
    });
    win.webContents.openDevTools();
    if (exports.VITE_DEV_SERVER_URL) {
        win.loadURL(exports.VITE_DEV_SERVER_URL);
    }
    else {
        // win.loadFile('dist/index.html')
        win.loadFile(node_path_1.default.join(exports.RENDERER_DIST, 'index.html'));
    }
}
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
        win = null;
    }
});
electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
electron_1.app.whenReady().then(createWindow);
