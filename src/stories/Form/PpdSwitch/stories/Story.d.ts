import { Component, default as Vue } from '../../../../../vue/dist/vue.esm.js';
import { default as meta } from '../PpdSwitch.stories';

export default function renderComponent(component: Component, argTypes: typeof meta.argTypes): import('../../../../../vue/dist/vue.esm.js/types/vue').ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, unknown, unknown, Record<"value" | "label" | "success" | "warning" | "error" | "loading" | "disabled" | "errorCount" | "errorMessages" | "hideDetails" | "hint" | "messages" | "persistentHint" | "readonly" | "rules" | "successMessages" | "validateOnBlur" | "warningMessage" | "multiple" | "valueComparator" | import('../../../../../vue/dist/vue.esm.js/types/v3-component-props').DefaultKeys<{
    value: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
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
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
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
    ripple: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<boolean>;
        default: boolean;
    };
    valueComparator: {
        type: import('../../../../../vue/dist/vue.esm.js').PropType<(value1: any, value2: any) => boolean>;
    };
}> | "defaultText", any>, {}, import('../../../../../vue/dist/vue.esm.js').ComponentOptionsMixin, import('../../../../../vue/dist/vue.esm.js').ComponentOptionsMixin>;
