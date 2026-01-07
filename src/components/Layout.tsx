
import {
  Toolbar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Navbar from "./Navbar";
import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // change routes when clicking menu items
  const navigate = useNavigate(); 
    // know which page is active
  const location = useLocation();
  //  controls mobile drawer open/close
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Employees", icon: <PeopleIcon />, path: "/employees" },
  ];

  const drawer = (
    <Box>
      <Toolbar />

      {/* Sidebar titlee */}
      <Box px={3} py={2}>
        
        <Typography variant="subtitle2" color="text.secondary">
          Your Apps
        </Typography>
      </Box>

      <List>
        {menuItems.map(item => (
          <ListItemButton
            key={item.text}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            sx={{
              mx: 1,
              mb: 0.5,
              borderRadius: 2,
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Top Navbar */}
      <Navbar onMenuClick={() => setMobileOpen(true)} />

      {/* Desktop Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #eee",
            bgcolor: "#ffffff",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Mobile Sidebar */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          // ml: { md: `${drawerWidth}px` },
          ml:3
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
