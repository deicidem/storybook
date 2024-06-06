import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdRadio } from './PpdRadio.vue';

export type StoryProps = ComponentProps<typeof PpdRadio> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdRadio>;
export declare const Properties: Story;
export declare const Types: Story;
