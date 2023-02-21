import React, { useState } from "react";
import styles from "./activationMessage.module.scss";
import noActivation from "../../../assets/images/login/mail.png";
import { sendActivationMail } from "../../../store/user/user.action";

function ActivationMessage(props: { email: string }) {
  const [clickedActivation, setClickedActivation] = useState(false);
  const email = props.email;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.image} src={noActivation} alt="" />
        <p className={styles.title}>
          Your account is not activated! Check your email for activation letter
        </p>
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
          Click here to send the activation letter again
        </button>

        {clickedActivation ? (
          <p className={styles.check}>
            Check your email for activation letter. If there is no letter in few
            minutes see spam folder.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ActivationMessage;
