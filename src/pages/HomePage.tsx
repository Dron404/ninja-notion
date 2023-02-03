import React, { useState } from "react";
import { HomeHeader } from "../components/HomeHeader";
import { HomePromo } from "../components/HomePromo";
import { HomeFooter } from "../components/HomeFooter";
import { MobileMenu } from "../components/HomeMobileMenu";

export function HomePage() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <>
      { HomeHeader({mobileMenuActive, setMobileMenuActive})}
      < HomePromo />
      < HomeFooter />
      < MobileMenu active = {mobileMenuActive} setActive = { setMobileMenuActive } />
    </>
  );
}
