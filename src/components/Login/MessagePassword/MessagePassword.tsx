import React, { useState } from "react";
import styles from "./messagePassword.module.scss";
import invalidPassword from "../../../assets/images/login/invalidPassword.png";
import { resetPasswordFromLogin } from "../../../store/user/user.action";

function MessagePassword(props: { email: string }) {
  const [clickeddPassword, setClickedPassword] = useState(false);
  const email = props.email;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.image} src={invalidPassword} alt="" />
        <p className={styles.title}>Invalid password!</p>
        <button
          type="button"
          className={styles.btnRestore}
          onClick={async (event) => {
            const btn = event.target as HTMLButtonElement;
            btn.disabled = true;
            const response = await resetPasswordFromLogin(email);
            if (response?.status === 200) {
              setClickedPassword(!clickeddPassword);
            }
          }}
        >
          Click here to restore password
        </button>
        {clickeddPassword ? (
          <p className={styles.check}>
            Check your email for a new password. If there is no letter in few
            minutes see spam folder.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MessagePassword;
