import React, { useState } from "react";
import styles from "./activationMessage.module.scss";
import noActivation from "../../../assets/images/login/mail.png";
import { API_HOST, ROUT_ACTIVATION } from "../../../data/constants";

function ActivationMessage(props: { email: string }) {
  const [clickedActivation, setClickedActivation] = useState(false);
  const email = props.email;

  // request for repeating of activation email
  async function sendActivationMail(email: string) {
    try {
      const url = `${API_HOST}${ROUT_ACTIVATION}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      console.log(response.status);
      return response;
    } catch (error) {
      console.error("Couldn't send activation email");
    }
  }

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
