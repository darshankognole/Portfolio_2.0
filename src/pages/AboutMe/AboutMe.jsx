
import React from 'react'
import EducationCard from '../../components/EducationCard'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className="about-page">

      <div className="about-container">

        {/* About Heading */}
        <div className="about-heading">
          <span>GET TO KNOW ME</span>

          <h1>
            About <span>Me</span>
          </h1>

          <div className="heading-line"></div>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="about-text">

            <p>
              I'm <strong>Darshan Kognole</strong>, a Computer Science
              Engineering graduate (2023) with hands-on experience in
              Java Full Stack Development.
            </p>

            <p>
              I build scalable backend systems using Java, Spring Boot,
              REST APIs, Hibernate, and MySQL, and develop modern,
              responsive user interfaces using React, HTML, CSS, and
              JavaScript.
            </p>

            <p>
              I have practical experience working on end-to-end
              application development, including API integration,
              state management, authentication flows, and database
              design. I focus on writing clean, maintainable code
              and structuring applications in a way that supports
              scalability and long-term maintainability.
            </p>

            <p>
              Currently, I'm strengthening my React expertise, with
              a strong focus on hooks, routing, state management,
              and performance optimization, while continuously
              improving my backend fundamentals.
            </p>

            <p>
              I enjoy solving real-world problems, debugging complex
              issues, and learning through hands-on development.
              I'm actively seeking opportunities as a Software
              Developer / Frontend-focused Full Stack Developer,
              where I can contribute to impactful products and
              grow as an engineer.
            </p>

          </div>

          {/* Education */}
          <div className="education-section">

            <div className="section-heading">
              <span>MY ACADEMIC BACKGROUND</span>
              <h2>Education</h2>
            </div>

            <EducationCard />

          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutMe
