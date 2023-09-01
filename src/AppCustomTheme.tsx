import React from "react";
import createTheme from "@mui/material/styles/createTheme";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { LinkProps } from "@mui/material/Link";
import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    brandAlt: Palette;
    brandPrimary: Palette;
    brandGray: Palette;
  }
  interface PaletteOptions {
    brandAlt: PaletteColorOptions;
    brandPrimary: PaletteColorOptions;
    brandGray: PaletteColorOptions;
  }
}
declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    brandPrimary: true;
    brandGray: true;
  }
  interface AppBarPropsColorOverrides {
    brandPrimary: true;
    brandLight: true;
    brandGray: true;
  }
  interface BoxPropsColorOverrides {
    brandPrimary: true;
    brandGray: true;
  }
}

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const AppCustomTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FCF7F8",
        },
        "#root": {
          paddingBottom: 0,
        },
        main: { minHeight: "calc(100vh - 281px)" },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    text: {
      primary: "#e5f1f9",
      secondary: "#003DA5",
      disabled: "#465A64",
    },
    brandPrimary: {
      light: "#6AB3E7",
      main: "#003DA5",
      dark: "#012F6C",
      contrastText: "#e5f1f9",
    },
    brandGray: {
      light: "#F1F1E6",
      main: "#939598",
      dark: "#465A64",
      contrastText: "#e9ecf0",
    },
    brandAlt: {
      light: "#7BB6B3",
      main: "#0084D9",
    },
  },
});
