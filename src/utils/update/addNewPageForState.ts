import { IPage } from "../../types/interface";

const addNewPageForState = async (
  pages: IPage[],
  pageId: string
): Promise<IPage[]> => {
  const randomPage = await import("../getRandomNewPage");
  const newRandomPage = await randomPage.default();
  function nextPage(pages: IPage[]): IPage[] {
    const iterationPages: IPage[] = [];
    pages.forEach((page) => {
      let state: IPage = page;
      if (page.children_page && page.children_page.length > 0) {
        state = {
          ...page,
          ...{ children_page: nextPage(page.children_page) },
        };
      }
      if (page._id === pageId && state.children_page) {
        const children = [...state.children_page];

        children.push(newRandomPage);
        state = { ...state, ...{ children_page: children } };
      }

      iterationPages.push(state);
    });
    return iterationPages;
  }
  let result;
  if (pageId.length > 0) {
    return await nextPage(pages);
  } else {
    result = [...pages];
    result.push(newRandomPage);
    return result;
  }
};

export default addNewPageForState;
