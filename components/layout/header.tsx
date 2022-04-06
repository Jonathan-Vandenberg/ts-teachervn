import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect } from "react";
import classes from "./header.module.scss";

const pages = [
  "Home",
  "Schools",
  "Accomodation",
  "Langauge Exchange",
  "Volunteer",
  "About",
  "Contact",
];

const settings = [
  "Post Teaching Job",
  "Post Accomodation",
  "Post Volunteer Position",
  "Post Language Exchange",
];

const ResponsiveAppBar = () => {
  const router = useRouter();

  useEffect(() => {
    let prevScrollPos: number = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos: number = window.pageYOffset;
      if (prevScrollPos > currentScrollPos || currentScrollPos === 0.0) {
        document.getElementById("navbar")!.style.top = "0";
      } else {
        document.getElementById("navbar")!.style.top = "-15vh";
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);

  const pageChangeHandler = (url: string) => {
    router.push(url);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.innerText === "") {
      setAnchorElUser(null);
    } else {
      router.push(
        "/" +
          e.currentTarget.innerText.replace(/\s+/g, "-").toLowerCase().trim()
      );
      setAnchorElUser(null);
    }
  };

  const handleCloseUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.innerText === "") {
      setAnchorElUser(null);
    } else {
      router.push(
        "/" +
          e.currentTarget.innerText.replace(/\s+/g, "-").toLowerCase().trim()
      );
      setAnchorElUser(null);
    }
  };

  return (
    <AppBar  position="fixed" className={classes.nav} id="navbar">
      <Container color='primary' maxWidth="xl" style={{ height: "8vh" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton>
              <SchoolIcon style={{ color: "White" }} fontSize="large" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => pageChangeHandler("/")}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.button}
            >
              Home
            </Button>

            <Button
              onClick={() => pageChangeHandler("/schools")}
              sx={{ my: 2, display: "block" }}
              className={classes.button}
            >
              Schools
            </Button>

            <Button
              onClick={() => pageChangeHandler("/accomodation")}
              sx={{ my: 2, display: "block" }}
              className={classes.button}
            >
              Accomodation
            </Button>

            <Button
              onClick={() => pageChangeHandler("/volunteer")}
              sx={{ my: 2, display: "block" }}
              className={classes.button}
            >
              Volunteer
            </Button>

            <Button
              onClick={() => pageChangeHandler("/language-exchange")}
              sx={{ p: 0 }}
              className={classes.button}
            >
              Language Exchange
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Post job offers">
              <Button
                onClick={handleOpenUserMenu}
                sx={{ p: 1 }}
                className={classes.button}
              >
                Agents
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
