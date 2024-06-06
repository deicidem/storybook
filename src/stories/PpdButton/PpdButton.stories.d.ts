import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as ppdButton } from './PpdButton.vue';

export type StoryProps = ComponentProps<typeof ppdButton> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof ppdButton>;
export declare const Properties: Story;
export declare const Sizes: Story;
export declare const Types: Story;
