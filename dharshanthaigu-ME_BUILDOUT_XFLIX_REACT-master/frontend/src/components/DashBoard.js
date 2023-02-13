import { Box, Stack, Grid } from "@mui/material";
import { BASE_URL } from "../config";
import { useEffect } from "react";
import VideoCard from "./VideoCard";


const DashBoard = ({ videos, updateVideos }) => {
  useEffect(() => {
    if(!updateVideos) return;
    
    updateVideos(BASE_URL);
  }, []);

  const videoCards =
    !!videos.length &&
    videos.map((video) => (
      <Grid item key={video._id} xs={12} sm={6} md={4} lg={3}>
        <VideoCard video={video} />
      </Grid>
    ));

  return (
    <Box p={2} sx={{ backgroundColor: "#181818" }}>
      <Grid container spacing={2} alignItems="stretch">
        {videoCards}
      </Grid>
    </Box>
  );
};

export default DashBoard;
