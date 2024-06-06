import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdTextarea } from './PpdTextarea.vue';

export type StoryProps = ComponentProps<typeof PpdTextarea> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdTextarea>;
export declare const Properties: Story;
export declare const Types: Story;
