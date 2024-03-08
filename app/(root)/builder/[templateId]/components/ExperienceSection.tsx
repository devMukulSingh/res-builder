import { Iexperience } from '@/lib/types'
import React from 'react'
import * as DOMPurify from 'dompurify';

interface ExperienceSectionProps {
    experience: Iexperience
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    experience
}) => {
    const sanitizedHtml = DOMPurify.sanitize(experience.description);
    
    return (

        <main className='flex flex-col gap-5'>
            <div>
                <h1 className='font-bold'>
                    {experience.role || ''}  {` ${experience.address ? `| ${experience.address}` : ''} `}
                </h1>
                <h1>
                    {/* {format(item.startDate, "MMM dd")}-{format(item.endDate, "MMM dd")} */}
                </h1>
            </div>

            <div
                dangerouslySetInnerHTML={{ __html: sanitizedHtml}}
                />


            {/* <ul className='list-disc pl-8'>
                {
                    description
                        <li>
                            
                        </li>
    
                }
            </ul> */}

        </main>
    )
}

export default ExperienceSection