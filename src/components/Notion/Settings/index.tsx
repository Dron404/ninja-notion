import React, { ChangeEvent, useState } from "react";
import { Button } from "../buttons/Button";
import styles from "./Settings.module.scss";
import { ReactComponent as SettingsSVG } from "../../../assets/img/svg/setting.svg";
import { ReactComponent as LanguageSVG } from "../../../assets/img/svg/language.svg";
import { ReactComponent as ThemeSVG } from "../../../assets/img/svg/theme.svg";
import UserSVG from "../../../assets/img/svg/user.svg";
import { UserAvatar } from "./UserAvatar";
import { SettingsTab } from "./SettingsTab";
import { Language } from "./Language";
import { Theme } from "./Theme";
import { main } from "../../../data/languages/main";
import login from "../../../data/languages/login";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import UserService from "../../../store/user/user.action";
import { IUserData } from "../../../types/interface";
import logout from "../../../utils/logout";
import signup from "../../../data/languages/signup";
import { UploadFile } from "../UploadFile";
import saveImage from "../../../store/user/saveImage";
import deletUser from "../../../store/user/deleteUser";

export const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((store) => store.userReducer);
  const user = useAppSelector((store) => store.userReducer.user) as IUserData;

  const { updateUserState } = userSlice.actions;

  const data = main[lang];

  const [name, setName] = useState(user?.name);

  const email = user?.email;

  const [tab, setTab] = React.useState<string>("account");

  const [userPassword, setUserPassword] = useState({ pass1: "", pass2: "" });

  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const [isOpenModalAvatar, setIsOpenModalAvatar] =
    React.useState<boolean>(false);

  const [isOpenModalPassword, setIsOpenModalPassword] =
    React.useState<boolean>(false);

  const [errMessName, setErrMessName] = useState("");

  const [errMess, setErrMess] = useState("");

  const openModal = () => setIsOpenModal(true);

  const openModalAvatar = () => setIsOpenModalAvatar(true);

  const openModalPassword = () => {
    setIsOpenModalPassword(true);
  };

  const closeModal = (e: React.MouseEvent<Element>) => {
    if ((e.target as Element).id === "settings") handleCancelUser();
    if ((e.target as Element).id === "avatar") setIsOpenModalAvatar(false);
    if ((e.target as Element).id === "reset-password") {
      setIsOpenModalPassword(false);
      setUserPassword({ pass1: "", pass2: "" });
    }
  };

  React.useEffect(() => {
    setDefaultUser(user);
  }, [isOpenModal]);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
    setErrMessName("");
  };

  const isUpdatePassword = () => {
    console.log(userPassword);
    if (userPassword.pass1.length < 5 || userPassword.pass2.length < 5)
      return { check: false, mess: login[lang].password_errorMessage };

    if (userPassword.pass2 !== userPassword.pass1)
      return { check: false, mess: login[lang].password_errorMessage2 };

    return { check: true, mess: "" };
  };

  //! Добавить кнопу удаления аккаунта, добавить обновление имени, добавить доваление картинок в notion, написать тесты на апи

  const handleUpdatePassword = async () => {
    const passed = isUpdatePassword();
    if (passed.check) {
      await UserService.updateUser({ ...user, password: userPassword.pass1 });
      setErrMess(passed.mess);
      setUserPassword({ pass1: "", pass2: "" });
      setIsOpenModalPassword(false);
    } else {
      setErrMess(passed.mess);
    }
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword({
      ...userPassword,
      [event.target.name]: event.target.value,
    });
    setErrMess("");
    console.log({
      ...userPassword,
      [event.target.name]: event.target.value,
    });
  };

  const setAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsOpenModalAvatar(false);
    const avatar: string = await saveImage(e);
    UserService.updateUser({ ...user, avatar });
    dispatch(updateUserState({ avatar }));
    console.log(user.avatar === avatar);
    await UserService.updatePages(user.pages);
  };

  const updateName = async () => {
    if (name.length < 3) {
      setErrMessName(signup[lang].nameError);
      return;
    }
    dispatch(updateUserState({ name }));
    await UserService.updateUser({ ...user, name });
  };

  const cnacelName = () => {
    setName(user.name);
    setErrMessName("");
  };

  const [defaultUser, setDefaultUser] = useState(user);

  const handleCancelUser = () => {
    if (defaultUser) {
      dispatch(
        updateUserState({
          ...defaultUser,
          avatar: user.avatar,
          name: user.name,
        })
      );
      setIsOpenModal(false);
      setErrMess("");
    }
  };

  const handleLogOut = () => logout();

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
                    icon={
                      <UserAvatar url={user?.avatar || UserSVG} size={"15"} />
                    }
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
                        <UserAvatar url={user?.avatar || UserSVG} size={"80"} />
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
                                <UploadFile handle={setAvatar} />
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
                          style={
                            errMessName === ""
                              ? {}
                              : { border: "1px solid red", color: "red" }
                          }
                          type="text"
                          name="name"
                          className={styles.settings__input}
                          value={name}
                          onChange={handleChangeName}
                        />
                      </div>
                      <div className={styles.settings__footer}>
                        {name === user.name ? (
                          ""
                        ) : (
                          <>
                            <Button
                              text={data.text_update}
                              cName={styles.button__primary}
                              handle={updateName}
                            />
                            <Button
                              text={data.text_cancel}
                              cName={styles.button__default}
                              handle={cnacelName}
                            />
                            <p style={{ color: "red" }}>{errMessName}</p>
                          </>
                        )}
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
                                  style={
                                    errMess !== ""
                                      ? { border: "1px solid red" }
                                      : {}
                                  }
                                  type="password"
                                  name="pass1"
                                  value={userPassword.pass1}
                                  className={styles.settings__input}
                                  onChange={handleChangePassword}
                                />
                                <div className={styles.settings__label}>
                                  {data.text_repeat_password}
                                </div>
                                <input
                                  value={userPassword.pass2}
                                  style={
                                    errMess !== ""
                                      ? { border: "1px solid red" }
                                      : {}
                                  }
                                  type="password"
                                  name="pass2"
                                  className={styles.settings__input}
                                  onChange={handleChangePassword}
                                />
                                {errMess !== "" && (
                                  <p style={{ color: "red" }}>{errMess}</p>
                                )}
                                <div className={styles.settings__row}>
                                  <Button
                                    text={data.text_update_password}
                                    cName={styles.button__primary}
                                    handle={handleUpdatePassword}
                                  />
                                </div>
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
                      <div className={styles.settings__section}>
                        <Button
                          text={main[lang].text_remove_user}
                          cName={styles.button__warning}
                          handle={async () => {
                            const result = confirm(
                              `${main[lang].text_remove_user}?`
                            );
                            if (result) {
                              deletUser();
                            }
                          }}
                        />
                      </div>
                    </div>
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
