import { useState, MouseEvent, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
  Link,
} from "@mui/material/";
import { navBarComponent, mainLogo } from "../styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useFetchWebContentDataQuery } from "../redux/firebaseSlice";
import { MenuItem as MenuItemType } from "../types";

export default function NavBar() {
  const { data } = useFetchWebContentDataQuery();

  const availableWebMenues = data?.WebConfig.WebMenu.filter(
    (menu: MenuItemType) => menu.show
  );
  const [scrolled, setScrolled] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      color="brandPrimary"
      sx={navBarComponent({ menuTransparent: scrolled })}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={mainLogo}>
            <Link component={RouterLink} color="#2D404E" to="/" variant="body2">
              <img
                src={
                  scrolled
                    ? data?.WebConfig.LogoList.LogoInverted.imgUrl
                    : data?.WebConfig.LogoList.LogoColor.imgUrl
                }
              />
            </Link>
          </Box>
          {/* SM menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {availableWebMenues?.map((menu: MenuItemType) => (
                <MenuItem key={menu.text} onClick={handleCloseNavMenu}>
                  <Link
                    component={RouterLink}
                    key={menu.text}
                    color="#2D404E"
                    to={menu.linkUrl}
                    variant="body2"
                  >
                    {menu.text}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* MD menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            style={{ justifyContent: "flex-end" }}
          >
            {availableWebMenues?.map((menu: MenuItemType) => (
              <Link
                component={RouterLink}
                key={menu.text}
                sx={{ m: 2, color: "#2D404E", display: "block" }}
                to={menu.linkUrl}
                variant="body2"
              >
                {menu.text}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
