import React from "react";
import styles from "./Sidebar.module.scss";

import { SidebarBottombar } from "../SidebarBottombar";
import { SidebarTopbar } from "../SidebarTopbar";
import { SidebarPages } from "../SidebarPages";
import { Search } from "../Search";
import { Settings } from "../Settings";
import { main } from "../../../data/languages/main";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import SkeletonSidebar from "../Skeleton/SkeletonSidebar";
import SkeletonSidebarBottombar from "../Skeleton/SkeletonSidebarBottombar";

import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as SearchSVG } from "../../../assets/img/svg/search.svg";
import { userSlice } from "../../../store/user/user.slice";
import moveToPage from "../../../utils/update/moveToPage";
import { IPage } from "../../../types/interface";
import findActivePage from "../../../utils/update/findActivePage";

export const Sidebar = (): React.ReactElement => {
  const { lang, isLoading, arrayPage, trashPage, user, activePage } =
    useAppSelector((store) => store.userReducer);
  const data = main[lang];
  const dispatch = useAppDispatch();
  const { updatePagesState, updateArrayPage, updateUserState } =
    userSlice.actions;

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
                  />
                </div>

                <Search
                  placeholder={placeholderMoveTo}
                  text="hide"
                  icon="hide"
                  dataPages={arrayPage}
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
          <SidebarBottombar text={data.text_newpage} />
        )}
      </div>
    </>
  );
};
