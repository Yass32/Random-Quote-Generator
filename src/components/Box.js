import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';
import Button from './Button';

function Box({color, getRandomColor, contentOpacity, setContentOpacity}) {
    // Data is an array of objects with text and author properties
    const [data, setData] = useState([]);
    const [quote, setQuote] = useState({text: 'Tough times make strong men, strong men make easy times, easy times make weak men, weak men make tough times.', author: 'Yassir Zoaka'});
    


    //Fetch quote from api
    const fetchData = async () => {
        try {
          const response = await axios.get('https://type.fit/api/quotes');
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
    }

    // Fetch new quote
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]); 
    }

    const handleClick = async () => {
    // Fade out the quote
    setContentOpacity(0.2);
    setTimeout(() => {
      getRandomQuote(); // Get new Quote
      getRandomColor(); // Change Color
      // Fade in the quote
      setContentOpacity(1);
    }, 500); // Matches the transition time
    }
    
    // This useEffect hook will run once when the component mounts
    useEffect(() => {
        fetchData(); // Fetch initial quote
        getRandomColor(); // Fetch initial color
    }, []);

    return (
        <div className='Box'>
        <div style={{ opacity: contentOpacity, transition: 'opacity 1s ease' }}>
            <Quote color={color} quote={quote} />
            <Button color={color} onClick={handleClick} />
        </div>
        </div>
    )
}

export default Box;