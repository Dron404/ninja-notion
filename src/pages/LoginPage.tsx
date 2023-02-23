import React from "react";
import HomeLogo from "../components/Home/Logo";
import LoginInForm from "../components/Login/LogInForm/LogInForm";
import autorizationCheck from "../utils/autorizationCheck";

function LoginPage() {
  autorizationCheck();
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <HomeLogo />
        </div>
      </header>
      <LoginInForm />
    </>
  );
}

export default LoginPage;
