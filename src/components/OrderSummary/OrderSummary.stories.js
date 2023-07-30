import { OrderSummary } from ".";

export default {
  title: "Components/OrderSummary",
  component: OrderSummary,
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
