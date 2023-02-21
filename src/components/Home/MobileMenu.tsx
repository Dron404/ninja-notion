import React, { SetStateAction } from "react";
import { ReactComponent as IconClose } from "../../assets/icons/home/icon-close.svg";
import HomeLogo from "./Logo";

function MobileMenu(props: {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}) {
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
        Log In
      </a>
      <a href="/signup" className="mobile-try">
        Try Notion Free
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
