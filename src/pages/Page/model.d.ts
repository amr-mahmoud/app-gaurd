import { Tab } from "../../types";

export type PageProps = {
  title: string;
};

export type TCardProps = {
  card: CardProps;
  targetTab: Tab;
  path: path;
  dispatch: React.Dispatch<any>;
};

export type CardProps = {
  id: string;
  title: string;
  description?: string;
  active: boolean;
  disabled: boolean;
};
