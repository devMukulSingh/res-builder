'use client'
import { Iexperience } from '@/lib/types'
import React from 'react'
import { HTMLRenderer } from '@/lib/HTMLRenderer';

interface ExperienceSectionProps {
    experience: Iexperience
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    experience
}) => {


    return (
        <main className='flex flex-col gap-5 break-all'>
            <div>
                <h1 className='font-bold'>
                    {experience.role || ''}  {` ${experience.address ? `| ${experience.address}` : ''} `}
                </h1>
                <h1>
                    {/* {format(item.startDate, "MMM dd")}-{format(item.endDate, "MMM dd")} */}
                </h1>
            </div>
            <HTMLRenderer htmlString={experience.description} />

        </main>
    )
}

export default ExperienceSection