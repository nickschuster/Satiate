// Gatsby browser API functions.
import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { lightTheme as globalTheme } from "./src/theme/theme";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import { Notification } from "./src/components/Notification";

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
        <title>Satiate</title>
      </Helmet>
      <Notification />
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
