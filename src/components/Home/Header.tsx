import React, { SetStateAction } from "react";
import HomeLogo from "./Logo";
import { ReactComponent as BurgerIcon } from "../../assets/icons/home/burger.svg";
import { useAppSelector } from "../../hooks/redux";
import home from "../../data/languages/home";

function HomeHeader(props: {
  mobileMenuActive: boolean;
  setMobileMenuActive: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = home[lang];

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
      <a href="/login" className="registration__log">
        {data.btn_logIn}
      </a>
      <a href="/signup" className="button button_header">
        {data.btn_signUp}
      </a>
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
