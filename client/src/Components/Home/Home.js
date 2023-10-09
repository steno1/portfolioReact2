import "./Home.css"

import Time from "../Time/Time";
import Typewriter from 'typewriter-effect';
import myCv from "./Pdf newest.pdf"

const Home = () => {
  return (
    <div className="container-fluid home">
        <div className="container home-content">
          <div className="time"><Time /></div>
          <h1>Hi, I'm a </h1>
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
          <div className="button-for-action">
          <button className="btn">Hire me</button>
          <button className="btn2"><a href={myCv}
           download="Onu Princeley Toochukwu Resume">Get Resume</a></button>
          </div>
    
        </div>
      </div>
    
  )
}

export default Home
