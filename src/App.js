import './App.css';
import Navbar from './Components/Navbar'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Count from './Components/Count';



function App() {
  let small = 0.75;
  return (
    <div className="App" style={{overflow: "hidden"}}>
    <Navbar/>
    <Box sx={{marginTop: {xs: '60px', sm: 'initial'}}}>
      <Typography color={'white'} sx={{fontSize: {xs: '1rem', sm: '2rem'}}}>
          ROAD TO PURAB MUBARAK
        </Typography>
        <Count/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{width: {xs: '90%', sm: '50%'}}}>
          <Typography color={'white'} sx={{fontSize: {xs: '0.75rem', sm: '1rem'}, fontFamily: 'Open Sans'}}>
            LET US ILLUMINATE OUR HOMES AND BUSINESSES,
            AS WE HONOR HIS TEACHINGS OF LOVE, COMPASSION, AND UNITY.
            TOGETHER, LET OUR COLLECTIVE LIGHTS SHINE BRIGHTLY,
            SPREADING THE MESSAGE OF PEACE AND HARMONY THROUGHOUT THE WORLD.
          </Typography>
        </Box>
        </div>
     
    </Box>

    </div>
  );
}

export default App;
