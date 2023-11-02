import "./contact.css"; // Importing external CSS file for styling

import React, { useState } from 'react'; // Importing the React library and 'useState' hook

import { BsFillSendFill } from "react-icons/bs"; // Importing a specific icon component
import profilePics from "../Images/steno.jpg"; // Importing an image

const Contact = () => {
  // Using the 'useState' hook to create a state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    //jobType: 'Full-Time',
    message: ''
  });

  // Function to handle input changes and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle the click event when user submits the form
  const handleSendClick = () => {
    // Encoding recipient email, subject, and body for 'mailto' link
    const recipient = encodeURIComponent('onuprinceley@gmail.com');
    const subject = encodeURIComponent('Portfolio Contact');
   

    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`);
    // Redirecting to user's default email client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  
    // Clearing input fields after sending
    setFormData({
      name: '',
      email: '',
     // jobType: 'Full-Time',
      message: ''
    });
  };

  return (
    // JSX code for the component
    <div className="container contact-section" id="contacts">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img src={profilePics} alt="contactPics"/> {/* Displaying profile picture */}
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5 className="contact">Contact Me</h5> {/* Displaying a heading */}
            </div>

            <div className="contact-info">
              <p className="phone">Phone: +2348142534211</p> {/* Displaying phone number */}
              <p className="email">Email: onuprinceley@gmail.com</p> {/* Displaying email address */}
            </div>

            <form>
              <div className="contact-form">
                <label className="form-label" >Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                />
              </div>
              <div className="contact-form">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                />
              </div>
              {/* 
              <div className="contact-form">
                <label className="form-label">Job Types</label>
                <select
                  className="custom-select-tags"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleInputChange}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Remote">Remote</option>
                </select>
              </div> */}
              <div className="contact-form">
                <label className="form-label">Message</label>
                <textarea
                  rows='4'
                  type="text"
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                />
              </div>
              
              <div className="button-submit">
                <button
                  type="button"
                  onClick={handleSendClick}
                  style={{ border: "none" }} // Inline style to remove border
                  className="send"
                >
                  Send <BsFillSendFill size={15} />
                </button>
              </div>
            </form>

            {/* Note to inform user about the email sending process */}
            <p className="note">
              Note: Clicking "Send" will open your email client with 
              a pre-filled message. Please review and send the email 
              from your own account. If you encounter any issues,
              you can manually email onuprinceley@gmail.com. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact; // Exporting the Contact component for use in other files
