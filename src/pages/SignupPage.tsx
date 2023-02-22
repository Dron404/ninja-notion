import React, { useState } from "react";
import SignUpForm from "../components/Login/SignUpForm/SignUpForm";
import HomeLogo from "../components/Home/Logo";
import autorizationCheck from "../utils/autorizationCheck";

function SignupPage() {
  const [invitationActive, setInvitationActive] = useState(false);
  const [userExistsActive, setUserExistsActive] = useState(false);
  autorizationCheck();

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <HomeLogo />
        </div>
      </header>
      <SignUpForm
        setInvitationActive={setInvitationActive}
        invitationActive={invitationActive}
        setUserExistsActive={setUserExistsActive}
        userExistsActive={userExistsActive}
      />
    </>
  );
}

export default SignupPage;
