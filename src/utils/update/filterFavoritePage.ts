import { IPage } from "../../types/interface";
const filterFavoritePage = (pages: IPage[]): IPage[] => {
  return pages.filter((page) => page.favorite && !page.dataTrash);
};

export default filterFavoritePage;
