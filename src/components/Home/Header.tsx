import React, { SetStateAction } from "react";
import { HomeLogo } from "../Home/Logo";
import { ReactComponent as BurgerIcon } from "../../assets/icons/home/burger.svg";


export function HomeHeader(props: { mobileMenuActive: boolean, setMobileMenuActive: React.Dispatch<SetStateAction<boolean>>}) {
  const { mobileMenuActive, setMobileMenuActive} = props;

  const HeaderBurgerIcon = () => {
    return (
      <div className="burger-menu" onClick={ () => setMobileMenuActive(true)}>
        <BurgerIcon
          width="22px"
          height="22px"
          className="burger-icon"
        />
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
        < HomeLogo />
        < HeaderRegistration />
        < HeaderBurgerIcon />
      </div>
    </header>
  );
}