import React, { useEffect } from "react";
import usePiximCall from "../hook/usePiximCall";
import { useSelector } from "react-redux";
import { Avatar, Box, Container, IconButton } from "@mui/material";
import useImageUpload from "../hook/useImageUpload";
import useAuthCall from "../hook/useAuthCall";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const Profile = () => {
  const { getData } = usePiximCall();
  const { updateImage } = useAuthCall();
  const { userId, image } = useSelector((state) => state.auth);
  const { fileInputRef, preview, handleImageSelect } = useImageUpload(
    (imageUrl) => updateImage(imageUrl, userId)
  );
  useEffect(() => {
    getData(`users/${userId}`);
  }, []);
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          width: 100,
          height: 100,
          mx: "auto",
          mb: 2,
        }}
      >
        <Avatar
          src={preview || image || "/addprofile.png"}
          sx={{
            width: 100,
            height: 100,
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
    </Container>
  );
};

export default Profile;
