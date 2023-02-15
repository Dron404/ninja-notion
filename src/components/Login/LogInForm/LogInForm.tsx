import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./loginInForm.module.scss";
import MessageEmail from "../MessageEmail/MessageEmail";
import MessagePassword from "../MessagePassword/MessagePassword";
import ActivationMessage from "../ActivationMessage/ActivationMessage";
import { IUserData, IUserEmailPassword } from "../../../types/interface";
import { useAppDispatch } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import { Link } from "react-router-dom";

function LogInForm() {
  const [nonValidEmail, toggleNonValidEmail] = React.useState(false);
  const [nonValidPassword, toggleNonValidPassword] = React.useState(false);
  const [nonActive, toggleNonActive] = React.useState(false);

  const dispatch = useAppDispatch();
  const { updateUserLogin, getUserSuccess } = userSlice.actions;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IUserEmailPassword>({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUserEmailPassword> = async (data) => {
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
        <Link to="/signup" className={styles.linkLogin}>
          Sign Up
        </Link>
      </form>
      {messageNonValidEmail}
      {messageNonValidPassword}
      {messageNonActive}
    </main>
  );
}
export default LogInForm;
