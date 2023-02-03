import React from "react";
import facebook from "../../assets/images/home-socials/facebook.png";
import insta from "../../assets/images/home-socials/instagram.png";
import linkedIn from "../../assets/images/home-socials/linkedin.png";
import telegram from "../../assets/images/home-socials/telegram.png";
import youtube from "../../assets/images/home-socials/youtube.png";

export function SocialsLinks() {
  const Social = (social: string, link: string) => {
    return (
      <a className="social-container__link" href = {link} target="_blank" rel="noreferrer">
        <img className="social-container__image" src={social} alt="blue letter f"></img>
      </a>
    )
  }

  return (
    <div className="social-container">
      <ul className="social-container__list">
        <li className="social-container__item">
          { Social(facebook, "https://www.facebook.com/NotionHQ/") }
        </li>
        <li className="social-container__item">
          { Social(insta, "https://www.instagram.com/notionhq/") }
        </li>
        <li className="social-container__item">
          { Social(linkedIn, "https://www.linkedin.com/company/notionhq/") }
        </li>
        <li className="social-container__item">
          { Social(telegram, "https://telegramtonotion.com/") }
        </li>
        <li className="social-container__item">
          { Social(youtube, "https://www.youtube.com/channel/UCoSvlWS5XcwaSzIcbuJ-Ysg") }
        </li>
      </ul>
    </div>
  )

}