import React from "react";
import { ComponentType } from "react";

function Social(Social: ComponentType, link: string) {
  return (
    <a
      className="social-container__link"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <Social />
    </a>
  );
}
// className="social-container__image"
export default Social;
