import UserService from "../../store/user/user.action";
import { IUpdateUserPages, IUserPages } from "../../types/interface";
import replacePageObject from "./replacePageObject";

const asyncUpdatePages = async ({ pages, accessToken }: IUserPages) => {
  return await UserService.updatePages(pages, accessToken);
};

export const updateUserPagesUtils = ({
  replaceObject,
  pageId,
  //accessToken,
  userPages,
}: IUpdateUserPages) => {
  const pages = replacePageObject(userPages, replaceObject, pageId);
  //asyncUpdatePages({ pages, accessToken });
  return pages;
};

export default asyncUpdatePages;
