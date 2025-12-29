// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
// } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useAuth } from "../context/useAuth";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <AppBar position="fixed" elevation={1}>
//       <Toolbar>
//         <Typography
//           variant="h6"
//           sx={{ flexGrow: 1, fontWeight: 600 }}
//         >
//           Employee Managementqqqqqqqqqqqqqq
//         </Typography>

//         <Box>
//           <IconButton color="inherit" onClick={handleLogout}>
//             <LogoutIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
// //   IconButton,
//   Avatar,
// } from "@mui/material";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// const Navbar = () => {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         bgcolor: "#5B5BD6",
//         zIndex: theme => theme.zIndex.drawer + 1,
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         <Typography fontWeight={700}>CuteHR</Typography>

//         <Box display="flex" alignItems="center" gap={2}>
//           <HelpOutlineIcon />
//           <Avatar src="https://i.pravatar.cc/40" />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

type NavbarProps = {
  onMenuClick?: () => void;
};

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#5B5BD6",
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* Mobile menu */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { md: "none" } }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          CuteHR
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Right actions */}
        <HelpOutlineIcon sx={{ mr: 2 }} />

        <Avatar
          src="https://i.pravatar.cc/40"
          sx={{ width: 32, height: 32, mr: 2 }}
        />

        <IconButton
          color="inherit"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
