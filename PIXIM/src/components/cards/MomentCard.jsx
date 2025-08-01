import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button } from "@mui/material";
import usePiximCall from "../../hook/usePiximCall";
import { useOutletContext } from "react-router-dom";

const MomentCard = ({
  _id,
  title,
  createdAt,
  image,
  content,
  countOfVisitors,
  handleOpen,
  likes,
  comments,
}) => {
  const { postLike } = usePiximCall();
  const { handleCommentOpen } = useOutletContext();

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader
        title={title}
        subheader={new Date(createdAt).toLocaleString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      />
      <CardMedia component="img" height="350" image={image} alt={title} />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <IconButton aria-label="like" onClick={() => postLike(_id)}>
            <FavoriteIcon sx={{ color: likes?.didUserLike ? "red" : "grey" }} />
            <Typography>{likes?.count ?? 0}</Typography>
          </IconButton>
          <IconButton
            aria-label="comment"
            onClick={() => handleCommentOpen(_id)}
          >
            <CommentIcon />
            <Typography>{comments?.length ?? 0}</Typography>
          </IconButton>
          <IconButton aria-label="visitors">
            <VisibilityIcon />
            <Typography>{countOfVisitors}</Typography>
          </IconButton>
        </Box>
        <Box>
          <Button onClick={() => handleOpen(_id)} variant="contained">
            Go To Moment
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default MomentCard;
