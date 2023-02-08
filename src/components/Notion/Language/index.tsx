import React from "react";
import styles from "./Language.module.scss";
import { ButtonDefault } from "../ButtonDefault";
import { Menu } from "@headlessui/react";
import { ILanguage } from "../../../types/interface";
import { languages } from "../../../data/languages/language";

export const Language: React.FC = () => {
  const lang = "en";

  const activeLanguage = languages.find((language) => language.code === lang);
  const [language, setLanguage] = React.useState(activeLanguage);

  const handleChangeLanguege = (lang: ILanguage) => {
    setLanguage(lang);
  };

  return (
    <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
      <Menu.Button className={styles.button}>
        <ButtonDefault text={String(language?.name)} type="default" />
      </Menu.Button>
      <Menu.Items className={`${styles.popup} notion-popup__body`}>
        {languages.map((lang, index) =>
          lang.code !== language?.code ? (
            <div
              className={styles.langues}
              key={index}
              onClick={() => handleChangeLanguege(lang)}
            >
              <div className={styles.langues__name}>{lang.name}</div>
              <div className={styles.langues__description}>
                {lang.description}
              </div>
            </div>
          ) : (
            <div
              className={`${styles.langues} ${styles.langues__active}`}
              key={index}
              onClick={() => handleChangeLanguege(lang)}
            >
              <div className={styles.langues__name}>{lang.name}</div>
              <div className={styles.langues__description}>
                {lang.description}
              </div>
            </div>
          )
        )}
      </Menu.Items>
    </Menu>
  );
};
