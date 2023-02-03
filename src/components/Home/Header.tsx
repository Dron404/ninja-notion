import React, { SetStateAction } from "react";
import HomeLogo from "./Logo";
import { ReactComponent as BurgerIcon } from "../../assets/icons/home/burger.svg";

function HomeHeader(props: {
  mobileMenuActive: boolean;
  setMobileMenuActive: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { setMobileMenuActive, mobileMenuActive } = props;

  const HeaderBurgerIcon = (
    <button
      type="button"
      className="burger-menu"
      onClick={() => setMobileMenuActive(!mobileMenuActive)}
    >
      <BurgerIcon width="22px" height="22px" className="burger-icon" />
    </button>
  );

  const HeaderRegistration = (
    <div className="registration">
      <div className="registration__log">Log In</div>
      <button type="button" className="button button_header">
        Try Notion Free
      </button>
    </div>
  );

  return (
    <header className="header">
      <div className="header__wrapper">
        <HomeLogo />
        {HeaderRegistration}
        {HeaderBurgerIcon}
      </div>
    </header>
  );
}

export default HomeHeader;
