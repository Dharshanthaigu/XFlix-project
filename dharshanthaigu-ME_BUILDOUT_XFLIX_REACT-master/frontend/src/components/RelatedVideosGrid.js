import VideoCard from '../components/VideoCard';
import {Grid} from '@mui/material';

const RelatedVideoGrid = ({videos, currentVideo}) => {
    const relatedVideos = videos.filter(video => video._id !== currentVideo._id);

    const relatedVideoCards = relatedVideos.map((video) => (
        <Grid key={video._id} item xs={12} sm={6} md={4} lg={3}>
            <VideoCard video={video} />
        </Grid>
    ))

    return (
        <Grid container spacing={2} >
            {relatedVideoCards}
        </Grid>
    )
}

export default RelatedVideoGrid;