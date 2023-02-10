import React from "react";
import styles from "./messageEmail.module.scss";
import question from "../../../assets/images/login/question.png";

function MessageEmail() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.question}
          src={question}
          alt="blue question mark"
        />
        <p className={styles.title}>
          Something went wrong!
          <br /> We do not have user with such email. Please use the link for
          registration!
        </p>
        <a href="/signup" className={styles.linkRegistr}>
          Link for registration
        </a>
      </div>
    </div>
  );
}

export default MessageEmail;
