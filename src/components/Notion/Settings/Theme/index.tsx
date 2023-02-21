import React from "react";
import styles from "./Theme.module.scss";
import { Button } from "../../buttons/Button";
import { Menu } from "@headlessui/react";
import { themes } from "../../../../data/languages/theme";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { userSlice } from "../../../../store/user/user.slice";
import { Ttheme } from "../../../../types/types";

export const Theme: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme, lang } = useAppSelector((store) => store.userReducer);
  const { updateTheme } = userSlice.actions;

  const activeThemes = themes.find((t) => t.code === theme);

  const handleChangeTheme = async (theme: Ttheme) => {
    dispatch(updateTheme(theme));
  };

  return (
    <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
      <Menu.Button className={styles.button}>
        <Button
          text={String(activeThemes?.name[lang])}
          cName={styles.button__default}
        />
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
