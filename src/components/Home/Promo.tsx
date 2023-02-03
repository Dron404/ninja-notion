import React from "react";
import promoImg from "../../assets/images/home/home-promo.png";
import { PromoDescription } from "./PromoContent";



export function HomePromo() {

  return (
    <section className="promo">
      <div className="promo__wrapper">
        <PromoDescription />
        <img className="promo__image" src={promoImg} alt="three persons put on the wall plans"></img>
      </div>
    </section>
  )
}
