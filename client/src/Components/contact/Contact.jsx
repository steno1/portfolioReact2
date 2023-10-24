import "./contact.css"

import { BsFillSendFill } from "react-icons/bs";
import React from 'react'
import profilePics from "../Images/princeley.jpg"

const Contact = () => {
  return (
    <div className="container contact-section" id="contacts">
      <div className="row">
<div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
<div className="contact-form-image">
<img src={profilePics} alt="contactPics"/></div>

</div>
<div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
<div className="contact-form-design">
<div className="text-center">
<h5 className="contact">Contact Me</h5>
</div>
<form>
    <div className="contact-form">
<label className="form-label">Name</label>
<input type="text" className="form-control"/>
    </div>
    <div className="contact-form">
<label className="form-label">Email</label>
<input type="email" className="form-control"/>
    </div>
    <div className="contact-form">
<label className="form-label">Job Types</label>
<select className="custom-select-tags">
<option>
  Full-Time
</option>
<option>
  Part-Time
</option>
<option>
Contract
</option>
<option>
Remote 
</option>
</select>
    </div>

    <div className="contact-form">
<label className="form-label">Message</label>
<textarea rows='4' type="text" className="form-control"/>
    </div>


<div className="button-submit">
<p className="send">Send<BsFillSendFill size={15}/></p>
</div>
</form>
</div>
</div>
      </div>
    </div>
  )
}

export default Contact
