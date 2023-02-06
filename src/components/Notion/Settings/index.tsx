import React from "react";
import { Button } from "../Button";
import styles from "./Settings.module.scss";
import { ReactComponent as TopbarSettingSVG } from "../../../assets/img/svg/setting.svg";

import { UserAvatar } from "../../User/UserAvatar";
import { ButtonDefault } from "../ButtonDefault";

export const Settings: React.FC = () => {
  const data = {
    text_newpage: "New page",
    text_trash: "Trash",
    text_search: "Search",
    text_setting: "Setting",
  };

  const avatarUrl =
    "https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100";
  const avatarSize = "15";

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e: React.MouseEvent<Element>) => {
    if ((e.target as Element).classList.contains("notion__modal")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button
        icon={<TopbarSettingSVG />}
        text={data.text_setting}
        handle={openModal}
      />
      {isOpen && (
        <div className="notion__modal" onMouseDown={closeModal}>
          <div className="notion__modal_body">
            <div className={styles.settings}>
              <div className={styles.settings__menu}>
                <div className={styles.settings__group}>
                  <div className={styles.settings__title}>email@gmail.com</div>
                  <Button
                    icon={<UserAvatar url={avatarUrl} size={avatarSize} />}
                    text="My account"
                  />
                  <Button icon={<TopbarSettingSVG />} text="My settings" />
                  <Button icon={<TopbarSettingSVG />} text="Language" />
                </div>
                <div className={styles.settings__group}>
                  <div className={styles.settings__title}>Workspace</div>

                  <Button icon={<TopbarSettingSVG />} text="Settings" />
                </div>
              </div>
              <div className={styles.settings__content}>
                <div className={styles.settings__header}>Account</div>

                <div className={styles.settings__body}>
                  <ButtonDefault text="Log out" type="danger" />
                </div>
                <div className={styles.settings__footer}>
                  <ButtonDefault text="Update" type="primary" />
                  <ButtonDefault text="Cancel" type="default" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
