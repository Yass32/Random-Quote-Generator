import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  
  const [color, setColor] = useState();
  const [contentOpacity, setContentOpacity] = useState(1);

  const getRandomColor = () => {
    //It creates a string hexNumbers containing all hexadecimal digits (0-F).
    let hexNumbers = "0123456789abcdef";
    //An empty string color is initialized to store the color code.
    let appColor = '#';
    //A loop iterates six times (since a hex code has six digits).
    for (let i = 0; i < 6; i++) {
      //generates a random integer between 0 and 15 and passed an index to pick a character from hexNumbers
      appColor += hexNumbers[Math.floor(Math.random() * 16)];
    }
    //After the loop, the complete hex color code (e.g., "#E1F2BE") is returned.
    setColor(appColor);
  }

  

  return (
    <div className="App" style={{backgroundColor: color, transition: 'background-color 0.5s ease' }}> 
      <Box color={color} getRandomColor={getRandomColor} contentOpacity={contentOpacity}  setContentOpacity={setContentOpacity} />
    </div>
  );
}

export default App;
