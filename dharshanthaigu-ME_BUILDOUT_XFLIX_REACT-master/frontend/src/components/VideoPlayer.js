import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { BASE_URL } from "../config";
import axios from "axios";
import { useEffect } from "react";

const VideoPlayer = ({ video }) => {
  const {
    videoLink,
    title,
    contentRating,
    viewCount,
    releaseDate,
    votes: { upVotes, downVotes },
  } = video;

  useEffect(() => {
    (async() => {
      const URL =  `${BASE_URL}/${video._id}/views`;
      axios.patch(URL);
    })();
  }, [])

  const handleOnVote = async() => {
    const URL = `${BASE_URL}/${video._id}/votes`
    const voteResponse = await axios.patch(URL);
    console.log(voteResponse, URL);
  }

  return (
    <Card sx={{ width: "100%", background: "transparent" }}>
      <CardMedia
        component="iframe"
        src={`https://${videoLink}?autoplay=1&mute=1`}
        sx={{
          border: 0,
          width: "100%",
          height: { xs: "20rem", sm: "30rem", md: "40rem", lg: "50rem" },
        }}
      ></CardMedia>

      <CardContent>
        <Typography
          component="h2"
          mb={1}
          sx={{ fontSize: "2.4rem", fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">{viewCount} views</Typography>
            <div className="dot"></div>
            <Typography variant="body1">{releaseDate}</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button
              className="vote-btn"
              color="lightGray"
              variant="contained"
              startIcon={<ThumbUpAltIcon sx={{ color: "#797979" }} />}
              onClick={handleOnVote}
            >
              {upVotes}
            </Button>
            <Button
              className="vote-btn"
              color="lightGray"
              variant="contained"
              startIcon={<ThumbDownAltIcon sx={{ color: "#797979" }} />}
              onClick={handleOnVote}
            >
              {downVotes}
            </Button>
          </Stack>
        </Stack>
        <Typography variant="body2">{contentRating} rating</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
