import React from 'react'
import './EducationCard.css'

const education = [
  {
    certification: "B.Tech in Computer Science and Engineering",
    from: "Walchand Institute of Technology - Solapur, Maharashtra",
    board: "Completed | GPA: 9.0",
    year: "2019 - 2023",
  },
  {
    certification: "Higher Secondary Education (12th Grade)",
    from: "DVN College - Bidri",
    board: "Maharashtra Board | Percentage: 65%",
    year: "Completed in 2017",
  },
  {
    certification: "Secondary Education (10th Grade)",
    from: "Shirati High School, Shirati",
    board: "Maharashtra Board | Percentage: 78%",
    year: "Completed in 2017",
  },
]

const EducationCard = () => {
  return (
    <div className="educationCard">
      {education.map((ed, index) => (
        <div className="educationItem" key={index}>
          <div className="symbolLogo"></div>

          <div className="details">
            <h4 className="certification">{ed.certification}</h4>
            <h4 className="from">{ed.from}</h4>
            <p className="board">{ed.board}</p>
            <p className="year">{ed.year}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EducationCard;