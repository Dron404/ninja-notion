import React from "react";
import rsschool from "../../assets/images/home-socials/rsschool.png";

function AuthorsLinks() {
  return (
    <div className="AuthorsLinks">
      <div className="authors-github">
        <a
          className="social-container__link"
          href="https://github.com/ivan-varabyou"
          target="_blank"
          rel="noreferrer"
        >
          ivan-varabyou
        </a>
        <a
          className="social-container__link"
          href="https://github.com/AmdreiMash"
          target="_blank"
          rel="noreferrer"
        >
          AmdreiMash
        </a>
        <a
          className="social-container__link"
          href="https://github.com/AnastasiaShalukhina"
          target="_blank"
          rel="noreferrer"
        >
          AnastasiaShalukhina
        </a>
      </div>
      <div className="rsschool">
        <a
          className="rsschool__link"
          href="https://rs.school/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rsschool__image" src={rsschool} alt="rsschool" />
        </a>
        <div className="year-production">2023</div>
      </div>
    </div>
  );
}

export default AuthorsLinks;
