import {
  Box,
  Button,
  IconButton,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import image from "../assets/LogoMain.png";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import useAuthCall from "../hook/useAuthCall";

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const PiximAppBar = ({ open, setOpen }) => {
  const { logout } = useAuthCall();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", p: 1, mx: 2 }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Paper
            elevation={4}
            sx={{
              p: 1,
              borderRadius: "25px",
              bgcolor: theme.palette.background.default,
              boxShadow: `4px 4px 15px ${theme.palette.secondary.main}`,
            }}
          >
            <img
              src={image}
              alt="main logo"
              style={{
                height: "40px",
                width: "200px",
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
          </Paper>
          <Typography
            variant="h4"
            align="center"
            sx={{
              mx: 3,
              fontFamily: theme.typography.fontFamily,
              textShadow: `1px 1px 3px ${theme.palette.secondary.main}`,
            }}
          >
            Every frame, a piece of your family.
          </Typography>
        </Box>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default PiximAppBar;
