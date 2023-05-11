import Container from "@mui/material/Container";
import DesktopMenu from "./DesktopMenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <AppBar
      className="header"
      position="static"
      color="inherit"
      // sx={{ boxShadow: 0 }}
      sx={{ height: "100px" }}
    >
      <HamburgerMenu />
      <DesktopMenu />
    </AppBar>
  );
}

export default Navbar;
