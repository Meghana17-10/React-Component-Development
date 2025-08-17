import type { Meta, StoryObj } from "@storybook/react";

const Button = ({ label }: { label: string }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded">
    {label}
  </button>
);

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: "Hello Storybook" },
};
