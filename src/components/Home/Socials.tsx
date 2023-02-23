import React from "react";
import { ReactComponent as Facebook } from "../../assets/icons/home/facebook.svg";
import { ReactComponent as Insta } from "../../assets/icons/home/insta.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/home/linkedIn.svg";
import { ReactComponent as Twitter } from "../../assets/icons/home/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/icons/home/youtube.svg";
// import facebook from "../../assets/images/home-socials/facebook.png";
// import insta from "../../assets/images/home-socials/instagram.png";
// import linkedIn from "../../assets/images/home-socials/linkedin.png";
// import telegram from "../../assets/images/home-socials/telegram.png";
// import youtube from "../../assets/images/home-socials/youtube.png";
import Social from "./SocLink";

function SocialsLinks() {
  return (
    <div className="social-container">
      <ul className="social-container__list">
        <li className="social-container__item">
          {Social(Facebook, "https://www.facebook.com/NotionHQ/")}
        </li>
        <li className="social-container__item">
          {Social(Insta, "https://www.instagram.com/notionhq/")}
        </li>
        <li className="social-container__item">
          {Social(LinkedIn, "https://www.linkedin.com/company/notionhq/")}
        </li>
        <li className="social-container__item">
          {Social(Twitter, "https://twitter.com/NotionHQ")}
        </li>
        <li className="social-container__item">
          {Social(
            Youtube,
            "https://www.youtube.com/channel/UCoSvlWS5XcwaSzIcbuJ-Ysg"
          )}
        </li>
      </ul>
    </div>
  );
}

export default SocialsLinks;
