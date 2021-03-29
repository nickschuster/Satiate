// Gatsby browser API functions.
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme as globalTheme } from "./src/theme/theme";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports.js";

// AWS config init.
export const onClientEntry = () => {
  Amplify.configure(awsconfig);
};

// Theme config.
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
