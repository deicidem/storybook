import { Ref } from '../../../../../vue/dist/vue.esm.js';

export default function useMobileInput({ dense }: {
    dense: Ref<boolean>;
}): {
    isMobile: import('../../../../../vue/dist/vue.esm.js').ComputedRef<boolean>;
};
