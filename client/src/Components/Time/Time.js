// Import necessary modules from React library

import React, { useEffect, useState } from 'react';

// Define a functional component called "Time"
function Time() {
  // Define a piece of state called "currentTime" and a function "setCurrentTime" to update it
  const [currentTime, setCurrentTime] = useState(new Date());

  // Set up an effect that runs on component mount
  useEffect(() => {
    // Create an interval to update "currentTime" every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures this effect only runs once on mount

  // Define formatting options for the date and time
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };

  // Use Intl.DateTimeFormat to format the current time using specified options
  const formattedDate = new Intl.DateTimeFormat('en-US', options)
    .format(currentTime);

  // Return JSX representing the component
  return (
    <div style={{ fontSize: '0.9rem', textAlign: 'center', marginTop: '10px' }}>
      {/* Display the formatted date and time */}
      {formattedDate}
    </div>
  );
}

// Export the Time component as the default export of this file
export default Time;
