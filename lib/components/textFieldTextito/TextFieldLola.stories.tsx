import type { Meta, StoryObj } from "@storybook/react";

import { TextFieldLola } from "./TextFieldLola";

const meta: Meta<typeof TextFieldLola> = {
  component: TextFieldLola,
  title: "components/TextFieldChulo",
};

export default meta;

type Story = StoryObj<typeof TextFieldLola>;

export const Textito: Story = {};
