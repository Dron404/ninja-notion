import React, { useState } from "react";
import HomeLogo from "../components/Home/Logo";
import SignUpForm from "../components/Login/SignUpForm/SignUpForm";
import LoginInForm from "../components/Login/LogInForm/LogInForm";

function LoginPage() {
  const linkHeader = window.location.href;
  const [invitationActive, setInvitationActive] = useState(false);
  const [userExistsActive, setUserExistsActive] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <HomeLogo />
        </div>
      </header>
      {linkHeader.includes("#log") ? (
        <LoginInForm />
      ) : (
        <SignUpForm
          setInvitationActive={setInvitationActive}
          invitationActive={invitationActive}
          setUserExistsActive={setUserExistsActive}
          userExistsActive={userExistsActive}
        />
      )}
    </>
  );
}

export default LoginPage;
