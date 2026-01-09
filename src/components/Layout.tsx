import {
  Toolbar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const drawerWidth = 240;

const Layout = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Employees", icon: <PeopleIcon />, path: "/employees" }
  ];

  const drawer = (
    <Box>
      <Toolbar />
      <List>
        {menuItems.map(item => (
          <ListItemButton
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Outlet />

      {/* Top Navbar */}
      <Navbar onMenuClick={() => setMobileOpen(!mobileOpen)} />

      {/* Sidebar (desktop) */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Sidebar (mobile) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>

      {/* Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { md: `${drawerWidth}px` }
        }}
      >
      </Box>
    </Box>
  );
};

export default Layout;
