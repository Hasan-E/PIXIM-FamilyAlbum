import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import usePiximCall from "../../hook/usePiximCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import loadingImage from "../../assets/loading.png";

const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MomentDetail({ open, handleClose, selectedMomentId }) {
  const { getMoment, toggleLike } = usePiximCall();
  const { selectedMoment } = useSelector((state) => state.pixim);
  const { loading } = useSelector((state) => state.pixim);
  const { userId } = useSelector((state) => state.auth);
  const isLiked = selectedMoment.likes?.includes(userId);

  const handleLikeToggle = () => {
    toggleLike(selectedMoment._id, userId);
  };
  useEffect(() => {
    if (open && selectedMomentId && selectedMomentId !== selectedMoment?._id) {
      getMoment(selectedMomentId);
    }
  }, [open, selectedMomentId]);

  if (loading) {
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} display="flex" justifyContent="center">
          <img src={loadingImage} alt="loading" style={{ width: "100px" }} />
        </Box>
      </Modal>
    );
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              component="img"
              src={selectedMoment.image}
              sx={{
                m: "auto",
                width: 500,
                height: 500,
                mb: 2,
                mx: 2,
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <IconButton aria-label="like" onClick={handleLikeToggle}>
                <FavoriteIcon sx={{ color: isLiked ? "red" : "grey" }} />
                <Typography>{selectedMoment.likes?.countOfLike}</Typography>
              </IconButton>
              <IconButton aria-label="visitors">
                <VisibilityIcon />
                <Typography>{selectedMoment.countOfVisitors}</Typography>
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon />
                <Typography>{selectedMoment.comments?.length ?? 0}</Typography>
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Typography fontSize={"2rem"}>{selectedMoment.title}</Typography>
            <Typography sx={{ maxHeight: "35%", overflow: "auto" }}>
              {selectedMoment.content}
            </Typography>
            <Typography fontSize={"2rem"}>Comments</Typography>
            <Box sx={{ maxHeight: "35%", overflow: "auto" }}>
              {selectedMoment.comments &&
                selectedMoment.comments.map((comment) => (
                  <Box key={comment._id}>
                    <Typography fontSize={"1.5rem"}>
                      {comment.userId.username}
                    </Typography>
                    <Typography>{comment.comment}</Typography>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
