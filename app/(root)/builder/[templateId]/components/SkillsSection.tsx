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
            <div className='flex gap-4 items-center'>
                <CheckCircle />
                React
            </div>
            <div className='flex gap-4 items-center'>
                <CheckCircle />
                Next
            </div>
            <div className='flex gap-4 items-center'>
                <CheckCircle />
                Typescript
            </div>
            <div className='flex gap-4 items-center'>
                <CheckCircle />
                React
            </div>
            {/* {
                skills?.aiGenSkills?.map( (skill) => {
                    return(
                        <div className='flex gap-4 items-center'>
                            <CheckCircle/>
                            {skill}
                        </div>
                    )
                })
            } */}
        </main>
    )
}

export default SkillsSection