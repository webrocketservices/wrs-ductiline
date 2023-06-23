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
    brandPrimary: Palette;
    brandLight: Palette;
  }
  interface PaletteOptions {
    brandPrimary: PaletteColorOptions;
    brandLight: PaletteColorOptions;
  }
}
declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    brandPrimary: true;
    brandLight: true;
  }
  interface AppBarPropsColorOverrides {
    brandPrimary: true;
    brandLight: true;
  }
  interface BoxPropsColorOverrides {
    brandPrimary: true;
    brandLight: true;
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
      styleOverrides: `
        body{
          background-color: #FCF7F8; 
        }
        #root{
          padding-bottom: 0;
         
        }
        main{
          min-height: calc(100vh - 281px);
        }
      `,
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
    error: {
      main: "#A31621",
    },
    brandPrimary: {
      light: "#e5efff",
      main: "#013ba6",
      dark: "#172c4f",
      contrastText: "#79dec9",
    },
    brandLight: {
      light: "#4A5859",
      main: "#FCF7F8",
      dark: "#CED3DC",
      contrastText: "#32373B",
    },
  },
});
