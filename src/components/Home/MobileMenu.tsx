import React, { SetStateAction } from "react";
import { ReactComponent as IconClose } from "../../assets/icons/home/icon-close.svg";
import { HomeLogo } from "./Logo";

export function MobileMenu (props: { active: boolean, setActive: React.Dispatch<SetStateAction<boolean>>}) {
  const { active, setActive} = props;

  const HeaderIconClose = () => {
    return (
      <div className="menu-container__close" onClick={() => setActive(false)}>
        <IconClose
          width="22px"
          height="22px"
          className="icon-close"
        />
      </div>
    )
  }

  const MobileMenuHeader = () => {
    return (
      <div className="menu-container">
        < HomeLogo />
        < HeaderIconClose />
      </div>
    )
  }

  const MobileMenuTools = () => {
    return (
      <div className="mobile-tools-container">
        <button className="mobile-log">Log In</button>
        <button className="mobile-try">Try Notion free</button>
      </div>
    )
  }

  return (
    <div className = { active ? "mobile-menu_active" : "mobile-menu"}>
      < MobileMenuHeader />
      < MobileMenuTools />
    </div>
  )

}
