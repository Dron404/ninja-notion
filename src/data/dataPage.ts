import { IPage } from "../types/interface";

import g_001 from "../assets/img/cover/g_001.jpg";

export const dataPage: IPage = {
  id: 103,
  cover: { url: g_001, position: 100 },
  icon: "📗",
  favorite: false,
  property: {
    font: "default",
    small_text: false,
    full_width: false,
  },
  comment: "string",
  content: "string",
  name: "Name Page 2",
  date_add: "2013-01-01",
  date_mod: "2013-01-01",
  date_trash: "2013-01-01",
  children: [],
};
