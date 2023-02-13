import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import {useState, useRef} from 'react';
import { BASE_URL } from "../config";

const Search = ({updateVideos}) => {
  const theme = useTheme();

  const [searchText, setSearchText] = useState('');
  const timerId = useRef();

  const handleSearch = (event) => {
    event.preventDefault(); 
  }

  const handleChangeSearchText = (event) => {
    setSearchText(event.target.value);
    debounceSearch(event.target.value, 400);
  }

  const debounceSearch = (searchText, ms) => {
    if(timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      const URL = `${BASE_URL}?title=${searchText}`;
      updateVideos(URL);
    }, ms)
  }

  return (
    <Box
      component="form"
      className='search-box'
      onSubmit={handleSearch}
      sx={{
        display: "flex",
        borderRadius: 0.5,
        width: '40%'
      }}
    >
      <InputBase
        placeholder="Search..."
        value={searchText}
        
        onChange={handleChangeSearchText}
        sx={{ borderRadius: 0, ml: 1, flex: 8}}
        inputProps={{
          style: {
            padding: 0,
            fontSize: "1.4rem",
          },
        }}
      />
      <IconButton px={4} sx={{ backgroundColor: "#444", borderRadius: 0,  flex: 1}}>
        <SearchIcon sx={{ color: theme.palette.secondary.main, fontSize: '1.8rem' }} />
      </IconButton>
    </Box>
  );
};

export default Search;
