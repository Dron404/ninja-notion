import React from "react";

import figmaImg from "../../assets/images/home/figma-logo.png";
import mixPanel from "../../assets/images/home/mixpanel.png";
import pixar from "../../assets/images/home/pixar.png";
import match from "../../assets/images/home/match.png";
import monzo from "../../assets/images/home/monzo.png";

function PromoDescription() {
  return (
    <div className="promo__description">
      <h1 className="promo__description-title">
        One workspace.
        <br />
        Every team.
      </h1>
      <p className="promo__description-text">
        We’re more than a doc. Or a table. Customize <br /> Notion to work the
        way you do.
      </p>
      <button type="button" className="button_header promo__description-button">
        Try Notion free
      </button>
      <div className="promo__description-subtext">Trusted by teams at</div>
      <div className="promo__description-brands">
        <img
          className="promo__brand"
          src={figmaImg}
          alt="three persons put on the wall plans"
        />
        <img
          className="promo__brand"
          src={mixPanel}
          alt="three persons put on the wall plans"
        />
        <img
          className="promo__brand"
          src={pixar}
          alt="three persons put on the wall plans"
        />
        <img
          className="promo__brand"
          src={match}
          alt="three persons put on the wall plans"
        />
        <img
          className="promo__brand"
          src={monzo}
          alt="three persons put on the wall plans"
        />
      </div>
    </div>
  );
}

export default PromoDescription;
