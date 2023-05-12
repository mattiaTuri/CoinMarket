import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";

interface LeftMenuProps {
  openMenu: boolean;
  SetOpenMenu(elem: boolean): void;
}

function LeftMenu({ openMenu, SetOpenMenu }: LeftMenuProps) {
  return (
    <Drawer className="mobile-navbar" anchor="left" open={openMenu} onClose={() => SetOpenMenu(false)}>
          <Container sx={{ height:"60px"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems:"center", height:"100%"}}>
            <Typography className="link inter" variant="h5" component="h1">
            CoinMarket
          </Typography>
            <IconButton color="inherit" onClick={() => SetOpenMenu(false)}>
              <CloseIcon />
            </IconButton>
            </Box>          
        </Container>
        <Divider />
  </Drawer>
  )
}

export default LeftMenu;
