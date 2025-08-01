import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import usePiximCall from "../../hook/usePiximCall";
import { useSelector } from "react-redux";
import loadingImage from "../../assets/loading.png";
import { useOutletContext } from "react-router-dom";

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

export default function MomentDetail({ open, handleClose, moment, likes }) {
  const { postLike } = usePiximCall();
  const { handleCommentOpen } = useOutletContext();
  const { loading } = useSelector((state) => state.pixim);
  if (loading || !moment) {
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
          <Box sx={{ display: "flex", flexDirection: "column",width:"55%",height:"80vh" }}>
            <Box
              component="img"
              src={moment.image}
              sx={{
                m: "auto",
                width: "95%",
                height: "100%",
                my: 2,
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
              <IconButton
                aria-label="like"
                onClick={() => postLike(moment._id)}
              >
                <FavoriteIcon
                  sx={{ color: likes?.didUserLike ? "red" : "grey" }}
                />
                <Typography>{likes?.count ?? 0}</Typography>
              </IconButton>
              <IconButton aria-label="visitors">
                <VisibilityIcon />
                <Typography>{moment.countOfVisitors}</Typography>
              </IconButton>
              <IconButton
                aria-label="comment"
                onClick={() => handleCommentOpen(moment._id)}
              >
                <CommentIcon />
                <Typography>{moment.comments?.length ?? 0}</Typography>
              </IconButton>
            </Box>
          </Box>
          <Box sx={{width:"40%"}}>
            <Typography fontSize={"2rem"}>{moment.title}</Typography>
            <Typography sx={{ maxHeight: "35%", overflow: "auto" }}>
              {moment.content}
            </Typography>
            <Typography fontSize={"2rem"} mb={1}>Comments</Typography>
            <Box sx={{ maxHeight: "35%", overflow: "auto",pr:1 }}>
              {moment.comments.map((comment) => (
                <Box key={comment._id} sx={{
                 display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                      mb: 2,    
                      p: 2,   
                      border: "1px solid #e0e0e0", 
                      borderRadius: "8px", 
                      backgroundColor: "#f9f9f9", 
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.05)", 
                }}>
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
