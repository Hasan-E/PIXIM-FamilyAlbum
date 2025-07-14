import React, { useEffect } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import usePiximCall from "../hook/usePiximCall";
import { useSelector } from "react-redux";
import MomentCard from "../components/MomentCard";

const Home = () => {
  const theme = useTheme();
  const { getData } = usePiximCall();
  useEffect(() => {
    getData("blogs?sort[createdAt]=desc");
  }, []);
  const { moments } = useSelector((state) => state.pixim);

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
            <MomentCard {...moment} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
