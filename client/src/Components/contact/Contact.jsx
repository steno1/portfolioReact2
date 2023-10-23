import "./contact.css"

import { BsFillSendFill } from "react-icons/bs";
import React from 'react'

const Contact = () => {
  return (
    <div className="container contact-section">
      <div className="row">
<div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
<div className="contact-form-image">
<img src="data:image/jpeg;base64,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" alt="myPicture"/></div>

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
