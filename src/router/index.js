"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var index_vue_1 = require("@/pages/Home/index.vue");
var routes = [
    {
        path: "/",
        redirect: "/Home",
    },
    {
        path: "/Home",
        name: "Home",
        component: index_vue_1.default,
    },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: routes,
});
exports.default = router;
