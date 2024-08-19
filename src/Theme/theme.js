import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#765330",
    light: "#F2F0E8",
  },
};
export const theme = createTheme({
  breakpoints: {
    direction: "rtl",
    values: {
      mobile: 0,
      tablet: 625,
      laptop: 900,
      desktop: 1439,
      large: 1536,
    },
  },
  typography: {
    allVariants: {
      letterSpacing: "-0.6px",
      fontFamily: "inherit",
    },
    regular15: {
      fontSize: "15px",
      color: "#765330",
    },
    regular20: {
      fontSize: "20px",
      color: "#765330",
    },
  },
  palette: palette,
  components: {
    MuiCssBaseline: {},
    MuiStack: {
      styleOverrides: {
        root: {},
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          overflow: "clip",
          backgroundColor: palette.primary.light,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            minWidth: "0px",
            minHeight: "0px",
            border: "1px solid",
            backgroundColor: palette.primary.main,
            borderColor: palette.primary.main,
            color: palette.primary.light,
            borderRadius: "15px",
            alignItems: "center",
            justifyContent: "center",
            width: "78px",
            "&:hover": {
              color: palette.primary.main,
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
  },
});
