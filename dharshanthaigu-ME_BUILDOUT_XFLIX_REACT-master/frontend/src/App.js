import "./App.css";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Routes/Root";
import Video from "./Routes/Video";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import ScrollToTop from "./components/ScrollToTop";
import { SnackbarProvider } from "notistack";

function App() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateVideos = async (URL) => {
    setIsLoading(true);
    try {
      const videosResponse = await axios.get(URL);
      const { videos } = videosResponse.data;
      setVideos(videos);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <div className="App">
            <ScrollToTop />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Root
                    videos={videos}
                    updateVideos={updateVideos}
                    isLoading={isLoading}
                  />
                }
              />
              <Route exact path="/video/:videoId" element={<Video />} />
            </Routes>
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
