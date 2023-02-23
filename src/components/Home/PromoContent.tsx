import React from "react";

import { useNavigate } from "react-router-dom";
import figmaImg from "../../assets/images/home/figma-logo.png";
import mixPanel from "../../assets/images/home/mixpanel.png";
import pixar from "../../assets/images/home/pixar.png";
import match from "../../assets/images/home/match.png";
import monzo from "../../assets/images/home/monzo.png";
import { useAppSelector } from "../../hooks/redux";
import home from "../../data/languages/home";

function PromoDescription() {
  const navigate = useNavigate();
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = home[lang];

  return (
    <div className="promo__description">
      <h1 className="promo__description-title">
        {data.promo_descriptionTitleOne}
        <br />
        {data.promo_descriptionTitleTwo}
      </h1>
      <p className="promo__description-text">
        {data.promo_desctiptionTextOne} <br /> {data.promo_desctiptionTextTwo}
      </p>
      <button
        type="button"
        className="button_header promo__description-button"
        onClick={() => {
          navigate("/signup");
        }}
      >
        {data.btn_signUp}
      </button>
      <div className="promo__description-subtext">
        {data.promo_desctiptionSubtext}
      </div>
      <div className="promo__description-brands">
        <img className="promo__brand" src={figmaImg} alt="letters" />
        <img className="promo__brand" src={mixPanel} alt="letters" />
        <img className="promo__brand" src={pixar} alt="letters" />
        <img className="promo__brand" src={match} alt="letters" />
        <img className="promo__brand" src={monzo} alt="letters" />
      </div>
    </div>
  );
}

export default PromoDescription;
