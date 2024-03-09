'use client'
import parseHtmlStringToHtml from "html-react-parser";
import { Iexperience } from '@/lib/types'
import React from 'react'
import * as DOMPurify from 'dompurify';
import { HTMLRenderer } from '@/lib/HTMLRenderer';
import parse from "html-react-parser";

interface ExperienceSectionProps {
    experience: Iexperience
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    experience
}) => {

    // console.log(experience.description);

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