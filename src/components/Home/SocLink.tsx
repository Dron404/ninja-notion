import React from "react";

function Social(social: string, link: string) {
  return (
    <a
      className="social-container__link"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="social-container__image"
        src={social}
        alt="blue letter f"
      />
    </a>
  );
}

export default Social;
