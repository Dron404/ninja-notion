import React from "react";
import { useNavigate, useParams } from "react-router";
import { Content } from "../components/Notion/Content";
import { Header } from "../components/Notion/Header";
import { Home } from "../components/Notion/Home";
import { Sidebar } from "../components/Notion/Sidebar";
import SkeletonContent from "../components/Notion/Skeleton/SkeletonContent";
import { TextEditorProvider } from "../editor/TextEditor";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { gerUset } from "../store/user/user.action";
import { userSlice } from "../store/user/user.slice";

function NoutionPage() {
  const dispatch = useAppDispatch();
  const { error, navigate, theme, user, isLoading } = useAppSelector(
    (state) => state.userReducer
  );
  const { updateActivePage, updateArrayPage } = userSlice.actions;

  const navigates = useNavigate();

  React.useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(gerUset(accessToken));
    } else {
      navigates("/login");
    }
  }, []);

  const { pageId } = useParams();

  React.useEffect(() => {
    if (pageId && user) {
      dispatch(updateActivePage());
      dispatch(updateArrayPage());
    }
  }, [pageId]);

  return (
    <>
      <div className="notion" data-theme={theme}>
        <aside className="notion__aside" data-status={navigate}>
          <Sidebar />
        </aside>
        <section className="notion__section">
          <>
            <Header />
            {isLoading ? (
              <SkeletonContent />
            ) : pageId === "home" ? (
              <Home />
            ) : (
              <TextEditorProvider>
                <Content />
              </TextEditorProvider>
            )}
            {error && { error }}
          </>
        </section>
      </div>
    </>
  );
}

export default NoutionPage;
