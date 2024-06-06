import { Meta, StoryObj } from '@storybook/vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { default as PpdAutocomplete } from './PpdAutocomplete.vue';

export type StoryProps = ComponentProps<typeof PpdAutocomplete> & {
    defaultText?: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<typeof PpdAutocomplete>;
export declare const Properties: Story;
export declare const Types: Story;
