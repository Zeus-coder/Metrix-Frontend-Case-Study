import { DashboardSummary } from ".";

export default {
  title: "Components/DashboardSummary",
  component: DashboardSummary,
  argTypes: {
    type: {
      options: ["double", "single", "tripple"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "double",
    className: {},
    iconClassName: {},
    text: "Customers",
    frameClassName: {},
    text1: "0",
    hasElement: true,
    text2: "Active",
    text3: "+0.00%",
    elementClassName: {},
    elementClassNameOverride: {},
    divClassName: {},
    filterClassName: {},
    thisWeekClassName: {},
    fiChevronDownFiChevronDownClassName: {},
    fiChevronDownFiChevronDown: "/img/fi-chevron-down-18.png",
    customersClassName: {},
    divClassNameOverride: {},
    elementClassName1: {},
    activeClassName: {},
    elementClassName2: {},
    elementClassName3: {},
  },
};
