import { IPage } from "../../types/interface";

function pagesToArray(pages: IPage[]): IPage[] | null | undefined {
  const array: IPage[] = [];
  function nextPage(pages: IPage[]) {
    if (pages.length > 0) {
      pages.forEach((page) => {
        const newPage: IPage = { ...page, ...{ children_page: null } };
        array.push(newPage);
        nextPage;
        if (page.children_page) {
          nextPage(page.children_page);
        }
      });
    } else if (pages.length === 1) {
      array.push(pages[0]);
    }
    return array;
  }
  return nextPage(pages);
}

export default pagesToArray;
