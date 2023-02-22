import { IPage } from "../../types/interface";

const moveToPage = (
  pages: IPage[],
  dataPage: IPage,
  pageId: string
): IPage[] => {
  const fromId = dataPage._id;
  const toId = pageId;
  function nextPage(pages: IPage[]): IPage[] {
    const iterationPages: IPage[] = [];
    pages.forEach((page) => {
      let state: IPage | null = page;
      if (fromId === page._id) {
        state = null;
      }

      if (page.children_page && page.children_page.length > 0) {
        state = {
          ...page,
          ...{ children_page: nextPage(page.children_page) },
        };
      }

      if (state && state.children_page && page._id === toId) {
        const childrenPage = [...state.children_page];
        childrenPage.push(dataPage);
        state = {
          ...state,
          ...{ children_page: childrenPage },
        };
      }

      if (state) {
        iterationPages.push(state);
      }
    });
    return iterationPages;
  }

  const result = nextPage(pages);

  if (pageId.length === 0) {
    result.push(dataPage);
  }

  return result;
};

export default moveToPage;
