import { LinearProgress, Box } from "@mui/material";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <Box sx={{ position: "absolute", width: "100%" }}>
        <LinearProgress color="primary" sx={{ height: "2px" }} />
      </Box>
    )
  );
};

export default Loader;
