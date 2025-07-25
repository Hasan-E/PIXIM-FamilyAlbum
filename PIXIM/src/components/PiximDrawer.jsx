import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const links = [
  {
    title: "Home",
    url: "/pixim",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Add New Moment",
    url: "/pixim/new_moment",
    icon: <AddPhotoAlternateOutlinedIcon />,
  },
  {
    title: "My Moments",
    url: "/pixim/my_moments",
    icon: <ImageSearchOutlinedIcon />,
  },
  {
    title: "Albums",
    url: "/pixim/albums",
    icon: <FilterOutlinedIcon />,
  },
  {
    title: "About",
    url: "/pixim/about",
    icon: <InfoOutlinedIcon />,
  },
];
const PiximDrawer = ({ open, setOpen }) => {
  const { image } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <DrawerHeader>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h6"
              color={theme.palette.primary.light}
              sx={{ textShadow: `2px 2px 4px ${theme.palette.secondary.main}` }}
            >
              PI
            </Typography>
            <Avatar
              src="/Logo.png"
              sx={{
                m: "1",
                width: 50,
                height: 50,
                cursor: "pointer",
                mb: 2,
                mt: 2,
              }}
            />
            <Typography
              variant="h3"
              component="h6"
              color={theme.palette.primary.light}
              sx={{ textShadow: `2px 2px 4px ${theme.palette.secondary.main}` }}
            >
              IM
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Avatar
            src={image || "/addprofile.png"}
            sx={{
              width: open ? 100 : 40,
              height: open ? 100 : 40,
              cursor: "pointer",
              transition: "all 0.3s ease",
              mb: 2,
            }}
            onClick={() => navigate("/pixim/profile")}
          />
        </Box>

        <List sx={{ mt: 2 }}>
          {links.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.url)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" },
                ]}
              >
                <ListItemIcon
                  sx={[
                    { minWidth: 0, justifyContent: "center" },
                    open ? { mr: 3 } : { mr: "auto" },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default PiximDrawer;
