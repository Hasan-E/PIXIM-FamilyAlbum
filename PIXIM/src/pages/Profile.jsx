import React, { useEffect, useState } from "react";
import usePiximCall from "../hook/usePiximCall";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import useImageUpload from "../hook/useImageUpload";
import useAuthCall from "../hook/useAuthCall";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const Profile = () => {
  const { updateImage } = useAuthCall();
  const [showMembers, setShowMembers] = useState(false);
  const { userId, image } = useSelector((state) => state.auth);
  const { members } = useSelector((state) => state.pixim);
  const { fileInputRef, preview, handleImageSelect } = useImageUpload(
    (imageUrl) => updateImage(imageUrl, userId)
  );
  const { getData, getProfile } = usePiximCall();
  useEffect(() => {
    getProfile(`${userId}`);
  }, []);
  useEffect(() => {
    getData("users");
  }, []);
  const handleShowMembers = () => {
    setShowMembers(!showMembers);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          position: "relative",
          width: 180,
          height: 180,
          mx: "auto",
          mb: 2,
        }}
      >
        <Avatar
          src={preview || image || "/addprofile.png"}
          sx={{
            width: 180,
            height: 180,
          }}
        />
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
          onClick={() => fileInputRef.current.click()}
        >
          <EditOutlinedIcon fontSize="small" />
        </IconButton>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          style={{ display: "none" }}
        />
      </Box>
      <Box>
        <Typography>USER NAME:</Typography>
        <Typography>NAME:</Typography>
        <Typography>E MAİL:</Typography>
      </Box>
      <Button
        onClick={handleShowMembers}
        variant="contained"
        sx={{ width: "250px", alignSelf: "center", mt: 4 }}
      >
        {showMembers ? " Hide Family Members" : "Show Family Members"}
      </Button>
      {/* <Grid>
        {showMembers &&
          Array.isArray(members) &&
          members.map((member) => (
            <Grid key={member._id}>
              <Member username={member.name} />
            </Grid>
          ))}
      </Grid> */}
    </Container>
  );
};

export default Profile;
