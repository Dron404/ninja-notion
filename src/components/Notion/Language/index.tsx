import React from "react";
import styles from "./Language.module.scss";
import { ButtonDefault } from "../ButtonDefault";
import { Menu } from "@headlessui/react";
import { ILanguage } from "../../../types/interface";

export const Language: React.FC = () => {
  const code = "en";
  const languages: ILanguage[] = [
    { code: "en", name: "English", description: "English (US)" },
    { code: "ru", name: "Русский", description: "Russian (RU)" },
    { code: "by", name: "Беларускі", description: "Belarusian (BY)" },
  ];
  const activeLanguage = languages.find((language) => language.code === code);
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
