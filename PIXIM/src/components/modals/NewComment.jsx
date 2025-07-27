import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import usePiximCall from "../../hook/usePiximCall";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewComment({open,handleClose,momentId}) {
  const {postComment,getMoment} = usePiximCall()
  const [commentText,setCommentText] = useState("")
  const handleChange = (e) => {
    setCommentText(e.target.value)
  };
  const handleSubmit = async (e) => {
e.preventDefault();
if(commentText.trim() && momentId){
  await postComment(momentId,commentText)
  setCommentText("")
  handleClose()
  getMoment(momentId)
}
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form" onSubmit={handleSubmit} sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"1rem"}}>
            <TextField
              label="ADD YOUR COMMENT"
              name="comment"
              type="text"
              variant="outlined"
              value={commentText}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />

            <Button type="submit" variant="contained">ADD COMMENT</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
