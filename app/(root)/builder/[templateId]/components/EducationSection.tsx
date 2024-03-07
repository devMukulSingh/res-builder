import { Ieducation } from '@/lib/types'
import React from 'react'

interface EducationSectionProps{
    educationInfo:Ieducation
}

const EducationSection:React.FC<EducationSectionProps> = ({
    educationInfo
}) => {
    return (
        <main>
            <h1 className=''>
                {educationInfo?.schoolName}
            </h1>
            <div className='flex justify-between'>
                <h1>
                    {educationInfo?.degree} in {educationInfo.fieldOfStudy} - {educationInfo.percentage} CGPA
                </h1>
                <h1>{educationInfo?.endDate}</h1>
            </div>

        </main>
    )
}

export default EducationSection