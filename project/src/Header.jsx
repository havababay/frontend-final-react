import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const handleNavigation = (url) => {
    navigate(url);
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grade Insight
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer}>
        <div style={{ width: "250px" }}>
          <List>
            <ListItem onClick={() => handleNavigation("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={() => handleNavigation("/help")}>
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem>
              <NavLink to="/help" style={{ textDecoration: "none" }}>
                <ListItemText primary="Help" />
              </NavLink>
            </ListItem>
            <ListItem onClick={() => handleNavigation("/students")}>
              <ListItemText primary="Students">
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
