import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdSelect } from './PpdSelect.vue';

export type StoryProps = ComponentProps<typeof PpdSelect> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdSelect>;
export declare const Properties: Story;
export declare const Types: Story;
