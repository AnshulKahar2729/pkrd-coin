import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import NavLogo from "../../assets/images/nav-logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    // marginTop: "64px", // Adjust the top margin as needed
    marginTop : "64px",
    background: "transparent", // Set background to transparen
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });


  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  return (
    <div>
      <GiHamburgerMenu onClick={toggleDrawer(true)}></GiHamburgerMenu>

      <Drawer classes={{ paper: classes.drawerPaper }} anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        <div className=" w-screen">
        HELLO
        </div>
      </Drawer>
    </div>
  );
}
