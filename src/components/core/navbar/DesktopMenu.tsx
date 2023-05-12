import { Box, Container, Divider, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import Searchbar from "../../shared/searchbar/Searchbar";

function DesktopMenu() {
  return (
    <nav className="navbar desktop-navbar">
      <Box sx={{ height: "40%" }}>
        <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton color="inherit">
            <LightModeIcon />
          </IconButton>
        </Container>
      </Box>
      <Divider />
      <Box sx={{ height: "60%" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Box>
              <Typography variant="h5" component="h1">
                Coinmarket
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="">Crypocurrencies</Link>
              <Link href="">Exchanges</Link>
            </Box>
          </Box>
          <Box>
            <Searchbar />
          </Box>
        </Container>
      </Box>
    </nav>
  );
}

export default DesktopMenu;
