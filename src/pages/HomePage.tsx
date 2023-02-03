import React, { useState } from "react";
import { HomeHeader } from "../components/Home/Header";
import { HomePromo } from "../components/Home/Promo";
import { HomeFooter } from "../components/Home/Footer";
import { MobileMenu } from "../components/Home/MobileMenu";

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
