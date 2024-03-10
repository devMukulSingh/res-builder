import { ItechnicalSkills } from '@/lib/types'
import { CheckCircle } from 'lucide-react'
import React from 'react'

interface SkillsSectionProps {
    skills: ItechnicalSkills | null
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
    skills
}) => {


    return (
        <main className='grid grid-cols-4 gap-5'>

            {
                skills?.aiGenSkills?.map((skill, index) => {
                    return (
                        <div className='flex gap-4 items-center' key={index}>
                            <CheckCircle />
                            {skill}
                        </div>
                    )
                })
            }
            {
                skills?.customSkills?.map((skill, index) => {    
                    if(skill.skillName==='') return null;
                    return (
                        <div className='flex gap-4 items-center' key={index}>
                            <CheckCircle />
                            {skill?.skillName}
                        </div>
                    )
                }
                )

            }
        </main>
    )
}

export default SkillsSection