import { useEffect, useState, useMemo } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import usePiximCall from "../hook/usePiximCall";
import { useSelector } from "react-redux";
import MomentCard from "../components/cards/MomentCard";
import loadingImage from "../assets/loading.png";
import MomentDetail from "../components/modals/MomentDetail";

const Home = () => {
  const theme = useTheme();
  const [selectedMomentId, setSelectedMomentId] = useState(null);
  const [open, setOpen] = useState(false);
  const { getHome, getMoment } = usePiximCall();
  useEffect(() => {
    getHome();
  }, []);
  const { moments, loading, likes } = useSelector((state) => state.pixim);
  const handleOpen = (momentId) => {
    setOpen(true);
    setSelectedMomentId(momentId);
    getMoment(momentId);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedMomentId(null);
  };
  const selectedMomentData = useMemo(() => {
    return moments.find((moment) => moment._id === selectedMomentId);
  }, [moments, selectedMomentId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <img src={loadingImage} alt="loading" />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        py: 3,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        color={theme.palette.secondary.main}
      >
        FAMILY MOMENTS
      </Typography>
      <Grid container spacing={3}>
        {moments.map((moment) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={moment._id}>
            <MomentCard
              handleOpen={handleOpen}
              {...moment}
              likes={likes[moment._id]}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: "100px" }}>
        <MomentDetail
          open={open}
          handleClose={handleClose}
          moment={selectedMomentData}
          likes={likes[selectedMomentId]}
        />
      </Box>
    </Box>
  );
};

export default Home;
