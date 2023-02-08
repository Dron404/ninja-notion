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

export const Settings: React.FC = () => {
  const lang = "en";
  const dataLanguage = {
    en: {
      text_newpage: "New page",
      text_trash: "Trash",
      text_search: "Search",
      text_setting: "Setting",
    },
  };
  const data = dataLanguage[lang];

  const avatarUrl =
    "https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100";
  const avatarSize = "15";

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
                    text="Account"
                    icon={<UserAvatar url={avatarUrl} size={avatarSize} />}
                    state={tab}
                    target="account"
                    handle={setTab}
                  />
                </div>
                <div className={styles.settings__group}>
                  <div className={styles.settings__name}>Workspace</div>

                  <SettingsTab
                    text="Languages"
                    icon={<LanguageSVG />}
                    state={tab}
                    target="language"
                    handle={setTab}
                  />

                  <SettingsTab
                    text="Theme"
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
                    <div className={styles.settings__header}>Account</div>
                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>Photo</div>
                      <div className={styles.settings__row}>
                        <UserAvatar url={avatarUrl} size={"90"} />
                      </div>
                      <div className={styles.settings__row}>
                        <ButtonDefault text="Upload photo" type="default" />
                      </div>
                    </div>
                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        Personal info
                      </div>
                      <div className={styles.settings__row}>
                        <div className={styles.settings__label}>Email</div>
                        <div className={styles.settings__email}>
                          email@gmail.com
                        </div>
                      </div>

                      <div className={styles.settings__row}>
                        <div className={styles.settings__label}>
                          Preferred name
                        </div>
                        <input
                          type="text"
                          name="name"
                          className={styles.settings__input}
                        />
                      </div>
                    </div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>Password</div>

                      {!resetPassword && (
                        <div className={styles.settings__row}>
                          <p className={styles.settings__description}>
                            You can set a permanent password if you don't want
                            to use temporary login codes.
                          </p>
                          <ButtonDefault
                            text="Set a password"
                            type="default"
                            handle={handleResetPassword}
                          />
                        </div>
                      )}

                      {resetPassword && (
                        <div className={styles.settings__row}>
                          <p className={styles.settings__description}>
                            Use a password at least 15 letters long, or at least
                            8 characters long with both letters and numbers.
                          </p>
                          <div className={styles.settings__label}>Password</div>
                          <input
                            type="password"
                            name="password"
                            className={styles.settings__input}
                          />
                          <div className={styles.settings__label}>
                            Repeat password
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
                        Log out of all devices
                      </div>
                      <div className={styles.settings__row}>
                        <p className={styles.settings__description}>
                          Log out of all other active sessions on other devices
                          besides this one.
                        </p>
                        <ButtonDefault text="Log out" type="warning" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.settings__footer}>
                    <ButtonDefault text="Update" type="primary" />
                    <ButtonDefault text="Cancel" type="default" />
                  </div>
                </div>
              )}

              {tab === "language" && (
                <div className={styles.settings__content}>
                  <div className={styles.settings__scroll}>
                    <div className={styles.settings__header}>Languages</div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__flex}>
                        <div>
                          <div className={styles.settings__title}>Language</div>
                          <div className={styles.settings__row}>
                            <p>
                              Change the language used in the user interface.
                            </p>
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
                    <div className={styles.settings__header}>Theme</div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__flex}>
                        <div>
                          <div className={styles.settings__title}>Theme</div>
                          <div className={styles.settings__row}>
                            <p>Change the theme used in the user interface.</p>
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
