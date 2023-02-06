import React from "react";
import HomeLogo from "../components/Home/Logo";
import RegistrationForm from "../components/Login/RegistrationForm/RegistrationForm";
import AuthorizationForm from "../components/Login/AuthorizationForm/AuthorizationForm";

function LoginPage() {
  const notLoggedIn = true;
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <HomeLogo />
        </div>
      </header>
      {notLoggedIn ? <RegistrationForm /> : <AuthorizationForm />}
    </>
  );
}

export default LoginPage;
