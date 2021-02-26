import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <>
      <h1>Satiate</h1>
      <AmplifySignOut />
    </>
  );
};

export default withAuthenticator(App);
