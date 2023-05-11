import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

interface LeftMenuProps {
  openMenu: boolean;
  SetOpenMenu(elem: boolean): void;
}

function LeftMenu({ openMenu, SetOpenMenu }: LeftMenuProps) {
  return <Drawer></Drawer>;
}

export default LeftMenu;
