export default function useInputStates<T>(props: {
    warning?: boolean;
    warningMessage?: string;
    hint?: string;
}): {
    input: import('../../../../../vue/dist/vue.esm.js').Ref<import('../../../../../vue/dist/vue.esm.js').UnwrapRef<T & {
        hasSuccess: boolean;
        hasError: boolean;
    }> | null>;
    hasSuccess: import('../../../../../vue/dist/vue.esm.js').ComputedRef<boolean | null>;
    hasError: import('../../../../../vue/dist/vue.esm.js').ComputedRef<boolean | null>;
    hasWarning: import('../../../../../vue/dist/vue.esm.js').ComputedRef<boolean | undefined>;
    classes: import('../../../../../vue/dist/vue.esm.js').ComputedRef<{
        'v-input--success': boolean | null;
        'v-input--error': boolean | null;
        'v-input--warning': boolean | undefined;
        'warning--text': boolean | undefined;
    }>;
    computedMessage: import('../../../../../vue/dist/vue.esm.js').ComputedRef<string | undefined>;
};
