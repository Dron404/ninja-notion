import React, { SetStateAction } from "react";
import { ReactComponent as IconClose } from "../../assets/icons/home/icon-close.svg";
import HomeLogo from "./Logo";
import { useAppSelector } from "../../hooks/redux";
import mobileMenu from "../../data/languages/mobileMenu";

function MobileMenu(props: {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = mobileMenu[lang];

  const { active, setActive } = props;

  const HeaderIconClose = (
    <IconClose
      onClick={() => {
        setActive(!active);
      }}
      onKeyDown={() => {
        setActive(!active);
      }}
      width="22px"
      height="22px"
      className="icon-close"
    />
  );

  const MobileMenuHeader = (
    <div className="menu-container">
      <HomeLogo />
      {HeaderIconClose}
    </div>
  );

  const MobileMenuTools = (
    <div className="mobile-tools-container">
      <a href="/login" className="mobile-log">
        {data.login}
      </a>
      <a href="/signup" className="mobile-try">
        {data.signup}
      </a>
    </div>
  );

  return (
    <div className={active ? "mobile-menu_active" : "mobile-menu"}>
      {MobileMenuHeader}
      {MobileMenuTools}
    </div>
  );
}

export default MobileMenu;
