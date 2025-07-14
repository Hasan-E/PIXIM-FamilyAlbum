import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button } from "@mui/material";

const MomentCard = ({
  title,
  createdAt,
  image,
  content,
  countOfVisitors,
  likes,
  comments,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
          <IconButton aria-label="like">
            <FavoriteIcon />
            <Typography>{likes.length}</Typography>
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
            <Typography>{comments.length}</Typography>
          </IconButton>
          <IconButton aria-label="visitors">
            <VisibilityIcon />
            <Typography>{countOfVisitors}</Typography>
          </IconButton>
        </Box>
        <Box>
          <Button variant="contained">Go To Moment</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default MomentCard;
