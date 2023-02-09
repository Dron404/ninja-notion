import React from "react";
import HomeLogo from "../components/Home/Logo";
import LoginInForm from "../components/Login/LogInForm/LogInForm";

function LoginPage() {
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
