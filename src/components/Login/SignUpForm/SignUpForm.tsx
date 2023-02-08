import React, { SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./signUpForm.module.scss";
import ShowInvitation from "../ShowInvitation/ShowInvitation";
import UserExists from "../UserExists/UserExists";

function SignUpForm(props: {
  invitationActive: boolean;
  setInvitationActive: React.Dispatch<SetStateAction<boolean>>;
  userExistsActive: boolean;
  setUserExistsActive: React.Dispatch<SetStateAction<boolean>>;
}) {
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
    reset,
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

      reset();
      const response = await fetch(
        "https://ninja-notion-api-production.up.railway.app/user",
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
      console.log("error");
      // if (response.status === 401) {
      //   setUserExistsActive(!userExistsActive);
      // }
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Sign Up</h1>
      <div>
        <form
          className={styles.registrationform}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputcontainer}>
            <label htmlFor="userName">
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your name..."
                autoComplete="on"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("userName", {
                  required: "Field must be filled in",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
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
            Sign Up
          </button>
          <div className={styles.forgot}>
            <a href="/" className={styles.link}>
              Forgot password?
            </a>
          </div>
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
