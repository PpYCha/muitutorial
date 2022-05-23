import { Mail, Pets, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FACEBOOK
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/274667017_4676692592442730_3792130724342147950_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8v39tdDhkvATIP7mckX1GrGx5_Yf5TYSsbHn9h_lNhMN8LBe-zpXEdouJonpzRAWTIYrr9SVVRXHjUOXqgSqL&_nc_ohc=ncsfnLH1akIAX8yfXIc&tn=TzUkFVNKxc6yKZVI&_nc_ht=scontent.fceb1-1.fna&oh=00_AT9PL0OVActJvoQ6dQIIRAVnlbmVFHYgHLyTPY8z1IM1vQ&oe=628E402D"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/274667017_4676692592442730_3792130724342147950_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8v39tdDhkvATIP7mckX1GrGx5_Yf5TYSsbHn9h_lNhMN8LBe-zpXEdouJonpzRAWTIYrr9SVVRXHjUOXqgSqL&_nc_ohc=ncsfnLH1akIAX8yfXIc&tn=TzUkFVNKxc6yKZVI&_nc_ht=scontent.fceb1-1.fna&oh=00_AT9PL0OVActJvoQ6dQIIRAVnlbmVFHYgHLyTPY8z1IM1vQ&oe=628E402D"
          />
          <Typography variant="span">Diasan</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo"
        aria-labelledby="demo-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
