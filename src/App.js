import './App.css';
import Navbar from './Components/Navbar'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Count from './Components/Count';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Box >
      <Typography color={'white'} variant="h5">
          ROAD TO PURAB MUBARAK
        </Typography>
        <Count/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{width: '50%'}}>
          <Typography color={'white'}>
            LET US ILLUMINATE OUR HOMES AND BUSINESSES, IGNITING THE BRILLIANCE WITHIN,
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
