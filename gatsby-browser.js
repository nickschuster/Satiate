// Gatsby browser API functions.
import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { lightTheme as globalTheme } from "./src/theme/theme";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import {
  Notification,
  NotifContextProvider,
} from "./src/components/Notification";

// AWS config init.
export const onClientEntry = () => {
  Amplify.configure(awsconfig);
};

// Theme config.
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1; viewport-fit=cover"
        />

        <title>Satiate</title>
      </Helmet>
      <CssBaseline />
      <NotifContextProvider>
        <Notification />
        {element}
      </NotifContextProvider>
    </ThemeProvider>
  );
};
