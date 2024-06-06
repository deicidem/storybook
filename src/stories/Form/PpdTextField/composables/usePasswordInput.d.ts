export default function usePasswordInput(inputType: 'password' | string): {
    isPassword: import('../../../../../vue/dist/vue.esm.js').ComputedRef<boolean>;
    isPasswordVisible: import('../../../../../vue/dist/vue.esm.js').Ref<boolean>;
    changePasswordVisibility: () => void;
    computedType: import('../../../../../vue/dist/vue.esm.js').ComputedRef<string>;
};
