import { Box, Stack, Button, Typography } from "@mui/material";
import logo from "./xflix-logo.png";
import Search from "../Search";
import { useTheme } from "@mui/material/styles";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import {Link} from 'react-router-dom';
import { useState } from "react";
import DialogBox from "../DialogBox";

const Header = ({ updateVideos, notHomePage }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <Stack
      alignItems={"center"}
      justifyContent="space-between"
      direction="row"
      sx={{ backgroundColor: "#202020" }}
      p={notHomePage ? 2 : 0}
    >
      <Link to="/">
        <Box>
          <img className="logo" src={logo} alt='Logo' />
        </Box>
      </Link>
      
      <Search updateVideos={updateVideos} />

      <Button
        variant="contained"
        color="primary"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          px: 1.5,
        }}
        onClick={handleDialogOpen}
        
      >
        <DriveFolderUploadIcon sx={{ fontSize: "2rem" }} />
        <Typography ml={0.8} sx={{ fontSize: "1.4rem", color: '#fff', display: {xs: 'none', md: 'block'}}}>
          Upload
        </Typography>
      </Button>

      <DialogBox open={isDialogOpen} onClose={handleDialogClose} />
    </Stack>
  );
};

export default Header;
