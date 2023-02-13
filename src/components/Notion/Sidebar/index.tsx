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

export const Sidebar = (): React.ReactElement => {
  const { lang, isLoading, arrayPage, trashPage, user } = useAppSelector(
    (store) => store.userReducer
  );
  const data = main[lang];
  const dispatch = useAppDispatch();
  const { updatePagesState, updateArrayPage } = userSlice.actions;

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

  return (
    <>
      <div className={`${styles.sidebar} aside_status`}>
        <div className={`${styles.nav} ${styles.sidebar__nav}`}>
          {isLoading ? (
            <SkeletonSidebar />
          ) : (
            <>
              <SidebarTopbar />
              <Settings />
              <Search
                placeholder={placeholderSearch}
                text={data.text_search}
                icon={<SearchSVG />}
                dataPages={arrayPage}
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
                  handle={handleTrash}
                />
              </div>

              <Search
                placeholder={placeholderMoveTo}
                text="hide"
                icon="hide"
                dataPages={arrayPage}
                type="move"
                handle={handleTrash}
                hotkey="Ctrl+Shft+P"
              />
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
