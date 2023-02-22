import React from "react";
import { Content } from "../components/Notion/Content";
import { Header } from "../components/Notion/Header";
import { Sidebar } from "../components/Notion/Sidebar";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import UserService, { getUser } from "../store/user/user.action";

function NoutionPage() {
  const dispatch = useAppDispatch();

  const { navigate, theme, user } = useAppSelector(
    (state) => state.userReducer
  );

  if (!user) {
    dispatch(getUser());
  }
  React.useEffect(() => {
    if (user) {
      updateUserPages();
    }
  }, [user]);

  // !! проблема с отправкой запроса, если updateUserPages в теле useEffect то  user.pages имеет старый стейт
  const updateUserPages = async () => {
    user && (await UserService.updatePages(user.pages));
  };

  onunload = () => {
    updateUserPages();
  };

  return (
    <>
      <div className="notion" data-theme={theme}>
        <aside className="notion__aside" data-status={navigate}>
          <Sidebar />
        </aside>
        <div className="notion__section">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}

export default NoutionPage;
