import React from "react";
import logo from "../../assets/images/home/logo-notion.png";

function HomeLogo() {
  return (
    <a href="/" className="logo">
      <img
        className="logo__image"
        src={logo}
        alt="logo in form of white-black cube"
      />
      <span className="logo__title">Notion</span>
    </a>
  );
}

export default HomeLogo;
