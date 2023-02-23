import React from "react";
import { useNavigate } from "react-router-dom";
import HomeLogo from "../components/Home/Logo";
import { ReactComponent as IconEyes } from "../assets/icons/p404/eyes.svg";
import { useAppSelector } from "../hooks/redux";
import notFound from "../data/languages/notFound";

function NotFoundPage() {
  const navigate = useNavigate();

  const { lang } = useAppSelector((store) => store.userReducer);
  const data = notFound[lang];

  return (
    <>
      <header>
        <div className="logo-not-found">
          <HomeLogo />
        </div>
      </header>
      <main className="not-found">
        <div className="not-found__wrapper">
          <IconEyes className="image-eyes" />
          <h4 className="not-found__title">{data.title}</h4>
          <button
            type="button"
            className="not-found__button"
            onClick={() => {
              navigate("/pages/home");
            }}
          >
            {data.back}
          </button>
          <p className="not-found__text">{data.gratitude}</p>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
