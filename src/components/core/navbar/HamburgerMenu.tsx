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
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height:"100%"
          }}
        >
          <Typography variant="h5" component="h1">
            Coinmarket
          </Typography>
          <IconButton color="inherit" onClick={() => SetOpenMenu(true)}>
            <MenuIcon />
          </IconButton>
        </Container>
      </Box>
      <Divider />
      <Box sx={{ height: "40%" }}>Default text</Box>
      <LeftMenu openMenu={openMenu} SetOpenMenu={SetOpenMenu} />
    </nav>
  );
}

export default HamburgerMenu;
