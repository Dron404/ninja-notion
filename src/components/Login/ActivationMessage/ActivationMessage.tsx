import React, { useState } from "react";
import styles from "./activationMessage.module.scss";
import noActivation from "../../../assets/images/login/mail.png";
import { sendActivationMail } from "../../../store/user/user.action";
import { useAppSelector } from "../../../hooks/redux";
import login from "../../../data/languages/login";

function ActivationMessage(props: { email: string }) {
  const [clickedActivation, setClickedActivation] = useState(false);
  const email = props.email;

  const { lang } = useAppSelector((store) => store.userReducer);
  const data = login[lang];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.image} src={noActivation} alt="" />
        <p className={styles.title}>{data.errorActivation_text}</p>
        <button
          type="button"
          className={styles.btnRestore}
          onClick={async (event) => {
            const btn = event.target as HTMLButtonElement;
            btn.disabled = true;
            const response = await sendActivationMail(email);
            if (response?.status === 200) {
              setClickedActivation(!clickedActivation);
            }
          }}
        >
          {data.errorActivation_BtnNewEmail}
        </button>

        {clickedActivation ? (
          <p className={styles.check}>{data.errorActivation_notification}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ActivationMessage;
