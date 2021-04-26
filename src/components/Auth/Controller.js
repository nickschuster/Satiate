import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { ResetPassword } from "./ResetPassword";
import { AuthStates } from "./AuthStates";
import { VerifyPassword } from "./VerifyPassword";
import { NewPassword } from "./NewPassword";
import { VerifyAccount } from "./VerifyAccount";

export const AuthenticationFlow = ({ loginSuccess }) => {
  const [authState, setAuthStateHook] = useState(AuthStates.login);

  // Register new user.
  const register = ({ name, email, password }) => {
    console.log("Register.");
  };

  // Function passed to every auth component to set the current auth state.
  const setAuthState = (state) => {
    setAuthStateHook(state);
    if (state === AuthStates.loginSuccess) {
      loginSuccess();
    }
  };

  // Determine what form to display based on auth state.
  if (authState === AuthStates.register) {
    return <Register setAuthState={setAuthState} register={register} />;
  } else if (authState === AuthStates.login) {
    return <Login setAuthState={setAuthState} />;
  } else if (authState === AuthStates.resetPassword) {
    return <ResetPassword setAuthState={setAuthState} />;
  } else if (authState === AuthStates.verifyPassword) {
    return <VerifyPassword setAuthState={setAuthState} />;
  } else if (authState === AuthStates.newPassword) {
    return <NewPassword setAuthState={setAuthState} />;
  } else if (authState === AuthStates.verifyAccount) {
    return <VerifyAccount setAuthState={setAuthState} />;
  } else if (authState === AuthStates.loginSuccess) {
    return null;
  } else {
    return <Login setAuthState={setAuthState} />;
  }
};
