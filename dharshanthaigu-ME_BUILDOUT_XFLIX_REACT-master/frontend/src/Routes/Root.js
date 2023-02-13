import axios from "axios";
import { useState } from "react";
import DashBoard from "../components/DashBoard";
import Header from "../components/Header";
import GenreList from "../components/GenreList";
import AgeGroupList from "../components/AgeGroupList";
import Loader from "../components/Loader";
import { Box, Stack } from "@mui/material";

const Root = ({videos, updateVideos, isLoading}) => {
  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Stack p={2} spacing={2} sx={{ backgroundColor: "#202020" }}>
        <Header updateVideos={updateVideos} />
        <GenreList updateVideos={updateVideos} />
        <AgeGroupList updateVideos={updateVideos} />
      </Stack>
      <DashBoard videos={videos} updateVideos={updateVideos} />
    </>
  );
};

export default Root;
