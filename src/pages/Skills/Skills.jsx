import React from 'react'
import SkillCard from '../../components/SkillCard'
import { useSkillStore } from '../../stores/useSkillStore'
import { use } from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = useSkillStore((state) => state.skillCategories)

  return (
    <section>
      <div className='icons'>floating icons will appear in this div</div>
      <div className='skillCat'>
        {skillCategories.map((skillCat) => (
          <SkillCard key={skillCat.id} skillCat={skillCat}/>
        ))}
      </div>
    </section>
  )
}

export default Skills;