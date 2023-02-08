import React from "react";
import { Button } from "../Button";
import styles from "./Settings.module.scss";
import { ReactComponent as SettingsSVG } from "../../../assets/img/svg/setting.svg";
import { ReactComponent as LanguageSVG } from "../../../assets/img/svg/language.svg";
import { ReactComponent as ThemeSVG } from "../../../assets/img/svg/theme.svg";

import { UserAvatar } from "../../User/UserAvatar";
import { ButtonDefault } from "../ButtonDefault";
import { SettingsTab } from "../SettingsTab";
import { Language } from "../Language";
import { Theme } from "../Theme";
import { main } from "../../../data/languages/main";
import { AVATAR_SIZE_M, AVATAR_SIZE_XXL } from "../../../data/constants";

export const Settings: React.FC = () => {
  const lang = "en";
  const data = main[lang];

  const avatarUrl =
    "https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100";

  const [tab, setTab] = React.useState<string>("account");
  const [resetPassword, setResetPassword] = React.useState<boolean>(false);
  const handleResetPassword = () => setResetPassword(true);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = (e: React.MouseEvent<Element>) => {
    if ((e.target as Element).classList.contains("notion__modal")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button
        icon={<SettingsSVG />}
        text={data.text_setting}
        handle={openModal}
      />
      {isOpen && (
        <div className="notion__modal" onMouseDown={closeModal}>
          <div className="notion__modal_body">
            <div className={styles.settings}>
              <div className={styles.settings__menu}>
                <div className={styles.settings__group}>
                  <div className={styles.settings__name}>email@gmail.com</div>
                  <SettingsTab
                    text={data.text_account}
                    icon={<UserAvatar url={avatarUrl} size={AVATAR_SIZE_M} />}
                    state={tab}
                    target="account"
                    handle={setTab}
                  />
                </div>
                <div className={styles.settings__group}>
                  <div className={styles.settings__name}>Workspace</div>

                  <SettingsTab
                    text={data.text_language}
                    icon={<LanguageSVG />}
                    state={tab}
                    target="language"
                    handle={setTab}
                  />

                  <SettingsTab
                    text={data.text_theme}
                    icon={<ThemeSVG />}
                    state={tab}
                    target="theme"
                    handle={setTab}
                  />
                </div>
              </div>

              {tab === "account" && (
                <div className={styles.settings__content}>
                  <div className={styles.settings__scroll}>
                    <div className={styles.settings__header}>
                      {data.text_account}
                    </div>
                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        {data.text_photo}
                      </div>
                      <div className={styles.settings__row}>
                        <UserAvatar url={avatarUrl} size={AVATAR_SIZE_XXL} />
                      </div>
                      <div className={styles.settings__row}>
                        <ButtonDefault
                          text={data.text_upload_photo}
                          type="default"
                        />
                      </div>
                    </div>
                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        {data.text_personal_info}
                      </div>
                      <div className={styles.settings__row}>
                        <div className={styles.settings__label}>Email</div>
                        <div className={styles.settings__email}>
                          email@gmail.com
                        </div>
                      </div>

                      <div className={styles.settings__row}>
                        <div className={styles.settings__label}>
                          {data.text_preferred_name}
                        </div>
                        <input
                          type="text"
                          name="name"
                          className={styles.settings__input}
                        />
                      </div>
                    </div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        {data.text_password}
                      </div>

                      {!resetPassword && (
                        <div className={styles.settings__row}>
                          <p className={styles.settings__description}>
                            {data.text_password_description}
                          </p>
                          <ButtonDefault
                            text={data.text_set_a_password}
                            type="default"
                            handle={handleResetPassword}
                          />
                        </div>
                      )}

                      {resetPassword && (
                        <div className={styles.settings__row}>
                          <p className={styles.settings__description}>
                            {data.text_password_characters}
                          </p>
                          <div className={styles.settings__label}>
                            {data.text_password}
                          </div>
                          <input
                            type="password"
                            name="password"
                            className={styles.settings__input}
                          />
                          <div className={styles.settings__label}>
                            {data.text_repeat_password}
                          </div>
                          <input
                            type="password"
                            name="password_repeat"
                            className={styles.settings__input}
                          />
                        </div>
                      )}
                    </div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        ${data.text_log_out_of}
                      </div>
                      <div className={styles.settings__row}>
                        <p className={styles.settings__description}>
                          {data.text_log_out_description}
                        </p>
                        <ButtonDefault
                          text={data.text_log_out}
                          type="warning"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.settings__footer}>
                    <ButtonDefault text={data.text_update} type="primary" />
                    <ButtonDefault text={data.text_cancel} type="default" />
                  </div>
                </div>
              )}

              {tab === "language" && (
                <div className={styles.settings__content}>
                  <div className={styles.settings__scroll}>
                    <div className={styles.settings__header}>
                      {data.text_languages}
                    </div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__flex}>
                        <div>
                          <div className={styles.settings__title}>
                            {data.text_language}
                          </div>
                          <div className={styles.settings__row}>
                            <p>{data.text_language_destcription}</p>
                          </div>
                        </div>
                        <div>
                          <Language />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {tab === "theme" && (
                <div className={styles.settings__content}>
                  <div className={styles.settings__scroll}>
                    <div className={styles.settings__header}>
                      {data.text_theme}
                    </div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__flex}>
                        <div>
                          <div className={styles.settings__title}>
                            {data.text_theme}
                          </div>
                          <div className={styles.settings__row}>
                            <p>{data.text_theme_description}.</p>
                          </div>
                        </div>
                        <div>
                          <Theme />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
