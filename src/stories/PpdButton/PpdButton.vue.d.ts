export interface Props {
    size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
    block?: boolean;
    fab?: boolean;
    icon?: boolean;
    loading?: boolean;
    outlined?: boolean;
    dotted?: boolean;
    rounded?: boolean;
    text?: boolean;
    tonal?: boolean;
    active?: boolean;
    retainFocusOnClick?: boolean;
    type?: string;
}
declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    size: string;
}>, {}, {}, {}, {}, import('../../../vue/dist/vue.esm.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm.js').ComponentOptionsMixin, {}, string, Readonly<import('../../../vue/dist/vue.esm.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    size: string;
}>>>, {
    size: "small" | "default" | "x-small" | "large" | "x-large";
}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: {}) => any>>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm.js').PropType<T[K]>;
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
