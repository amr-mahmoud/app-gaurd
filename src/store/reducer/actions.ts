import { PluginsGroup, TabGroup } from "../../types";
import { Tab } from "../../types";

export enum ActionTypes {
  UPDATE_TAB = "UPDATE_TAB",
  GET_PLUGINS_DATA = "GET_PLUGINS_DATA",
  GET_TABS_DATA = "GET_TABS_DATA",
}

export type getPlugins = {
  type: ActionTypes.GET_PLUGINS_DATA;
  payload: PluginsGroup;
};

export type getTabs = {
  type: ActionTypes.GET_TABS_DATA;
  payload: TabGroup;
};

export type updateTab = {
  type: ActionTypes.UPDATE_TAB;
  payload: { id: string; tab: Tab };
};

export type actions = updateTab | getPlugins | getTabs;
