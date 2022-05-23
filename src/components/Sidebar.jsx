import {
  Groups,
  Home,
  ModeNight,
  Pages,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

export const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Groups />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Store />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Proifle" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
