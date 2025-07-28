import { Box, Typography, useTheme, Paper } from "@mui/material";
import image from "../../assets/LogoMain.png";

const AuthLogo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 6,
        mb: 4,
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: "50%",
          bgcolor: theme.palette.background.default,
          boxShadow: `0px 4px 12px ${theme.palette.secondary.main}`,
        }}
      >
        <img
          src={image}
          alt="main logo"
          style={{
            height: "80px",
            width: "80px",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </Paper>
      <Typography
        variant="h4"
        align="center"
        color="primary"
        sx={{
          mt: 3,
          fontFamily: theme.typography.fontFamily,
          textShadow: `1px 1px 3px ${theme.palette.secondary.main}`,
        }}
      >
        Every frame, a piece of your family.
      </Typography>
    </Box>
  );
};

export default AuthLogo;
