import { PropType } from '../../../../vue/dist/vue.esm.js';

export interface Props {
    autofocus?: boolean;
    clearable?: boolean;
    counter?: boolean | number | string;
    counterValue?: PropType<(value: any) => number>;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorCount?: number | string;
    errorMessages?: string | Array<string>;
    hideDetails?: boolean | string;
    hideSpinButtons?: boolean;
    hint?: string;
    label?: string;
    loading?: boolean | number | string;
    messages?: string | Array<string>;
    persistentHint?: boolean;
    persistentPlaceholder?: boolean;
    placeholder?: string;
    prefix?: string;
    readonly?: boolean;
    rules?: any;
    success?: boolean;
    successMessages?: string | Array<string>;
    suffix?: string;
    type?: string;
    validateOnBlur?: boolean;
    value?: string;
    warning?: boolean;
    warningMessage?: string;
}
declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    type: string;
    dense: boolean;
}>, {}, {}, {}, {}, import('../../../../vue/dist/vue.esm.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm.js').ComponentOptionsMixin, {}, string, Readonly<import('../../../../vue/dist/vue.esm.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    type: string;
    dense: boolean;
}>>>, {
    type: string;
    dense: boolean;
}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: {}) => any>>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../../vue/dist/vue.esm.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../../vue/dist/vue.esm.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
