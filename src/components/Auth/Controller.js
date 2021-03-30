import React, { useState } from "react";
import { Login } from "./Login";

export const AuthenticationFlow = () => {
  const [authState, setAuthStateHook] = useState();

  // Function passed to every auth component to set the current auth state.
  const setAuthState = (state) => {
    console.log(state);
    setAuthStateHook(state);
  };

  // Determine what form to display based on auth state.
  if (authState) {
    return <h1>test</h1>;
  } else {
    return <Login setAuthState={setAuthState} />;
  }
};
