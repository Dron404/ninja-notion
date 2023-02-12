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
      <button type="button" className="mobile-log">
        Log In
      </button>
      <button type="button" className="mobile-try">
        Try Notion free
      </button>
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
