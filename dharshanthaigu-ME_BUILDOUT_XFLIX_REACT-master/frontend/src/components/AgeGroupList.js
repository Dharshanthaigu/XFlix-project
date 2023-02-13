import { Box, Stack, Button } from "@mui/material";
import {useState, useEffect, useRef} from 'react';
import { BASE_URL } from "../config";

const AgeGroupList = ({updateVideos}) => {
  const [selectedAgeGroup, setAgeGroup] = useState('All');
  const isAgeGroupChanged = useRef(false);

  const ageGroups = [
    {value: 'All', text: "Any age group"},
    {value: '7+', text: '7+'},
    {value: '12+', text: '12+'},
    {value: '16+', text: '16+'},
    {value: '18+', text: '18+'}, 
  ]

  const handleChangeAgeGroup = (event) => {
    const targetAgeGroup = event.target.value;

    isAgeGroupChanged.current = true;
    
    if(selectedAgeGroup === targetAgeGroup) {
      setAgeGroup('All');
      return;
    }
    
    setAgeGroup(targetAgeGroup);
  } 

  useEffect(() => {
    if(!isAgeGroupChanged.current) return;

    const URL = `${BASE_URL}?contentRating=${encodeURIComponent(selectedAgeGroup)}`;
    updateVideos(URL);
  }, [selectedAgeGroup])

  const ageGroupButtons = ageGroups.map((ageGroup, index) => (
    <Button
      color="secondary"
      variant={selectedAgeGroup === ageGroup.value ? 'contained' : 'text'}
      key={index}
      onClick={handleChangeAgeGroup}
      value={ageGroup.value}
      sx={{
        textTransform: "capitalize",
        flexShrink: 0
      }}
    >
      {ageGroup.text}
    </Button>
  ));
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack className='filter-list' direction="row" spacing={3}>
        {ageGroupButtons}
      </Stack>
    </Box>
  );
};

export default AgeGroupList;
