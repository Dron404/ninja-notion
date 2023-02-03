import React, { useState } from "react";
import HomeHeader from "../components/Home/Header";
import HomePromo from "../components/Home/Promo";
import HomeFooter from "../components/Home/Footer";
import MobileMenu from "../components/Home/MobileMenu";

function HomePage() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

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
