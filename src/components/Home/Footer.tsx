import React, { useState } from "react";
import { HomeLogo } from "./Logo";
import { DropDown } from "./DropDown";
import { SocialsLinks } from "./Socials";
import { AuthorsLinks } from "./Authors";

export function HomeFooter() {
  const [selected, setSelected] = useState("Language");

  const LanguageChoose = () => {
    return (
      < DropDown selected = { selected } setSelected = { setSelected } />
    )
  }

  const FooterTools = () => {

    return (
      <div className="tools">
        <div className="logo-icons__container">
          < HomeLogo />
          < SocialsLinks />
        </div>
        < LanguageChoose />
      </div>

    )
  }

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        < FooterTools />
        < AuthorsLinks />
      </div>
    </footer>
  );
}