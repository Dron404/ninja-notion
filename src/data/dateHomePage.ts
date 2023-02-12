import { IPage } from "../types/interface";

import g_001 from "../assets/img/cover/g_001.jpg";
import getRandomCover from "../utils/getRandomCover";

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
    url: getRandomCover(),
    position: 100,
  },
  children_page: [],
};

export default dateHomePage;
