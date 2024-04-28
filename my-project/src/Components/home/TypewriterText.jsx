import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval (in milliseconds) to control the speed of typing

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return <h1 >{displayText}</h1>;
};

export default TypewriterText;
