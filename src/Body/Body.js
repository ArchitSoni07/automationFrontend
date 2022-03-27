import React from 'react'
import './Body.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Body() {
    const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };
    var usersNumber = 0;
    var trendingTopic = "";
  return (
    <div className='main'>
        <h1 id='dashboard'>Dashboard</h1>
        <h3 id='current'>Currently Active users : {usersNumber}</h3> 
        <div className='trending'>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Time"
          onChange={handleChange}
          >
          <MenuItem value={10}>1hr</MenuItem>
          <MenuItem value={20}>24hr</MenuItem>
          <MenuItem value={30}>1 month</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <ul id='list'>
        <li><h3>Trending Topics : {trendingTopic}</h3></li>
        
    <li>
    <h3>Popular Data Stacks : </h3>    
    </li>
    <li>
    <h3>Popular Data Companies : </h3>
    </li>
    <li>
    <h3>Popular Data Category : </h3>
    </li>
    </ul>
    </div>
    </div>
  )
}

export default Body
