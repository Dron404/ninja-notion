import React from "react";
import HomeLogo from "./Logo";
import DropDown from "./DropDown";
import SocialsLinks from "./Socials";
import AuthorsLinks from "./Authors";

function HomeFooter() {
  const LanguageChoose = <DropDown />;

  const FooterTools = (
    <div className="tools">
      <div className="logo-icons__container">
        <HomeLogo />
        <SocialsLinks />
      </div>
      {LanguageChoose}
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        {FooterTools}
        <AuthorsLinks />
      </div>
    </footer>
  );
}

export default HomeFooter;
