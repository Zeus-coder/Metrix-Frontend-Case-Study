import { BarChart } from ".";

export default {
  title: "Components/BarChart",
  component: BarChart,
  argTypes: {
    state: {
      options: ["plus-data", "empty"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "plus-data",
    className: {},
  },
};
