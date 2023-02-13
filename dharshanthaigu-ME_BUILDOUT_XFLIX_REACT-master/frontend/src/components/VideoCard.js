import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";


const VideoCard = (props) => {

  const { previewImage, title, releaseDate } = props.video;

  return (
    <Link to={`/video/${props.video._id}`}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={previewImage}
            height={150}
            alt={title}
          />

          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h5" component="h2" mb={1}>
              {title}
            </Typography>
            <Typography variant="h6" component="p" sx={{ color: "#999" }}>
              {releaseDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default VideoCard;
