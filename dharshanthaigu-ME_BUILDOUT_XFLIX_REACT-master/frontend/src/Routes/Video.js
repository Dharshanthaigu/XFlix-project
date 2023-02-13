import { useParams } from "react-router-dom";
import { Box, Stack, Container } from "@mui/material";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import { useReducer, useEffect } from "react";
import { BASE_URL } from "../config";
import axios from "axios";
import Loader from "../components/Loader";
import RelatedVideosGrid from "../components/RelatedVideosGrid";

const Video = () => {
  const initialState = {
    videos: [],
    currentVideo: {},
    isLoading: false,
    error: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "VIDEOS_REQUEST_START": {
        return {
          ...state,
          isLoading: true,
        };
      }
      case "VIDEOS_REQUEST_SUCCESS": {
        return {
          ...state,
          isLoading: false,
          videos: action.payload.videos,
          currentVideo: action.payload.currentVideo,
        };
      }
      case "VIDEOS_REQUEST_FAILURE": {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      }
      default: {
        throw new Error("Invalid Action type");
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { videoId } = useParams();

  useEffect(() => {
    (async () => {
      dispatch({ type: "VIDEOS_REQUEST_START" });
      try {
        const videosResponse = await axios.get(BASE_URL);
        const { videos } = videosResponse.data;
        const currentVideo = videos.find((video) => video._id === videoId);
        dispatch({
          type: "VIDEOS_REQUEST_SUCCESS",
          payload: { videos, currentVideo },
        });
      } catch (error) {
        dispatch({ type: "VIDEOS_REQUEST_FAULURE", payload: error.message });
      }
    })();
  }, [videoId]);

  return (
    <Box>
      <Loader isLoading={state.isLoading} />
      <Header notHomePage />
      <Stack alignItems="center" sx={{ backgroundColor: "#181818" }}>
        <Container maxWidth="lg" sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
          {!!Object.keys(state.currentVideo).length && (
            <VideoPlayer video={state.currentVideo} />
          )}
          <Box className="divider" mb={2} />
          <RelatedVideosGrid
            videos={state.videos}
            currentVideo={state.currentVideo}
          />
        </Container>
      </Stack>
    </Box>
  );
};

export default Video;
