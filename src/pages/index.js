import Auth from "@aws-amplify/auth";
import { TrackerController } from "../components/Tracker/Controller";
import * as React from "react";
import { Splashpage } from "../components/Splashpage";

import "../css/global.scss";

// Log in/tracker page.
const Index = () => {
  const [login, setLogin] = React.useState(false);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    (async () => {
      try {
        const userSession = await Auth.currentAuthenticatedUser();
        if (userSession) {
          setUser(userSession);
          setLogin(true);
        }
      } catch (e) {
        setLogin(false);
      }
    })();
  }, [login]);

  const loginSuccess = () => {
    setLogin(true);
  };

  if (login) {
    return <TrackerController user={user} />;
  } else {
    return <Splashpage loginSuccess={loginSuccess} />;
  }
};

export default Index;
