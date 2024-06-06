export interface Props {
    activeClass?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    readonly?: boolean;
    ripple?: boolean;
    value?: any;
}
declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    dense: boolean;
    ripple: boolean;
}>, {}, {}, {}, {}, import('../../../../vue/dist/vue.esm.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm.js').ComponentOptionsMixin, {}, string, Readonly<import('../../../../vue/dist/vue.esm.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    dense: boolean;
    ripple: boolean;
}>>>, {
    ripple: boolean;
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
