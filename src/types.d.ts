export type Tab = {
  title: string;
  icon: string;
  active: string[];
  disabled: string[];
  inactive: string[];
};

export type Plugin = {
  title: string;
  description: string;
};

export const TabName: string = "marketing" | "finance" | "personnel";

export type TabGroup = Record<TabName, Tab>;
export type PluginsGroup = Record<string, Plugin>;
