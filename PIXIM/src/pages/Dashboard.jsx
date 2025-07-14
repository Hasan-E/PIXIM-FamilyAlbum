import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PiximAppBar from "../components/PiximAppBar";
import PiximDrawer from "../components/PiximDrawer";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundImage: 'url("/bghome.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CssBaseline />
      <PiximAppBar open={open} setOpen={setOpen} />
      <PiximDrawer open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, pt: 12 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
export default Dashboard;
