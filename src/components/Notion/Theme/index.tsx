import React from "react";
import styles from "./Theme.module.scss";
import { ButtonDefault } from "../ButtonDefault";
import { Menu } from "@headlessui/react";
import { themes } from "../../../data/languages/theme";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import { Ttheme } from "../../../types/types";
import { setLocalStorage } from "../../../utils/strorage/localStorage";

export const Theme: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme, lang } = useAppSelector((store) => store.userReducer);
  const { updateTheme } = userSlice.actions;

  const activeThemes = themes.find((t) => t.code === theme);

  const handleChangeTheme = (theme: Ttheme) => {
    setLocalStorage<string>("theme", theme);
    dispatch(updateTheme());
  };

  return (
    <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
      <Menu.Button className={styles.button}>
        <ButtonDefault text={String(activeThemes?.name[lang])} type="default" />
      </Menu.Button>
      <Menu.Items className={`${styles.popup} notion-popup__body`}>
        {themes.map((t, index) =>
          t.code !== activeThemes?.code ? (
            <div
              className={styles.langues}
              key={t.code}
              onClick={() => handleChangeTheme(t.code)}
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
              onClick={() => handleChangeTheme(t.code)}
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
