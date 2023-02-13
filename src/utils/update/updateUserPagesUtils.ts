import UserService from "../../store/user/user.action";
import { IUpdateUserPages, IUserPages } from "../../types/interface";
import replacePageObject from "./replacePageObject";

const asyncUpdatePages = async ({ pages }: IUserPages) => {
  return await UserService.updatePages(pages);
};

export const updateUserPagesUtils = ({
  replaceObject,
  pageId,
  userPages,
}: IUpdateUserPages) => {
  const pages = replacePageObject(userPages, replaceObject, pageId);
  return pages;
};

export default asyncUpdatePages;
