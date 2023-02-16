import { IPage } from "../types/interface";
import { Tlanguage } from "../types/types";
import { getLocalStorage } from "../utils/strorage/localStorage";

const lang: Tlanguage = getLocalStorage<Tlanguage>("lang") || "en";

import { main } from "./languages/main";

const data = main[lang];

const dateDeletedPage: IPage = {
  _id: "home",
  content: data.text_deleted_page_content,
  name: data.text_deleted_page_name,
  icon: "",
  comment: "",
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
    url: "",
    position: 100,
  },
  children_page: [],
};

export default dateDeletedPage;
