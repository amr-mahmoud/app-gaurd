import { PluginsGroup, TabGroup } from "../../types";

export type InitialStateType = {
  tabs: TabGroup;
  plugins: PluginsGroup;
};

export const initState: InitialStateType = {
  tabs: {},
  plugins: {
    plugin1: {
      title: "Plugin 1",
      description:
        "Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.",
    },
    plugin2: {
      title: "Plugin 2",
      description:
        "Proident sunt consequat exercitation incididunt cupidatat quis ut ut eu ullamco nisi excepteur aliqua.",
    },
    plugin3: {
      title: "Plugin 3",
      description:
        "Amet ea quis qui reprehenderit laborum aute magna incididunt et dolore.",
    },
    plugin4: {
      title: "Plugin 4",
      description: "Sunt culpa labore consequat eu veniam laborum.",
    },
    plugin5: {
      title: "Plugin 5",
      description:
        "Proident laborum sint nisi enim non aliqua incididunt dolor voluptate tempor.",
    },
    plugin6: {
      title: "Plugin 6",
      description:
        "Qui cillum velit elit incididunt excepteur nostrud occaecat.",
    },
    plugin7: {
      title: "Plugin 7",
      description:
        "Culpa excepteur aliquip adipisicing sunt sunt proident aute eiusmod.",
    },
    plugin8: {
      title: "Plugin 8",
      description: "Eiusmod ex labore cillum elit.",
    },
    plugin9: {
      title: "Plugin 9",
      description: "Ut sit sit fugiat qui ullamco ea ea id qui esse magna.",
    },
    plugin10: {
      title: "Plugin 10",
      description:
        "Aliqua tempor nostrud occaecat enim nulla proident nostrud enim adipisicing pariatur velit.",
    },
    plugin11: {
      title: "Plugin 11",
      description: "Consectetur sit amet velit cillum sunt cillum sunt.",
    },
    plugin12: {
      title: "Plugin 12",
      description: "Exercitation in aute ut ex aliqua ea.",
    },
    plugin13: {
      title: "Plugin 13",
      description: "Dolor laboris culpa ipsum aliqua velit mollit.",
    },
  },
};
