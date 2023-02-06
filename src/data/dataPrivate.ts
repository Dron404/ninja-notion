import { IData } from "../types/interface";

export const dataPrivate: IData = {
  pages: [
    {
      object: "page",
      id: 101,
      cover: null,
      icon: "📗",
      favorite: false,
      property: {
        font: "default", // default, serif, mono
        small_text: false,
        full_width: false,
      },
      name: "Name Page 3",
      date_add: "2013-01-01",
      date_mod: "2013-01-01",
      url: "/page/3",
      children: [
        {
          object: "page",
          id: 102,
          cover: null,
          icon: null,
          favorite: false,
          property: {
            font: "default", // default, serif, mono
            small_text: false,
            full_width: false,
          },
          name: "Name Page",
          date_add: "2013-01-01",
          date_mod: "2013-01-01",
          url: "/page/3",
          children: [],
        },
      ],
    },
    {
      object: "page",
      id: 103,
      cover: null,
      icon: "📗",
      favorite: false,
      property: {
        font: "default",
        small_text: false,
        full_width: false,
      },
      name: "Name Page 2",
      date_add: "2013-01-01",
      date_mod: "2013-01-01",
      url: "/page/1",
      children: [],
    },
  ],
};
