import {
  Box,
  Stack,
  Button,
  MenuItem,
  TextField,
  Select,
  FormControl,
  InputAdornment,
} from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const GenreList = ({ updateVideos }) => {
  const [sortBy, setSortBy] = useState("releaseDate");
  const [selectedGenres, setSelectedGenres] = useState(["All"]);
  const isGenresChanged = useRef(false);
  const isSortByChanged = useRef(false);

  const genres = [
    { value: "All", text: "All Genre" },
    { value: "Education", text: "Education" },
    { value: "Sports", text: "Sports" },
    { value: "Comedy", text: "Comedy" },
    { value: "Lifestyle", text: "Lifestyle" },
  ];

  const selectItems = [
    { value: "releaseDate", text: "Release Date" },
    { value: "viewCount", text: "View Count" },
  ];

  useEffect(() => {
    if (!isSortByChanged.current) return;

    const URL = `${BASE_URL}?sortBy=${sortBy}`;
    updateVideos(URL);
  }, [sortBy]);

  useEffect(() => {
    if (!isGenresChanged.current) return;
    const genres = selectedGenres.join(",");
    const URL = `${BASE_URL}?genres=${genres}`;
    updateVideos(URL);
  }, [selectedGenres]);

  const handleSortByChange = (event) => {
    isSortByChanged.current = true;
    setSortBy(event.target.value);
  };

  const handleSelectGenre = (event) => {
    const targetGenre = event.target.value;
    isGenresChanged.current = true;
    let updatedGenres;
    if (selectedGenres.includes(targetGenre)) {
      updatedGenres = selectedGenres.filter((genre) => genre !== targetGenre);
    } else {
      updatedGenres = [...selectedGenres, targetGenre].filter(
        (genre) => genre !== "All"
      );
    }

    if (!updatedGenres.length || targetGenre === "All") {
      updatedGenres = ["All"];
    }

    setSelectedGenres(updatedGenres);
  };

  const genresButtons = genres.map((genre, index) => (
    <Button
      color="secondary"
      variant={selectedGenres.includes(genre.value) ? "contained" : "text"}
      key={index}
      value={genre.value}
      onClick={handleSelectGenre}
      sx={{
        textTransform: "capitalize",
        flexShrink: 0,
      }}
    >
      {genre.text}
    </Button>
  ));

  const menuItems = selectItems.map((selectItem, index) => (
    <MenuItem key={index} sx={{ fontSize: "1.4rem" }} value={selectItem.value}>
      {selectItem.text}
    </MenuItem>
  ));

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack className="filter-list" direction="row" spacing={3} mr={5}>
        {genresButtons}
      </Stack>

      <FormControl size="small">
        <Select
          color="secondary"
          size="small"
          sx={{ fontSize: "1.4rem"}}
          value={sortBy}
          variant="outlined"
          onChange={handleSortByChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
};

export default GenreList;
