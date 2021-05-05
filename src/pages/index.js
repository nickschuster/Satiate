import Auth from "@aws-amplify/auth";
import { TrackerController } from "../components/Tracker/Controller";
import * as React from "react";
import { Splashpage } from "../components/Splashpage";

import "../css/global.scss";

// Log in/tracker page.
const Index = () => {
  const [login, setLogin] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          setLogin(true);
        }
      } catch (e) {
        setLogin(false);
      }
    })();
  }, []);

  const loginSuccess = () => {
    setLogin(true);
  };

  if (login) {
    return <TrackerController />;
  } else {
    return <Splashpage loginSuccess={loginSuccess} />;
  }
};

export default Index;
