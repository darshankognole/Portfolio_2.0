
import React from 'react'
import './Home.css'
import {
  MapPin,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Download
} from 'lucide-react'

const Home = () => {
  return (
    <section className="home-page">

      <div className="hero-container">

        {/* Profile Section */}
        <div className="profile-wrapper">
          <div className="profile">
            <span>DK</span>
          </div>
          <div className="profile-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>
        </div>

        {/* Introduction */}
        <div className="hero-content">

          <div className="intro">
            <span className="intro-label">
              HELLO, WELCOME TO MY PORTFOLIO
            </span>

            <h1>
              Hi, I'm <span>Darshan Kognole</span>
            </h1>

            <h2>
              Full Stack Developer
            </h2>

            <p className="intro-description">
              I build scalable backend applications and intuitive
              frontend experiences. Passionate about Java, Spring Boot,
              React and creating solutions to real-world problems.
            </p>
          </div>

          {/* Developer Roles */}
          <div className="roles">
            <span>Full Stack Developer</span>
            <span>Java Developer</span>
            <span>React Developer</span>
          </div>

          {/* Information Cards */}
          <div className="info">

            <div className="info-card">
              <div className="info-heading">
                <MapPin size={19} />
                <h3>Location</h3>
              </div>
              <p>Pune, India</p>
            </div>

            <div className="info-card">
              <div className="info-heading">
                <Briefcase size={19} />
                <h3>Experience</h3>
              </div>
              <p>1+ Years Experience</p>
            </div>

            <div className="info-card">
              <div className="info-heading">
                <Mail size={19} />
                <h3>Email</h3>
              </div>
              <p>darshankognole001@gmail.com</p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="mailto:darshankognole001@gmail.com"
               className="secondary-btn">
              <Mail size={17} />
              Get In Touch
            </a>
          </div>

        </div>
      </div>

      {/* Social Connections */}
      <footer className="home-footer">
        <p>LET'S CONNECT</p>

        <div className="social-links">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:darshankognole001@gmail.com"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <span className="footer-caption">
          Building ideas into reality.
        </span>
      </footer>

    </section>
  )
}

export default Home
