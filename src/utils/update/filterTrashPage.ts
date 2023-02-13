import { IPage } from "../../types/interface";
const filterTrashPage = (pages: IPage[]): IPage[] => {
  return pages.filter((page) => page.dataTrash.length > 0);
};

export default filterTrashPage;
