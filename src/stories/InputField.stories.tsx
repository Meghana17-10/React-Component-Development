import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InputField } from "../components/InputField";

const metaInputField: Meta<typeof InputField> = {
  title: "Form/InputField",
  component: InputField,
};
export default metaInputField;

type Story = StoryObj<typeof InputField>;

export const Outlined: Story = {
  args: { label: "Username", placeholder: "Enter username", variant: "outlined" },
};

export const Filled: Story = {
  args: { label: "Email", placeholder: "you@example.com", variant: "filled" },
};

export const Ghost: Story = {
  args: { label: "Search", placeholder: "Type to search", variant: "ghost" },
};

export const Invalid: Story = {
  args: { label: "Code", invalid: true, errorMessage: "Invalid input" },
};

export const Password: Story = {
  render: () => {
    const [v, setV] = useState("");
    return (
      <InputField
        label="Password"
        type="password"
        value={v}
        onChange={(e) => setV(e.target.value)}
        helperText="Min 8 characters"
      />
    );
  },
};
