import { themeColorLight } from "./colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Theme config.
let theme = createMuiTheme({
  typography: {
    h1: {
      fontWeight: 1000,
    },
  },
  palette: {
    primary: {
      main: themeColorLight.primary,
      contrastText: themeColorLight.secondary,
    },
    secondary: {
      main: themeColorLight.secondary,
      contrastText: themeColorLight.text,
    },
    text: {
      main: themeColorLight.text,
    },
    protein: {
      main: themeColorLight.protein,
    },
    fat: {
      main: themeColorLight.fat,
    },
    carbs: {
      main: themeColorLight.carbs,
    },
    error: {
      main: themeColorLight.text,
    },
    warning: {
      main: themeColorLight.protein,
    },
    success: {
      main: themeColorLight.fat,
    },
    info: {
      main: themeColorLight.carbs,
    },
  },
});

// Responsive fonts.
theme = responsiveFontSizes(theme);

export { theme };
