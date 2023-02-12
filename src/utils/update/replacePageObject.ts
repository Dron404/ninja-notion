import { IPage } from "../../types/interface";
const replacePageObject = (
  pages: IPage[],
  replaceObject: Partial<IPage>,
  pageId: string
): IPage[] => {
  function nextPage(pages: IPage[]): IPage[] {
    const iterationPages: IPage[] = [];
    pages.forEach((page, index) => {
      const replacePage = { ...page, ...replaceObject };
      iterationPages[index] = {
        ...(page._id === pageId ? replacePage : page),
      };
      if (page.children_page) {
        iterationPages[index].children_page = nextPage(page.children_page);
      }
    });
    return iterationPages;
  }
  return nextPage(pages);
};

export default replacePageObject;
