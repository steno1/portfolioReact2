import "./Home.css"

import { Link } from 'react-scroll';
import Time from "../Time/Time";
import Typewriter from 'typewriter-effect';
import myCv from "./Pdf newest.pdf"

// Define a functional component named `Home`.
const Home = () => {
  
  // The component returns JSX.
  return (
    <div className="container-fluid home" id="home">
        <div className="container home-content">
          <div className="time"><Time /></div>
          
          {/* Render an 'h1' element with the text 'Hi, I'm a'. */}
          <h1>Hi, I'm a </h1>
          
          {/* Render an 'h2' element with a 'Typewriter' effect. */}
          <h2>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Software Developer',
                  'MERN Stack Developer',
                  'React Developer',
                  'Web Developer',
                  'Javascript Developer'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* Render a div with class 'button-for-action'. */}
          <div className="button-for-action">

          <Link to="contacts" spy={true} smooth={true}>
              
            {/* Render a button with class 'btn' and text 'Hire me'. */}
            <button className="btn">Hire me</button> 
              </Link>



            {/* Render a button with class 'btn2' and a link to download the resume. */}
            <button className="btn2">
              <a href={myCv} download="Onu Princeley Toochukwu Resume">Get Resume</a>
            </button>
          </div>
        </div>
      </div>
  )
}

// Export the `Home` component as the default export of this module.
export default Home
