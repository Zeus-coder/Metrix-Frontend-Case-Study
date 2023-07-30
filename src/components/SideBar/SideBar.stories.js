import { SideBar } from ".";

export default {
  title: "Components/SideBar",
  component: SideBar,
  argTypes: {
    menuItem: {
      options: ["dashboard", "marketting", "customers", "inventory", "conversations", "orders", "settings"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    menuItem: "dashboard",
    open: true,
    className: {},
    fiHeadphonesFiHeadphonesClassName: {},
  },
};
