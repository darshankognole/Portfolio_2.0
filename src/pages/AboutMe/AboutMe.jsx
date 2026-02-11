import React from 'react'
import EducationCard from '../../components/EducationCard';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className='about'>
      <div className='intro'>
        <h3>About Me</h3>
        <p>I’m Darshan Kognole, a Computer Science Engineering graduate (2023) with hands-on experience in Java Full Stack Development. I build scalable backend systems using Java, Spring Boot, REST APIs, Hibernate, and MySQL, and develop modern, responsive user interfaces using React, HTML, CSS, and JavaScript.I have practical experience working on end-to-end application development, including API integration, state management, authentication flows, and database design. I focus on writing clean, maintainable code and structuring applications in a way that supports scalability and long-term maintainability. Currently, I’m strengthening my React expertise, with a strong focus on hooks, routing, state management, and performance optimization, while continuously improving my backend fundamentals. I enjoy solving real-world problems, debugging complex issues, and learning through hands-on development. I’m actively seeking opportunities as a Software Developer / Frontend-focused Full Stack Developer, where I can contribute to impactful products and grow as an engineer.</p>
      </div>
      <EducationCard/>
    </section>
  )
}

export default AboutMe