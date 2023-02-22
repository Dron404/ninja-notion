import { IPage } from "../types/interface";

import url from "../assets/img/cover/g_011.jpg";

const dateHomePage: IPage = {
  _id: "home",
  content: "Example content. Welcome to my ninja notion clone!",
  name: "Home page",
  icon: "🏠",
  comment: "Example you comment",
  favorite: false,
  property: {
    font: "default",
    small_text: false,
    full_width: false,
  },
  dataTrash: "",
  dataAdd: "2023-01-01",
  dataMod: "2023-01-01",
  cover: {
    url: url,
    position: 100,
  },
  children_page: [],
};

export default dateHomePage;
