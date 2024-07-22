import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Buttonsitooooo", // Título que aparecerá en el panel de Storybook
  parameters: {
    // Parámetros adicionales para la historia
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  argTypes: {
    // Tipos de argumentos y controles
    handleClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    handleClick: "clickado",
    title: "Version",
  },
};
