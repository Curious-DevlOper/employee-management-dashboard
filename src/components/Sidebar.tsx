import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography,
  Toolbar,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 260;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          borderRight: "1px solid #eee",
        },
      }}
    >
      <Toolbar />

      {/* User Profile */}
      <Box textAlign="center" py={3}>
        <Avatar
          src="https://i.pravatar.cc/100"
          sx={{ width: 64, height: 64, mx: "auto", mb: 1 }}
        />
        <Typography fontWeight={600}>Ethan Antonio</Typography>
        <Typography variant="body2" color="text.secondary">
          Centovo
        </Typography>
      </Box>

      <List>
        <ListItemButton
          selected={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          selected={location.pathname === "/employees"}
          onClick={() => navigate("/employees")}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
