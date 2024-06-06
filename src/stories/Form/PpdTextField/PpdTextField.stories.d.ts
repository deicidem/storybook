import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdTextField } from './PpdTextField.vue';

export type StoryProps = ComponentProps<typeof PpdTextField> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdTextField>;
export declare const Properties: Story;
export declare const Types: Story;
