import { IPage } from "../../types/interface";

const removePage = (pages: IPage[], pageId: string): IPage[] => {
  function nextPage(pages: IPage[]): IPage[] {
    const iterationPages: IPage[] = [];
    pages.forEach((page) => {
      let state: IPage | null = page;

      if (page.children_page && page.children_page.length > 0) {
        state = {
          ...page,
          ...{ children_page: nextPage(page.children_page) },
        };
      }

      if (page._id === pageId) {
        state = null;
      }

      if (state) {
        iterationPages.push(state);
      }
    });
    return iterationPages;
  }
  const result = nextPage(pages);
  return result;
};

export default removePage;
