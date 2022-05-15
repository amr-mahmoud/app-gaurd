import { Tab, PluginsGroup, TabGroup } from "../../types";

export type InitialStateType = {
  tabs: TabGroup;
  plugins: PluginsGroup;
};

export const initState: InitialStateType = {
  tabs: {
    marketing: {
      title: "Marketing",
      icon: "icon-marketing",
      active: ["plugin1", "plugin2", "plugin4"],
      disabled: ["plugin3"],
      inactive: ["plugin5", "plugin6"],
    },
    Finance: {
      title: "Finance",
      icon: "icon-finance",
      active: ["plugin7", "plugin8"],
      disabled: ["plugin9"],
      inactive: ["plugin10"],
    },
    personnel: {
      title: "Personnel",
      icon: "icon-people",
      active: ["plugin11"],
      disabled: ["plugin12"],
      inactive: ["plugin13"],
    },
  },
  plugins: {},
};
