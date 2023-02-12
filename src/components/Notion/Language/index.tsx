import React from "react";
import styles from "./Language.module.scss";
import { ButtonDefault } from "../ButtonDefault";
import { Menu } from "@headlessui/react";
import { languages } from "../../../data/languages/language";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import { Tlanguage } from "../../../types/types";
import { setLocalStorage } from "../../../utils/strorage/localStorage";

export const Language: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((store) => store.userReducer);
  const { updateLanguage } = userSlice.actions;

  const activeLanguage = languages.find((language) => language.code === lang);

  const handleChangeLanguege = (lang: Tlanguage) => {
    setLocalStorage("lang", lang);
    dispatch(updateLanguage());
  };

  return (
    <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
      <Menu.Button className={styles.button}>
        <ButtonDefault text={String(activeLanguage?.name)} type="default" />
      </Menu.Button>
      <Menu.Items className={`${styles.popup} notion-popup__body`}>
        {languages.map((lang, index) =>
          lang.code !== activeLanguage?.code ? (
            <div
              className={styles.langues}
              key={index}
              onClick={() => handleChangeLanguege(lang.code)}
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
              onClick={() => handleChangeLanguege(lang.code)}
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
