
import React from 'react'
import SkillCard from '../../components/SkillCard'
import { useSkillStore } from '../../stores/useSkillStore'
import './Skills.css'

const Skills = () => {
  const skillCategories = useSkillStore(
    (state) => state.skillCategories
  )

  return (
    <section className="skills-page">

      <div className="skills-header">
        <span className="skills-eyebrow">
          WHAT I WORK WITH
        </span>

        <h2>Technical Skills</h2>

        <p>
          Technologies and tools I use to build,
          develop, and maintain modern applications.
        </p>
      </div>

      <div className="skillCat">
        {skillCategories.map((skillCat) => (
          <SkillCard
            key={skillCat.id}
            skillCat={skillCat}
          />
        ))}
      </div>

    </section>
  )
}

export default Skills
