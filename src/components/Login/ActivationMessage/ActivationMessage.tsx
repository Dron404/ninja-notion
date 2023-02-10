import React, { useState } from "react";
import styles from "./activationMessage.module.scss";
import noActivation from "../../../assets/images/login/mail.png";

function ActivationMessage() {
  const [clickedActivation, setClickedActivation] = useState(false);

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
          onClick={(event) => {
            const btn = event.target as HTMLButtonElement;
            btn.disabled = true;
            setClickedActivation(!clickedActivation);
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
