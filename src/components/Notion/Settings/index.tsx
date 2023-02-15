import React, { ChangeEvent } from "react";
import { Button } from "../buttons/Button";
import styles from "./Settings.module.scss";
import { ReactComponent as SettingsSVG } from "../../../assets/img/svg/setting.svg";
import { ReactComponent as LanguageSVG } from "../../../assets/img/svg/language.svg";
import { ReactComponent as ThemeSVG } from "../../../assets/img/svg/theme.svg";
import { ReactComponent as UserSVG } from "../../../assets/img/svg/user.svg";

import { UserAvatar } from "./UserAvatar";
import { SettingsTab } from "./SettingsTab";
import { Language } from "./Language";
import { Theme } from "./Theme";
import { main } from "../../../data/languages/main";
import { AVATAR_SIZE_M } from "../../../data/constants";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import UserService from "../../../store/user/user.action";
import { IUserData } from "../../../types/interface";
import logout from "../../../utils/logout";
import { UploadFile } from "../UploadFile";

export const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, lang } = useAppSelector((store) => store.userReducer);

  const { updateUserState } = userSlice.actions;

  const data = main[lang];

  const avatarUrl = user?.avatar || "";
  const email = user?.email || "";
  const name = user?.name || "";
  const password = user?.password || "";

  const [tab, setTab] = React.useState<string>("account");

  const [userName, setUserName] = React.useState<string>(name);

  const [userPassword, setUserPassword] = React.useState<string>("");
  const [userPasswordRepeat, setUserPasswordRepeat] =
    React.useState<string>("");

  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [isOpenModalAvatar, setIsOpenModalAvatar] =
    React.useState<boolean>(false);
  const [isOpenModalPassword, setIsOpenModalPassword] =
    React.useState<boolean>(false);
  const openModal = () => setIsOpenModal(true);
  const openModalAvatar = () => setIsOpenModalAvatar(true);
  const openModalPassword = () => setIsOpenModalPassword(true);
  const closeModal = (e: React.MouseEvent<Element>) => {
    if ((e.target as Element).id === "settings") handleCancelUser();
    if ((e.target as Element).id === "avatar") setIsOpenModalAvatar(false);
    if ((e.target as Element).id === "reset-password") {
      setIsOpenModalPassword(false);
      setUserPassword("");
      setUserPasswordRepeat("");
    }
  };

  React.useEffect(() => {
    setDefaultUser(user);
  }, [isOpenModal]);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setUserName(name);
    dispatch(updateUserState({ name }));
  };

  const isUpdatePassword = () =>
    !!(
      userPassword.length > 6 &&
      userPasswordRepeat.length > 6 &&
      userPassword === userPasswordRepeat
    );

  const handleUpdatePassword = () => {
    dispatch(updateUserState({ password: userPassword }));
    handleUpdateUser(userPassword);
    setUserPassword("");
    setUserPasswordRepeat("");
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const handleChangePasswordRepeat = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPasswordRepeat(event.target.value);
  };

  let isLoading = false;
  const handleUpdateUser = async (pass = "") => {
    if (UserService && user && !isLoading) {
      const userData: IUserData = password
        ? { ...user, ...{ password: pass } }
        : user;
      isLoading = true;
      const response = await UserService.updateUser(userData);
      if (response?.status === 200) {
        setIsOpenModal(false);
        setIsOpenModalPassword(false);
      }
      await UserService.updatePages(userData.pages);
    }
  };

  const [defaultUser, setDefaultUser] = React.useState(user);

  const handleCancelUser = () => {
    if (defaultUser) {
      dispatch(updateUserState(defaultUser));
      setIsOpenModal(false);
      setUserName(defaultUser.name);
    }
  };

  const handleLogOut = () => logout();

  const avatar =
    avatarUrl.length > 0 ? (
      <UserAvatar url={avatarUrl} size={AVATAR_SIZE_M} />
    ) : (
      <UserSVG />
    );

  return (
    <>
      <Button
        icon={<SettingsSVG />}
        text={data.text_setting}
        handle={openModal}
      />
      {isOpenModal && (
        <div className="notion__modal" id="settings" onMouseDown={closeModal}>
          <div className="notion__modal_body">
            <div className={styles.settings}>
              <div className={styles.settings__menu}>
                <div className={styles.settings__group}>
                  <div className={styles.settings__name}>{email}</div>
                  <SettingsTab
                    text={data.text_account}
                    icon={avatar}
                    state={tab}
                    target="account"
                    handle={setTab}
                  />
                </div>
                <div className={styles.settings__group}>
                  <div className={styles.settings__name}>
                    {data.text_workspace}
                  </div>

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
                      <div
                        className={`${styles.settings__row} ${styles.settings__avatar}`}
                      >
                        {avatar}
                      </div>
                      <div className={styles.settings__row}>
                        <Button
                          text={data.text_upload_photo}
                          cName={styles.button__default}
                          handle={openModalAvatar}
                        />

                        {isOpenModalAvatar && (
                          <div
                            className="notion__modal"
                            id="avatar"
                            onMouseDown={closeModal}
                          >
                            <div className="notion__modal_body">
                              <div className={styles.settings__wrapper}>
                                <UploadFile />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        {data.text_personal_info}
                      </div>
                      <div className={styles.settings__row}>
                        <div className={styles.settings__label}>Email</div>
                        <div className={styles.settings__email}>{email}</div>
                      </div>

                      <div className={styles.settings__row}>
                        <div className={styles.settings__label}>
                          {data.text_preferred_name}
                        </div>
                        <input
                          type="text"
                          name="name"
                          className={styles.settings__input}
                          value={userName}
                          onChange={handleChangeName}
                        />
                      </div>
                    </div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        {data.text_password}
                      </div>

                      <div className={styles.settings__row}>
                        <p className={styles.settings__description}>
                          {data.text_password_description}
                        </p>
                        <Button
                          text={data.text_set_a_password}
                          cName={styles.button__default}
                          handle={openModalPassword}
                        />
                      </div>

                      {isOpenModalPassword && (
                        <div
                          className="notion__modal notion__modalPassword"
                          id="reset-password"
                          onMouseDown={closeModal}
                        >
                          <div className="notion__modal_body">
                            <div className={styles.settings__wrapper}>
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
                                  onChange={handleChangePassword}
                                />
                                <div className={styles.settings__label}>
                                  {data.text_repeat_password}
                                </div>
                                <input
                                  type="password"
                                  name="password_repeat"
                                  className={styles.settings__input}
                                  onChange={handleChangePasswordRepeat}
                                />
                                {isUpdatePassword() && (
                                  <div className={styles.settings__row}>
                                    <Button
                                      text={data.text_update_password}
                                      cName={styles.button__primary}
                                      handle={handleUpdatePassword}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={styles.settings__section}>
                      <div className={styles.settings__title}>
                        {data.text_log_out_of}
                      </div>
                      <div className={styles.settings__row}>
                        <p className={styles.settings__description}>
                          {data.text_log_out_description}
                        </p>
                        <Button
                          text={data.text_log_out}
                          cName={styles.button__warning}
                          handle={handleLogOut}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.settings__footer}>
                    <Button
                      text={data.text_update}
                      cName={styles.button__primary}
                      handle={handleUpdateUser}
                    />
                    <Button
                      text={data.text_cancel}
                      cName={styles.button__default}
                      handle={handleCancelUser}
                    />
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
