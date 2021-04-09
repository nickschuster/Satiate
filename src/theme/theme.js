import { themeColorLight } from "./colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Theme config.
let lightTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        form: {
          backgroundColor: themeColorLight.secondary,
          borderRadius: 15,
          margin: "auto",
          minWidth: 285,
          maxWidth: 450,
          flexGrow: 1,
        },
      },
    },
    MuiLink: {
      root: {
        color: themeColorLight.text,
        cursor: "pointer",
        "&:hover": {
          color: themeColorLight.primary,
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 15,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        textTransform: "none",
        boxShadow: "none",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
      outlined: {
        padding: "none",
      },
    },
    MuiTextField: {
      root: {
        borderRadius: 15,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: themeColorLight.primary,
            border: "2px solid",
            borderRadius: 15,
            color: themeColorLight.primary,
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& fieldset": {
            borderColor: themeColorLight.primary,
          },
        },
        "& .MuiFormLabel-root": {
          color: themeColorLight.text,
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 1000,
    },
  },
  palette: {
    background: {
      default: themeColorLight.primary,
    },
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
  },
});

// Responsive fonts.
lightTheme = responsiveFontSizes(lightTheme);

export { lightTheme };
