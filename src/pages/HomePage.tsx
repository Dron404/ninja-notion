import React, { useState } from "react";
import HomeHeader from "../components/Home/Header";
import HomePromo from "../components/Home/Promo";
import HomeFooter from "../components/Home/HomeFooter";
import MobileMenu from "../components/Home/MobileMenu";
import autorizationCheck from "../utils/autorizationCheck";

function HomePage() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  autorizationCheck();

  return (
    <>
      <HomeHeader
        setMobileMenuActive={setMobileMenuActive}
        mobileMenuActive={mobileMenuActive}
      />
      <HomePromo />
      <HomeFooter />
      <MobileMenu active={mobileMenuActive} setActive={setMobileMenuActive} />
    </>
  );
}

export default HomePage;
