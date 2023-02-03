import React, { useState } from "react";
import { HomeLogo } from "./HomeLogo";
import { DropDown } from "./HomeDropDown";
import facebook from "../assets/images/home-socials/facebook.png";
import insta from "../assets/images/home-socials/instagram.png";
import linkedIn from "../assets/images/home-socials/linkedin.png";
import telegram from "../assets/images/home-socials/telegram.png";
import youtube from "../assets/images/home-socials/youtube.png";
import rsschool from "../assets/images/home-socials/rsschool.png";

export function HomeFooter() {
  const [selected, setSelected] = useState("Language");

  const Social = (social: string, link: string) => {
    return (
      <a className="social-container__link" href = {link} target="_blank" rel="noreferrer">
        <img className="social-container__image" src={social} alt="blue letter f"></img>
      </a>
    )
  }

  const SocialContainer = () => {
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

  const LanguageChoose = () => {
    return (
      < DropDown selected = { selected } setSelected = { setSelected } />
    )
  }

  const FooterTools = () => {

    return (
      <div className="tools">
        < HomeLogo />
        < SocialContainer />
        < LanguageChoose />
      </div>

    )
  }

  const AuthorsLinks = () => {
    return (
      <div className="AuthorsLinks">
        <div className="rsschool">
          <a className="rsschool__link" href = "https://rs.school/" target="_blank" rel="noreferrer">
            <img className="rsschool__image" src={rsschool} alt="rsschool"></img>
          </a>
        </div>
        <div className="authors-github">
          <a className="social-container__link" href = "https://github.com/ivan-varabyou" target="_blank" rel="noreferrer">
            ivan-varabyou
          </a>
          <a className="social-container__link" href = "https://github.com/AmdreiMash" target="_blank" rel="noreferrer">
            AmdreiMash
          </a>
          <a className="social-container__link" href = "https://github.com/AnastasiaShalukhina" target="_blank" rel="noreferrer">
            AnastasiaShalukhina
          </a>
          <div className="year-production">2023</div>
        </div>
      </div>
    )
  }

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        < FooterTools />
        < AuthorsLinks />
      </div>
    </footer>
  );
}