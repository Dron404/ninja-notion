import React from "react";
// import geo from "../../assets/images/home/geography.png";
// import arrowDown from "../../assets/images/home/arrow-down.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/user/user.slice";
import { languages } from "../../data/languages/language";
import { Tlanguage } from "../../types/types";
import { Menu } from "@headlessui/react";
import { Button } from "../Notion/buttons/Button";
import styles from "../Notion/Settings/Language/Language.module.scss";

const DropDown: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((store) => store.userReducer);
  const { updateLanguage } = userSlice.actions;

  const activeLanguage = languages.find((language) => language.code === lang);

  const handleChangeLanguege = async (lang: Tlanguage) => {
    dispatch(updateLanguage(lang));
  };

  return (
    <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
      <Menu.Button className={styles.button}>
        <Button
          text={String(activeLanguage?.name)}
          cName={styles.button__default}
        />
      </Menu.Button>
      <Menu.Items className={`${styles.popup} notion-popup__body`}>
        {languages.map((lang, index) =>
          lang.code !== activeLanguage?.code ? (
            <div
              className={styles.langues}
              key={index}
              onClick={() => handleChangeLanguege(lang.code)}
            >
              <div className={`${styles.langues__name} cursor`}>
                {lang.name}
              </div>
              <div className={`${styles.langues__description} cursor`}>
                {lang.description}
              </div>
            </div>
          ) : (
            <div
              className={`${styles.langues} ${styles.langues__active} cursor`}
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
export default DropDown;
