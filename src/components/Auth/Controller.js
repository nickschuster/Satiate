import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { ForgotPassword } from "./ForgotPassword";
import { AuthStates } from "./AuthStates";
import { ResetPassword } from "./ResetPassword";
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
  const forgotPassword = async (email) => {
    try {
      const user = email || username;
      console.log(user);
      setUsername(user);
      await Auth.forgotPassword(user);
      setAuthState(AuthStates.verifyPassword);
    } catch (e) {
      addNotification("Could not reset password. " + e.message);
    }
  };

  // Reset user password.
  const resetPassword = async ({ code, password }) => {
    try {
      await Auth.forgotPasswordSubmit(username, code, password);
      addNotification("Password has been reset.");
      setAuthState(AuthStates.login);
    } catch (e) {
      addNotification("Could not reset password. " + e.message);
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
    return <Register setAuthState={setAuthState} register={register} />;
  } else if (authState === AuthStates.login) {
    return <Login setAuthState={setAuthState} login={login} />;
  } else if (authState === AuthStates.resetPassword) {
    return (
      <ForgotPassword
        setAuthState={setAuthState}
        forgotPassword={forgotPassword}
      />
    );
  } else if (authState === AuthStates.verifyPassword) {
    return (
      <ResetPassword
        setAuthState={setAuthState}
        resetPassword={resetPassword}
        forgotPassword={forgotPassword}
      />
    );
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
