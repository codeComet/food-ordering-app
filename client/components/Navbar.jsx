import styles from "../styles/Navstyle.module.css";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import {
  Drawer,
  ListItemButton,
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { GiHotMeal } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { SiBlogger } from "react-icons/si";
import { FaRegEnvelope } from "react-icons/fa";

import * as React from "react";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <>
        <div className={styles.nav}>
          <div className={styles.num_container}>
            <BsTelephoneOutbound
              style={{ margin: "5px 5px 0px 0px", color: "#fff" }}
            />{" "}
            <span className={styles.number}>123 456 665</span>
            <span className={styles.number}> To order</span>
          </div>
          <div className={styles.navitem}>
            <a href="#">Specials</a>
          </div>
          <div className={styles.navitem}>
            <a href="#">Menu</a>
          </div>
        </div>
      </>
      <div className={styles.logo}>
        <a href="/">Foodify</a>
      </div>
      <>
        <div className={styles.nav}>
          <div className={styles.navitem}>
            <a href="#">Products</a>
          </div>
          <div className={styles.navitem}>
            <a href="#">Blog</a>
          </div>
          <div className={styles.navitem}>
            <a href="#">Contact us</a>
          </div>
          <div className={styles.navitem}>
            <MdOutlineShoppingCart
              style={{ color: "#fff", fontSize: "1.6rem" }}
            />
            <div className={styles.item_count}>2</div>
          </div>
        </div>
      </>
      <div className={styles.navitemMbl}>
        <MdOutlineShoppingCart style={{ color: "#fff", fontSize: "1.6rem" }} />
        <div className={styles.item_countMbl}>2</div>
      </div>
      <div className={styles.navitemMbl}>
        <MobileMenu />
      </div>
    </div>
  );
};

function MobileMenu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        backgroundColor: "brown",
        color: "white",
        height: "100%",
        width: "220px",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: "aliceblue" }}>
              <BiFoodMenu />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: "aliceblue" }}>
              <GiHotMeal />
            </ListItemIcon>
            <ListItemText primary="Specials" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: "aliceblue" }}>
              <SiBlogger />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: "aliceblue" }}>
              <FaRegEnvelope />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <div className={styles.navitemMbl}>
              <HiOutlineMenuAlt3
                style={{ color: "#fff", fontSize: "1.6rem" }}
              />
            </div>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Navbar;
