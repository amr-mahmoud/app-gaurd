import { PluginsGroup, TabGroup } from "../../types";

export enum ActionTypes {
  TOGGLE_PLUGIN = "TOGGLE_PLUGIN",
  TOGGLE_PLUGINS_DISABLE = "TOGGLE_PLUGIN_DISABLE",
  GET_PLUGINS_DATA = "GET_PLUGINS_DATA",
  GET_TABS_DATA = "GET_TABS_DATA",
}

export type getPlugins = {
  type: ActionTypes.GET_PLUGINS_DATA;
  payload: { data: PluginsGroup };
};

export type getTabs = {
  type: ActionTypes.GET_TABS_DATA;
  payload: { data: TabGroup };
};

export type togglePlugin = {
  type: ActionTypes.TOGGLE_PLUGIN;
  payload: { id: string };
};

export type togglePluginsDisable = {
  type: ActionTypes.TOGGLE_PLUGINS_DISABLE;
  payload: { id: string };
};

export type actions =
  | togglePlugin
  | togglePluginsDisable
  | getPlugins
  | getTabs;
