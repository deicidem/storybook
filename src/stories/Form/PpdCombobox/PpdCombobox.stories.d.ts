import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdCombobox } from './PpdCombobox.vue';

export type StoryProps = ComponentProps<typeof PpdCombobox> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdCombobox>;
export declare const Properties: Story;
export declare const Types: Story;
