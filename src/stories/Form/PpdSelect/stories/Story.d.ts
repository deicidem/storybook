import { Component, default as Vue } from '../../../../../vue/dist/vue.esm.js';
import { default as meta } from '../PpdSelect.stories';

export default function renderComponent(component: Component, argTypes: typeof meta.argTypes): import('../../../../../vue/dist/vue.esm.js/types/vue').ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, unknown, unknown, Record<"value" | "label" | "success" | "warning" | "error" | "loading" | "noDataText" | "counter" | "disabled" | "errorCount" | "errorMessages" | "hideDetails" | "hint" | "messages" | "persistentHint" | "readonly" | "rules" | "successMessages" | "validateOnBlur" | "warningMessage" | "multiple" | "autofocus" | "cacheItems" | "chips" | "clearable" | "counterValue" | "deletableChips" | "disableLookup" | "eager" | "hideSelected" | "itemColor" | "itemDisabled" | "itemText" | "itemValue" | "items" | "openOnClear" | "persistentPlaceholder" | "placeholder" | "prefix" | "returnObject" | "smallChips" | "suffix" | "valueComparator" | import('../../../../../vue/dist/vue.esm.js/types/v3-component-props').DefaultKeys<{
    value: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | any[]>;
    };
    label: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    dense: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
        default: boolean;
    };
    success: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    warning: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    error: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    loading: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | number | boolean>;
    };
    noDataText: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    counter: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | number | boolean>;
    };
    disabled: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    errorCount: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | number>;
    };
    errorMessages: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | string[]>;
    };
    hideDetails: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | boolean>;
    };
    hint: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    messages: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | string[]>;
    };
    persistentHint: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    readonly: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    rules: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<any>;
    };
    successMessages: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | string[]>;
    };
    validateOnBlur: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    warningMessage: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    multiple: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    autofocus: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    cacheItems: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    chips: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    clearable: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    counterValue: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<import('../../../../../vue/dist/vue.esm.js').PropType<(value: any) => number>>;
    };
    deletableChips: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    disableLookup: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    eager: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    hideSelected: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    itemColor: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    itemDisabled: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | any[] | ((value: any) => boolean)>;
    };
    itemText: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | any[] | ((value: any) => boolean)>;
    };
    itemValue: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | any[] | ((value: any) => boolean)>;
    };
    items: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<(string | Record<string, any>)[]>;
        required: true;
    };
    menuProps: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string | any[] | Record<string, any>>;
        default: () => {
            offsetY: boolean;
        };
    };
    openOnClear: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    persistentPlaceholder: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    placeholder: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    prefix: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    returnObject: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    smallChips: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
    };
    suffix: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<string>;
    };
    valueComparator: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<(value1: any, value2: any) => boolean>;
    };
}> | "defaultText", any>, {}, import('../../../../../vue/dist/vue.esm.js').ComponentOptionsMixin, import('../../../../../vue/dist/vue.esm.js').ComponentOptionsMixin>;
