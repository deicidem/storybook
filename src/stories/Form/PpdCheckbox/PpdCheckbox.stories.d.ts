import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdCheckbox } from './PpdCheckbox.vue';

export type StoryProps = ComponentProps<typeof PpdCheckbox> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdCheckbox>;
export declare const Properties: Story;
export declare const Types: Story;
