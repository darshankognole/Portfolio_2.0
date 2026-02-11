import React from 'react'
import "./Home.css"
import { MapPin, Briefcase, Phone, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
//   const navContent = [Home, Projects, Skills, About, Contact];

  return (
    <section className='home'>
      <div className="central">
        <div className='profile'></div>
        <div className='data'>
          <div className='intro'>
            <h2>Hi, i'm Darshan Kognole</h2>
            <p>Fullstack Developer | Tech Explorer</p>
          </div>
          <div className='roles'>
            <p>Fullstack Developer</p>
            <p>Java Developer</p>
            <p>React Developer</p>
          </div>
          <div className='info'>
            <div className="location">
              <div>
                <MapPin size={18}/>
                <p>Location</p>
              </div>
              <span>Pune, India</span>
            </div>
            <div className="experience">
              <div>
                <Briefcase size={18} />
                <p>Experience</p>
              </div>
              <span>1+ Years Experience</span>
            </div>
            <div className="contact">
              <div>
                <Mail size={18}/>
                <p>Contact</p>
              </div>
              <span>darshankognole001gmail.com</span>
            </div>
          </div>  
        </div>
      </div>
      <footer>
        <h3>Connect</h3>
        <div className="links">
          <div className="github">
             <Github />
          </div>
          <div className="linkedIn">
            <Linkedin />
          </div>
          <div className="mail">
            <Mail />
          </div>
        </div>
      </footer>
    </section>
    
  )
}

export default Home