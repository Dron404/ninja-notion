import React from "react";
import styles from "./Sidebar.module.scss";

import { SidebarTopbar } from "./SidebarTopbar";
import { SidebarPages } from "./SidebarPages";
import { Search } from "./Search";
import { Settings } from "../Settings";
import { main } from "../../../data/languages/main";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import SkeletonSidebar from "../Skeleton/SkeletonSidebar";
import SkeletonSidebarBottombar from "../Skeleton/SkeletonSidebarBottombar";

import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as SearchSVG } from "../../../assets/img/svg/search.svg";
import { ReactComponent as AddSVG } from "../../../assets/img/svg/add.svg";
import { userSlice } from "../../../store/user/user.slice";
import moveToPage from "../../../utils/update/moveToPage";
import removePage from "../../../utils/update/removePage";
import dateHomePage from "../../../data/dateHomePage";
import dateDeletedPage from "../../../data/dateDeletedPage";
import UserService from "../../../store/user/user.action";
import addNewPageForState from "../../../utils/update/addNewPageForState";
import { Button } from "../buttons/Button";

export const Sidebar = (): React.ReactElement => {
  const { lang, isLoading, arrayPage, trashPage, user, activePage } =
    useAppSelector((store) => store.userReducer);
  const data = main[lang];
  const dispatch = useAppDispatch();
  const {
    updatePagesState,
    updateArrayPage,
    updateUserState,
    replaceActivePage,
  } = userSlice.actions;

  const placeholderSearch = `${data.text_search} ${user?.name} ${data.text_s_notion}`;
  const placeholderTrash = `${data.text_search} ${data.text_trash}`;
  const placeholderMoveTo = `${data.text_search} ${data.text_move_to}`;

  const handleTrash = (pageId: string) => {
    const replaceObject = { dataTrash: "" };
    dispatch(
      updatePagesState({
        replaceObject,
        pageId,
      })
    );
    dispatch(updateArrayPage());
  };

  const handleMoveTo = (pageIdTo: string) => {
    if (user && user.pages && activePage) {
      const pages = moveToPage(user.pages, activePage, pageIdTo);
      dispatch(updateUserState({ ...user, ...{ pages: pages } }));
      dispatch(updateArrayPage());
    }
  };

  const handleRemovePage = (pageId: string) => {
    if (user && user.pages) {
      const pages = removePage(user.pages, pageId);
      dispatch(updateUserState({ ...user, ...{ pages: pages } }));
      dispatch(updateArrayPage());
      if (activePage?._id === pageId) {
        dispatch(replaceActivePage(dateDeletedPage));
      }
    }
  };

  const arrayPagesAndHomePage = arrayPage
    ? [dateHomePage, ...arrayPage]
    : [dateHomePage];

  const handleCreatePage = async (pageId = "") => {
    if (pageId && user) {
      const pages = await addNewPageForState(user.pages, pageId);
      const response = await UserService.updatePages(pages);
      if (response && response?.status === 200) {
        dispatch(updateUserState({ pages: response.pages }));
      }
    }
  };

  return (
    <>
      <div className={`${styles.sidebar} aside_status`}>
        <div className={`${styles.nav} ${styles.sidebar__nav}`}>
          {isLoading ? (
            <SkeletonSidebar />
          ) : (
            <>
              <SidebarTopbar />
              <div className={styles.sidebar__scroll}>
                <Settings />
                <Search
                  placeholder={placeholderSearch}
                  text={data.text_search}
                  icon={<SearchSVG />}
                  dataPages={arrayPage}
                  cName="modal-top"
                  type="search"
                />
                <SidebarPages />
                <div className={styles.sidebar__trash}>
                  <Search
                    placeholder={placeholderTrash}
                    text={data.text_trash}
                    icon={<TrashSVG />}
                    dataPages={trashPage}
                    type="trash"
                    cName="modal-top"
                    handle={handleTrash}
                    handleButton={handleRemovePage}
                  />
                </div>

                <Search
                  placeholder={placeholderMoveTo}
                  text="hide"
                  icon="hide"
                  dataPages={arrayPagesAndHomePage}
                  type="move"
                  cName="modal-top"
                  handle={handleMoveTo}
                  hotkey="Ctrl+Shft+P"
                />
              </div>
            </>
          )}
        </div>
        {isLoading ? (
          <SkeletonSidebarBottombar />
        ) : (
          <div>
            <div className="hr-line"></div>
            <div className={styles.bottombar}>
              <Button
                icon={<AddSVG />}
                text={data.text_add}
                cName={styles.bottombar__wrapper}
                handle={handleCreatePage}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
