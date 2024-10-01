"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var vuetify_1 = require("@/plugins/vuetify");
var index_1 = require("@/router/index");
var app = (0, vue_1.createApp)(App_vue_1.default);
app.use(vuetify_1.default);
app.use(index_1.default);
app.mount('#app').$nextTick(function () {
    // Use contextBridge
    window.ipcRenderer.on('main-process-message', function (_event, message) {
        console.log(message);
    });
});
