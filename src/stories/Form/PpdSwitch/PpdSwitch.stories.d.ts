import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdSwitch } from './PpdSwitch.vue';

export type StoryProps = ComponentProps<typeof PpdSwitch> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdSwitch>;
export declare const Properties: Story;
export declare const Types: Story;
