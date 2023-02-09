import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./loginInForm.module.scss";
import MessageEmail from "../MessageEmail/MessageEmail";
import MessagePassword from "../MessagePassword/MessagePassword";
import ActivationMessage from "../ActivationMessage/ActivationMessage";

function LogInForm() {
  const [nonValidEmail, toggleNonValidEmail] = useState(false);
  const [nonValidPassword, toggleNonValidPassword] = useState(false);
  const [nonActive, toggleNonActive] = useState(false);

  interface EnterFormData {
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<EnterFormData>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<EnterFormData> = async (data) => {
    try {
      const emailLower = data.email.toLowerCase();
      const dataUser = {
        email: emailLower,
        password: data.password,
      };

      const response = await fetch(
        "https://ninja-notion-api-production.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataUser),
        }
      );

      if (response.status === 404) {
        toggleNonValidEmail(!nonValidEmail);
      }
      if (response.status === 400) {
        toggleNonValidPassword(!nonValidPassword);
      }
      if (response.status === 403) {
        toggleNonActive(!nonActive);
      }
    } catch (error) {
      console.log("Couldn't log in");
    }
  };

  const messageNonValidEmail = nonValidEmail ? <MessageEmail /> : "";
  const messageNonValidPassword = nonValidPassword ? <MessagePassword /> : "";
  const messageNonActive = nonActive ? <ActivationMessage /> : "";

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Log In</h1>
      <form
        className={styles.registrationform}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.inputcontainer}>
          <label htmlFor="email">
            <span className={styles.label}>Email</span>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email..."
              autoComplete="on"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("email", {
                required: "Field must be filled in",
              })}
            />
          </label>
        </div>
        <div>
          {errors?.email && (
            <p className={styles.nameerror}>
              {errors?.email?.message || "Error!"}
            </p>
          )}
        </div>

        <div className={styles.inputcontainer}>
          <label htmlFor="password">
            <span className={styles.label}>Password</span>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password..."
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("password", {
                required: "Field must be filled in",
                minLength: {
                  value: 5,
                  message: "Minimum 5 characters",
                },
              })}
            />
          </label>
        </div>
        <div>
          {errors?.password && (
            <p className={styles.nameerror}>
              {errors?.password?.message || "Error!"}
            </p>
          )}
        </div>

        <button type="submit" className={styles.submit} disabled={!isValid}>
          Log In
        </button>
      </form>
      {messageNonValidEmail}
      {messageNonValidPassword}
      {messageNonActive}
    </main>
  );
}
export default LogInForm;
