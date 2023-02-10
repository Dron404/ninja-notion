import React from "react";
import { useNavigate } from "react-router-dom";
import HomeLogo from "../components/Home/Logo";
import { ReactComponent as IconEyes } from "../assets/icons/p404/eyes.svg";

function NotFoundPage() {
  const navigate = useNavigate();

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
          <h4 className="not-found__title">This content does not exist</h4>
          <button
            type="button"
            className="not-found__button"
            onClick={() => {
              navigate("/pages/1");
            }}
          >
            Back to my content
          </button>
          <p className="not-found__text">Thanks for staying with us!</p>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
