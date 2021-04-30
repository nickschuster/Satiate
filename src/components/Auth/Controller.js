import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { ResetPassword } from "./ResetPassword";
import { AuthStates } from "./AuthStates";
import { VerifyPassword } from "./VerifyPassword";
import { NewPassword } from "./NewPassword";
import { VerifyAccount } from "./VerifyAccount";
import generateUsername from "../../util/generateUsername";
import Auth from "@aws-amplify/auth";

export const AuthenticationFlow = ({ loginSuccess }) => {
  const [authState, setAuthStateHook] = useState(AuthStates.login);
  const [loadStatus, setLoadStatus] = useState(false);

  // Register new user.
  const register = async ({ name, email, password }) => {
    const username = generateUsername(email);

    try {
      setLoadStatus(true);
      // const { user } = await Auth.signUp({
      //   email,
      //   password,
      //   attributes: {
      //     name, // optional
      //     email, // optional - E.164 number convention
      //     preffered_username: username,
      //   },
      // });
      // setLoadStatus(false);
      // console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
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
    return (
      <Register
        setAuthState={setAuthState}
        register={register}
        loadStatus={loadStatus}
      />
    );
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
