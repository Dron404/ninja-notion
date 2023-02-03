import React from "react";
import logo from "../../assets/images/home/logo-notion.png";

export function HomeLogo() {

  return (
    <div className="logo">
      <img className="logo__image" src={logo} alt="logo in form of white-black cube"></img>
      <p className="logo__title">Notion</p>
    </div>
  )

}