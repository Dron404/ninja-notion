import React from "react";
import { HomeHeader } from "../components/HomeHeader";
import { HomePromo } from "../components/HomePromo";

export function HomePage() {
  return (
    <>
      { HomeHeader() }
      { HomePromo() }
    </>
  );
}
