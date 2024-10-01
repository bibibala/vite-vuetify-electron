"use strict";
/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var drawer = (0, vue_1.ref)(true);
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VAppBar;
    /** @type { [typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ app: (true), dark: (true), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ app: (true), dark: (true), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VAppBarNavIcon;
    /** @type { [typeof __VLS_components.VAppBarNavIcon, typeof __VLS_components.vAppBarNavIcon, typeof __VLS_components.VAppBarNavIcon, typeof __VLS_components.vAppBarNavIcon, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ 'onClick': {} })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12;
    var __VLS_13 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.drawer = !__VLS_ctx.drawer;
        }
    };
    var __VLS_9;
    var __VLS_10;
    var __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.VSpacer;
    /** @type { [typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ] } */
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_15), false));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    var __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.VNavigationDrawer;
    /** @type { [typeof __VLS_components.VNavigationDrawer, typeof __VLS_components.vNavigationDrawer, typeof __VLS_components.VNavigationDrawer, typeof __VLS_components.vNavigationDrawer, ] } */
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.drawer)), app: (true), dark: (true), }));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.drawer)), app: (true), dark: (true), }], __VLS_functionalComponentArgsRest(__VLS_21), false));
    var __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
    // @ts-ignore
    var __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_27), false));
    var __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.VSpacer;
    /** @type { [typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ] } */
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_33), false));
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            drawer: drawer,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
;
