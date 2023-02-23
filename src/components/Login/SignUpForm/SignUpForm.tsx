import React, { SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./signUpForm.module.scss";
import ShowInvitation from "../ShowInvitation/ShowInvitation";
import UserExists from "../UserExists/UserExists";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import signup from "../../../data/languages/signup";

function SignUpForm(props: {
  invitationActive: boolean;
  setInvitationActive: React.Dispatch<SetStateAction<boolean>>;
  userExistsActive: boolean;
  setUserExistsActive: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = signup[lang];

  const {
    setInvitationActive,
    invitationActive,
    userExistsActive,
    setUserExistsActive,
  } = props;

  interface FormData {
    userName: string;
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const emailLower = data.email.toLowerCase();
      const dataUser = {
        name: data.userName,
        email: emailLower,
        password: data.password,
      };

      const response = await fetch(
        "https://ninja-notion-api-production.up.railway.app/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataUser),
        }
      );

      if (response.status === 200) {
        setInvitationActive(!invitationActive);
      }
      if (response.status === 401) {
        setUserExistsActive(!userExistsActive);
      }
    } catch (error) {
      throw new Error("Couldn't sign up");
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.signup}</h1>
      <div>
        <form
          className={styles.registrationform}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputcontainer}>
            <label htmlFor="userName">
              <span className={styles.label}>{data.label_name}</span>
              <input
                className={styles.input}
                type="text"
                placeholder={data.nameInput_placeholder}
                autoComplete="on"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("userName", {
                  required: data.requiredMessage,
                  minLength: {
                    value: 5,
                    message: data.errorMessage,
                  },
                })}
              />
            </label>
          </div>
          <div>
            {errors?.userName && (
              <p className={styles.nameerror}>
                {errors?.userName?.message || "Error!"}
              </p>
            )}
          </div>

          <div className={styles.inputcontainer}>
            <label htmlFor="email">
              <span className={styles.label}>{data.label_email}</span>
              <input
                className={styles.input}
                type="email"
                placeholder={data.emailInput_placeholder}
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
                placeholder={data.passwordInput_placeholder}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("password", {
                  required: data.requiredMessage,
                  minLength: {
                    value: 5,
                    message: data.errorMessage,
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
            {data.signup}
          </button>

          <Link to="/login" className={styles.linkLogin}>
            {data.link_toLogin}
          </Link>
        </form>
      </div>
      <ShowInvitation
        active={invitationActive}
        setActive={setInvitationActive}
      />
      <UserExists active={userExistsActive} setActive={setUserExistsActive} />
    </main>
  );
}

export default SignUpForm;
