import Auth from "@aws-amplify/auth";
import { TrackerController } from "../components/Tracker/Controller";
import * as React from "react";
import { Splashpage } from "../components/Splashpage";

import "../css/global.scss";

// Log in/tracker page.
const Index = () => {
  const [login, setLogin] = React.useState(false);

  const loginSuccess = () => {
    // const result = new Promise((reject, resolve) => {
    //   Auth.currentAuthenticatedUser()
    //   .then(resolve(true))
    //   .catch(reject(false));
    // })
    // await result;
    setLogin(true);
  };

  if (login) {
    return <TrackerController />;
  } else {
    return <Splashpage loginSuccess={loginSuccess} />;
  }
};

export default Index;
