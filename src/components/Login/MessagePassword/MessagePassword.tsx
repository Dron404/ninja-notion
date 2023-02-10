import React, { useState } from "react";
import styles from "./messagePassword.module.scss";
import invalidPassword from "../../../assets/images/login/invalidPassword.png";

function MessagePassword() {
  const [clickeddPassword, setClickedPassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.image} src={invalidPassword} alt="" />
        <p className={styles.title}>Invalid password!</p>
        <button
          type="button"
          className={styles.btnRestore}
          onClick={(event) => {
            const btn = event.target as HTMLButtonElement;
            btn.disabled = true;
            setClickedPassword(!clickeddPassword);
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
