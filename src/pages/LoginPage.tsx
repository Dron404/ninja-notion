import React from "react";
import HomeLogo from "../components/Home/Logo";
import SignUpForm from "../components/Login/SignUpForm/SignUpForm";
import LoginInForm from "../components/Login/LogInForm/LogInForm";

function LoginPage() {
  const hasNoAccount = true;
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <HomeLogo />
        </div>
      </header>
      {hasNoAccount ? <SignUpForm /> : <LoginInForm />}
    </>
  );
}

export default LoginPage;
