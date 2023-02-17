import React from "react";
import { useNavigate } from "react-router";
import { Content } from "../components/Notion/Content";
import { Header } from "../components/Notion/Header";
import { Sidebar } from "../components/Notion/Sidebar";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import UserService, { gerUset } from "../store/user/user.action";

function NoutionPage() {
  const dispatch = useAppDispatch();
  const { error, navigate, theme, user } = useAppSelector(
    (state) => state.userReducer
  );
  const navigates = useNavigate();

  React.useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(gerUset(accessToken));
    } else {
      navigates("/login");
    }
  }, []);

  // // !! проблема с отправкой запроса, если updateUserPages в теле useEffect то  user.pages имеет старый стейт
  // const updateUserPages = async () => {
  //   user && (await UserService.updatePages(user.pages));
  // };
  // React.useEffect(() => {
  //   window.addEventListener("beforeunload", async (event) => {
  //     updateUserPages();
  //     event.preventDefault();
  //     event.returnValue = "";
  //   });
  // }, []);

  return (
    <>
      <div className="notion" data-theme={theme}>
        <aside className="notion__aside" data-status={navigate}>
          <Sidebar />
        </aside>
        <section className="notion__section">
          <>
            <Header />
            <Content />
            {error && { error }}
          </>
        </section>
      </div>
    </>
  );
}

export default NoutionPage;
