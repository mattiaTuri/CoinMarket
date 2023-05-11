import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LeftMenu from "./LeftMenu";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Divider, IconButton, Menu, Toolbar } from "@mui/material";

function HamburgerMenu() {
  const [openMenu, SetOpenMenu] = useState<boolean>(false);

  return (
    <nav className="navbar mobile-navbar">
      <Box sx={{ height: "60%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h1">
            Coinmarket
          </Typography>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>
      <Divider />
      <Box sx={{ height: "40%" }}>Test</Box>
      <LeftMenu openMenu={openMenu} SetOpenMenu={SetOpenMenu} />
    </nav>
  );
}

export default HamburgerMenu;
