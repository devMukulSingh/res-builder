'use client'
import { useAppSelector } from '@/redux/hooks/hooks';
import { format } from 'date-fns';
import React from 'react'

const Education = () => {
    const education = useAppSelector(state => state.persistedReducer.education);

    return (
        <section className='space-y-1'>
            <div className='flex items-center gap-5'>
                <hr className='h-2 bg-blue-400 w-14' />
                <h1 className=' font-bold'>
                    EDUCATION
                </h1>
            </div>

            {
                education?.map((item, index) => (

                    <div key={index}>
                        <h1 className='font-bold'>
                            {item?.schoolName}
                        </h1>
                        <div className='flex justify-between'>
                            <h1>
                                {` ${item.degree ? `${item?.degree} in ${item.fieldOfStudy}` : '' } `}
                            </h1>
                            <h1>{format(item?.endDate,"MMM yyyy")}</h1>
                        </div>

                    </div>
                ))
            }
        </section>
    )
}

export default Education