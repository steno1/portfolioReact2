// Importing the CSS files for styling

import "./testimonial.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import Slider from "react-slick";
import { testimonialData } from "../../data";

// Defining a functional component named Testimonial
const Testimonial = () => {

  // Configuration settings for the Slider component
  var settings = {
    dots: true,  // Show navigation dots
    infinite: true, // Allow infinite loop of slides
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between autoplay slides (in milliseconds)
    cssEase: "linear", // Type of CSS easing to use for slide transitions
    speed: 500, // Transition speed (in milliseconds)

    pauseOnHover: true, // Pause autoplay on hover
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 2, // Number of slides to scroll at a time
    initialSlide: 0, // Index of the initial slide

    // Responsive settings for different screen sizes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Return JSX (React elements) representing the component's UI
  return (
    <div className="container testimonial-section" id="Testimonials">

      {/* Section title */}
      <div className="section-title">
        <h2 className="section-title">Testimonials</h2>
      </div>

      {/* Testimonial slider */}
      <div className="testimonial-slider">

        {/* Slider component with settings */}
        <Slider {...settings}>
          {testimonialData.map((item, index)=>(
            <div className="content-slider-main" key={index}>
              <div className="content-slider" key={index}>

                {/* Testimonial image */}
                <img
                  src={item.img}
                  alt="testimonial pics"
                  className="center-img"
                  style={{
                    height:"80px",
                    width:"80px",
                    margin:"0 auto",
                    display:"block",
                    objectFit:"cover",
                    marginTop:"10px",
                    borderRadius:"50%",
                    marginBottom:"10px",
                    alignItems:"center",
                    border:"2px solid yellow"
                  }}
                />

                {/* Testimonial description, name, and position */}
    
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

// Exporting the Testimonial component for use in other files
export default Testimonial
