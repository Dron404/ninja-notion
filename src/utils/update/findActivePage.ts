import { IActivePage, IPage } from "../../types/interface";

function findActivePage(pages: IPage[], pageId: string): IActivePage {
  const result: IActivePage = { activePage: null, breadcrumbs: null };
  const breadcrumbs: IPage[] = [];
  function nextPage(pages: IPage[]) {
    pages.forEach((page) => {
      if (page._id === pageId) {
        breadcrumbs.push(page);
        result.activePage = page;
        return breadcrumbs;
      } else {
        if (page.children_page) {
          breadcrumbs.push(page);
          return nextPage(page.children_page);
        }
      }
    });
    return breadcrumbs;
  }
  nextPage(pages);
  return { ...result, ...{ breadcrumbs: breadcrumbs } };
}

export default findActivePage;
