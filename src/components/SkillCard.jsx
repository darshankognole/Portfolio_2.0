
import React from 'react'
import './SkillCard.css'

const SkillCard = ({ skillCat }) => {
  return (
    <article className="skillCard">

      <div className="skillCard-header">
        <h3 className="skillName">
          {skillCat.title}
        </h3>

        <span className="skill-count">
          {skillCat.skills.length} Skills
        </span>
      </div>

      <div className="skill-list">
        {skillCat.skills.map((skill, index) => (
          <span
            className="skill-item"
            key={`${skillCat.id}-${skill}`}
          >
            {skill}
          </span>
        ))}
      </div>

    </article>
  )
}

export default SkillCard
