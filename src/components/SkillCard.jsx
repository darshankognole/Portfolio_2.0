import React from 'react'
import './SkillCard.css'

const SkillCard = ({skillCat}) => {
  return (
    <div className='skillCard'>
        <h4 className='skillName'>{skillCat.title}</h4>
        <ul>
            {skillCat.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default SkillCard