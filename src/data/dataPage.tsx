import React from "react";

import { IPage } from "../types/interface";

import g_001 from "../assets/img/cover/g_001.jpg";

export const dataPage: IPage = {
  object: "page",
  id: 103,
  cover: { url: g_001, position: 100 }, // null
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
};
