import React from 'react';

// Define a functional React component called 'Footer'
const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Define a style object for mobile devices
  const mobileStyle = {
    marginTop: '380px', // Adjust the margin-top for padding
  };

  // Return the footer component
  return (
    <footer className="bg-dark text-light text-center py-3" 
    style={window.innerWidth <= 768 ? mobileStyle : null}>
      <div className="container">
        <p>&copy; Princeley  {currentYear}</p> {/* Display copyright symbol and the current year */}
      </div>
    </footer>
  );
};

// Export the Footer component for use in other parts of the application
export default Footer;
