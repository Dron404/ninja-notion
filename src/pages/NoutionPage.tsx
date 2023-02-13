import React from "react";
import { useNavigate } from "react-router";
import { Content } from "../components/Notion/Content";
import { Header } from "../components/Notion/Header";
import { Sidebar } from "../components/Notion/Sidebar";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { gerUset } from "../store/user/user.action";

function NoutionPage() {
  const dispatch = useAppDispatch();
  const { error, navigate, theme, userLogin } = useAppSelector(
    (state) => state.userReducer
  );
  const navigates = useNavigate();

  React.useEffect(() => {
    if (userLogin) {
      dispatch(gerUset(userLogin));
    } else {
      navigates("/login");
    }
  }, []);

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
