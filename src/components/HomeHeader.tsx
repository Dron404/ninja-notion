import React from "react";
import logo from "../assets/images/home/logo-notion.png";

export function HomeHeader() {

  const HeaderLogo = () => {
    return (
      <div className="logo">
        <img className="logo__image" src={logo} alt="logo in form of white-black cube"></img>
        <p className="logo__title">Notion</p>
      </div>
    )
  }

  const HeaderRegistration = () => {
    return (
      <div className="registration">
        <div className="registration__log">Log In</div>
        <a href="#" className="button button_header">Try Notion Free</a>
      </div>

    )
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        < HeaderLogo />
        < HeaderRegistration />
      </div>
    </header>
  );
}