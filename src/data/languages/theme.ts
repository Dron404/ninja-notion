import { ITheme } from "../../types/interface";

export const themes: ITheme[] = [
  {
    code: "dark",
    name: { ru: "Темная", en: "Dark", pl: "Ciemny" },
    description: { ru: "Темная тема", en: "Dark theme", pl: "Ciemny temat" },
  },
  {
    code: "light",
    name: { ru: "Светлая", en: "Light", pl: "Jasny" },
    description: { ru: "Светлая тема", en: "Light theme", pl: "Jasny temat" },
  },
  {
    code: "cobalt2",
    name: { ru: "Кобальт2", en: "Cobalt2", pl: "Cobalt2" },
    description: {
      ru: "Кобальт2 тема",
      en: "Cobalt2 theme",
      pl: "Cobalt2 temat",
    },
  },
];
