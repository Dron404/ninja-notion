import React from "react";
import styles from "./messageEmail.module.scss";
import question from "../../../assets/images/login/question.png";
import { useAppSelector } from "../../../hooks/redux";
import login from "../../../data/languages/login";

function MessageEmail() {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = login[lang];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.question}
          src={question}
          alt="blue question mark"
        />
        <p className={styles.title}>
          {data.errorEmail_textOne}
          <br /> {data.errorEmail_textTwo}
        </p>
        <a href="/signup" className={styles.linkRegistr}>
          {data.errorEmail_linkToRegistration}
        </a>
      </div>
    </div>
  );
}

export default MessageEmail;
