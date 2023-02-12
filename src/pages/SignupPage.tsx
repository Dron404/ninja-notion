import React, { useState } from "react";
import SignUpForm from "../components/Login/SignUpForm/SignUpForm";
import HomeLogo from "../components/Home/Logo";

function SignupPage() {
  const [invitationActive, setInvitationActive] = useState(false);
  const [userExistsActive, setUserExistsActive] = useState(false);

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
