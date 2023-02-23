import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./loginInForm.module.scss";
import MessageEmail from "../MessageEmail/MessageEmail";
import MessagePassword from "../MessagePassword/MessagePassword";
import ActivationMessage from "../ActivationMessage/ActivationMessage";
import { API_HOST, ROUT_LOGIN } from "../../../data/constants";
import { IUserData } from "../../../types/interface";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import login from "../../../data/languages/login";

interface EnterFormData {
  email: string;
  password: string;
}

function LogInForm() {
  const [nonValidEmail, toggleNonValidEmail] = useState(false);
  const [nonValidPassword, toggleNonValidPassword] = useState(false);
  const [nonActive, toggleNonActive] = useState(false);
  const [email, setEmail] = useState({ email: "" });

  const dispatch = useAppDispatch();
  const { updateUserLogin, getUserSuccess } = userSlice.actions;

  const { lang } = useAppSelector((store) => store.userReducer);
  const data = login[lang];

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<EnterFormData>({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<EnterFormData> = async (data) => {
    try {
      const emailLower = data.email.toLowerCase();
      const dataUser = {
        email: emailLower,
        password: data.password,
      };

      const url = `${API_HOST}${ROUT_LOGIN}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });

      if (response.status === 404) {
        toggleNonValidEmail(!nonValidEmail);
      }

      if (response.status === 400) {
        toggleNonValidPassword(!nonValidPassword);
        setEmail({ email: data.email });
      }

      if (response.status === 403) {
        toggleNonActive(!nonActive);
        setEmail({ email: data.email });
      }

      if (response.status === 200) {
        dispatch(updateUserLogin(dataUser));
        const data: IUserData = await response.json();
        data.accessToken &&
          sessionStorage.setItem("accessToken", data.accessToken);
        data.refreshToken &&
          localStorage.setItem("refreshToken", data.refreshToken);
        dispatch(getUserSuccess(data));
        navigate("/pages/home");
      }
    } catch (error) {
      throw new Error("Couldn't login");
    }
  };

  const messageNonValidEmail = nonValidEmail ? <MessageEmail /> : "";
  const messageNonValidPassword = nonValidPassword ? (
    <MessagePassword {...email} />
  ) : (
    ""
  );
  const messageNonActive = nonActive ? <ActivationMessage {...email} /> : "";

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.login}</h1>
      <form
        className={styles.registrationform}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.inputcontainer}>
          <label htmlFor="email">
            <span className={styles.label}>{data.label_email}</span>
            <input
              className={styles.input}
              type="email"
              placeholder={data.email_placeholder}
              autoComplete="on"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("email", {
                required: data.requiredMessage,
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
            <span className={styles.label}>{data.label_password}</span>
            <input
              className={styles.input}
              type="password"
              placeholder={data.password_placeholder}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("password", {
                required: data.requiredMessage,
                minLength: {
                  value: 5,
                  message: data.password_errorMessage,
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
          {data.login}
        </button>
        <Link to="/signup" className={styles.linkLogin}>
          {data.login_linkToSignUp}
        </Link>
      </form>
      {messageNonValidEmail}
      {messageNonValidPassword}
      {messageNonActive}
    </main>
  );
}
export default LogInForm;
