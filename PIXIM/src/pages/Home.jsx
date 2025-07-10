import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PiximAppBar from "../components/PiximAppBar";
import PiximDrawer from "../components/PiximDrawer";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PiximAppBar open={open} setOpen={setOpen} />
      <PiximDrawer open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Sayfalar gelecek */}
      </Box>
    </Box>
  );
};
export default Home;
