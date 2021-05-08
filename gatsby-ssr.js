// Gatsby browser API functions.
import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { lightTheme as globalTheme } from "./src/theme/theme";
import {
  Notification,
  NotifContextProvider,
} from "./src/components/Notification";

// Theme config.
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Helmet>
        <meta charSet="utf-8" />
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
