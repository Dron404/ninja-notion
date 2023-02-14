import { IPage } from "../types/interface";
const date = String(new Date());
const dataNewPage: IPage = {
  property: {
    font: "default",
    small_text: false,
    full_width: false,
  },
  cover: {
    url: "",
    position: 100,
  },
  content: "",
  name: "New Page",
  icon: "😜",
  comment: "",
  favorite: false,
  dataTrash: "",
  dataAdd: date,
  dataMod: date,
  children_page: [],
};

export default dataNewPage;
