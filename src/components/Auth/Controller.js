import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { ResetPassword } from "./ResetPassword";
import { AuthStates } from "./AuthStates";
import { VerifyPassword } from "./VerifyPassword";
import { NewPassword } from "./NewPassword";
import { VerifyAccount } from "./VerifyAccount";
import { generateUsername as generatePreferredUsername } from "../../util/generateUsername";
import Auth from "@aws-amplify/auth";
import { useNotification } from "../Notification";
import { NotConfirmedError } from "../../util/amplifyErrorCodes";

export const AuthenticationFlow = ({ loginSuccess }) => {
  const [authState, setAuthStateHook] = useState(AuthStates.login);
  const { addNotification } = useNotification();
  const [username, setUsername] = useState();

  // Register new user.
  const register = async ({ name, email, password }) => {
    const username = generatePreferredUsername(email);
    console.log(username, email, name, password);

    try {
      setUsername(email);
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
          email,
          preferred_username: username,
        },
      });

      setAuthState(AuthStates.verifyAccount);
      addNotification("Please verify your email.");
    } catch (e) {
      addNotification("Could not create account. " + e.message);
    }
  };

  // Verify user email.
  const verifyEmail = async (code) => {
    try {
      await Auth.confirmSignUp(username, code);
      setAuthState(AuthStates.loginSuccess);
      addNotification("Welcome to Satiate!");
    } catch (e) {
      addNotification("Could not verify email. " + e.message);
    }
  };

  // Resend email verification code.
  const resendCode = async () => {
    try {
      await Auth.resendSignUp(username);
    } catch (e) {
      addNotification("Could not resend code. " + e.message);
    }
  };

  // Log in the user.
  const login = async ({ email, password }) => {
    try {
      setUsername(email);
      await Auth.signIn(email, password);
      setAuthState(AuthStates.loginSuccess);
    } catch (e) {
      addNotification("Could not log in. " + e.message);
      if (e.code === NotConfirmedError) {
        setAuthState(AuthStates.verifyAccount);
      }
    }
  };

  // Start forgot password flow.
  const forgotPassword = async () => {
    setAuthState(AuthStates.resetPassword);
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
    return (
      <Login
        setAuthState={setAuthState}
        login={login}
        forgotPassword={forgotPassword}
      />
    );
  } else if (authState === AuthStates.resetPassword) {
    return <ResetPassword setAuthState={setAuthState} />;
  } else if (authState === AuthStates.verifyPassword) {
    return <VerifyPassword setAuthState={setAuthState} />;
  } else if (authState === AuthStates.newPassword) {
    return <NewPassword setAuthState={setAuthState} />;
  } else if (authState === AuthStates.verifyAccount) {
    return (
      <VerifyAccount
        setAuthState={setAuthState}
        verifyEmail={verifyEmail}
        resendCode={resendCode}
      />
    );
  } else if (authState === AuthStates.loginSuccess) {
    return null;
  } else {
    return <Login setAuthState={setAuthState} />;
  }
};
