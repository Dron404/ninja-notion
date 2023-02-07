import React from "react";
import styles from "./Theme.module.scss";
import { ButtonDefault } from "../ButtonDefault";
import { Menu } from "@headlessui/react";
import { ITheme } from "../../../types/interface";

export const Theme: React.FC = () => {
  const code = "dark";
  const lang = "en";
  const themes: ITheme[] = [
    {
      code: "dark",
      name: { ru: "Темная", en: "Dark", by: "Цёмная" },
      description: { ru: "Темная тема", en: "Dark theme", by: "Цёмная тэма" },
    },
    {
      code: "light",
      name: { ru: "Светлая", en: "Light", by: "Светлая" },
      description: { ru: "Темная тема", en: "Dark theme", by: "Цёмная тэма" },
    },
  ];

  const activeThemes = themes.find((theme) => theme.code === code);
  const [theme, setTheme] = React.useState(activeThemes);
  const handleChangeTheme = (theme: ITheme) => {
    setTheme(theme);
  };

  return (
    <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
      <Menu.Button className={styles.button}>
        <ButtonDefault text={String(theme?.name[lang])} type="default" />
      </Menu.Button>
      <Menu.Items className={`${styles.popup} notion-popup__body`}>
        {themes.map((t, index) =>
          t.code !== theme?.code ? (
            <div
              className={styles.langues}
              key={index}
              onClick={() => handleChangeTheme(t)}
            >
              <div className={styles.langues__name}>{t.name[lang]}</div>
              <div className={styles.langues__description}>
                {t.description[lang]}
              </div>
            </div>
          ) : (
            <div
              className={`${styles.langues} ${styles.langues__active}`}
              key={index}
              onClick={() => handleChangeTheme(t)}
            >
              <div className={styles.langues__name}>{t.name[lang]}</div>
              <div className={styles.langues__description}>
                {t.description[lang]}
              </div>
            </div>
          )
        )}
      </Menu.Items>
    </Menu>
  );
};
