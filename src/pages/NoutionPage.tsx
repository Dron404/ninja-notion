import React from "react";
import { Content } from "../components/Notion/Content";
import { Header } from "../components/Notion/Header";
import { Sidebar } from "../components/Notion/Sidebar";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { gerUser } from "../store/user/user.action";

function NoutionPage() {
  const userLogin = {
    email: "onebelbiz@gmail.com",
    password: "1111",
  };

  const dispatch = useAppDispatch();
  const { error, navigate, theme } = useAppSelector(
    (state) => state.userReducer
  );

  React.useEffect(() => {
    dispatch(gerUser(userLogin));
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
