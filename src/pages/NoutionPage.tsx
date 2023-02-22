import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Content } from "../components/Notion/Content";
import { Header } from "../components/Notion/Header";
import { Sidebar } from "../components/Notion/Sidebar";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import UserService, { getUser } from "../store/user/user.action";
import autorization from "../store/user/autorization";

function NoutionPage() {
  const dispatch = useAppDispatch();
  const navigates = useNavigate();
  const [aut, setAut] = useState(true);

  React.useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      setAut(false);
    }
    dispatch(getUser());
  }, [aut]);

  const { error, navigate, theme, user } = useAppSelector(
    (state) => state.userReducer
  );

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
