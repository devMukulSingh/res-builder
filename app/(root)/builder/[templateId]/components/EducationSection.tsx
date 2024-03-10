import { Ieducation } from '@/lib/types'
import { format } from 'date-fns';
import React from 'react'

interface EducationSectionProps {
    educationInfo: Ieducation
}

const EducationSection: React.FC<EducationSectionProps> = ({
    educationInfo
}) => {
    return (
        <main>
            <h1 className=''>
                {educationInfo?.schoolName}
            </h1>
            <div className='flex justify-between'>
                <h1>
                    {educationInfo?.degree}  {`${educationInfo?.fieldOfStudy ? ` in ${educationInfo.fieldOfStudy}` : ''}`}
                    {
                        ` 
                            ${educationInfo.percentage ?
                            ` - ${educationInfo.percentage} CGPA` : ``
                        } 
                        
                        `
                    }
                </h1>
                <h1>{educationInfo?.startDate} -- {educationInfo?.endDate} </h1>
            </div>

        </main>
    )
}

export default EducationSection
