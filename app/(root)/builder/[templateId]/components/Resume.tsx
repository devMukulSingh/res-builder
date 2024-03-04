'use client'
import { useAppSelector } from '@/redux/hooks/hooks'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaLocationPin } from 'react-icons/fa6'

const Resume = () => {

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])
    const personalInfo = useAppSelector(state => state.persistedReducer.userSlice.personalInfo);
    const experience = useAppSelector(state => state.persistedReducer.userSlice.experience);
    const education = useAppSelector(state => state.persistedReducer.userSlice.education);
    const technical = useAppSelector(state => state.persistedReducer.userSlice.technicalSkills);
    const contact = useAppSelector(state => state.persistedReducer.userSlice.contact);
    const achievements = useAppSelector(state => state.persistedReducer.userSlice.achievements);
    const languages = useAppSelector(state => state.persistedReducer.userSlice.languages);


    if (!isMounted) return null;

    return (
        <>
            <main className='w-[calc(100vw-53rem)] pb-20 whitespace-nowrap pr-10 max-w-[60rem] shrink-0 '>

                <div className='text-neutral-700 bg-white pb-10  min-w-[40rem]  flex flex-col gap-5 py-14 px-10  '>
                    {/* ABOUT */}
                    <header className='flex gap-10'>
                        <Image
                            height={40}
                            width={40}
                            className="rounded-full"
                            src={'/next.svg'}
                            alt="profilePhoto" />
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold'>
                                {personalInfo?.fullName}
                            </h1>
                            <h1>
                                {personalInfo?.mobile} || {personalInfo?.email}
                            </h1>
                        </div>
                    </header>
                    <div className='space-y-2'>

                        <h1 className='text-xl font-semibold'>
                            Address
                        </h1>
                        <h1>
                            {personalInfo?.address}
                        </h1>

                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-xl font-semibold'>
                            Bio
                        </h1>
                        <h1>
                            {personalInfo?.bio}
                        </h1>
                    </div>
                    {/* work Experience */}
                    <section className='space-y-1'>
                        <h1 className=' text-xl font-semibold'>
                            Work Experience
                        </h1>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>
                                {experience?.role} | {experience?.address}`  
                            </h1>
                            <h1>
                                {`${experience?.startDate}-${experience?.endDate}` } 
                            </h1>

                        </div>

                        <ul className='list-disc pl-8'>
                            {/* <li className='whitespace-normal'>
                            </li> */}
                        </ul>
                    </section>

                    {/* SKILLS */}
                    <section className='space-y-1'>
                        <h1 className=' text-xl font-semibold'>
                            Technical Skills
                        </h1>
                        <div className='flex gap-5'>
                            {

                            }
                        </div>
                    </section>
                    {/* Education */}
                    <section className='space-y-1'>
                        <h1 className=' text-xl font-semibold'>
                            Education
                        </h1>
                        <h1 className='font-bold'>
                            {/* {education?.schoolName} */}
                        </h1>
                        <div className='flex justify-between'>
                            <h1>
                                {/* {education?.degree} */}
                            </h1>
                            {/* <h1>{education?.endDate}</h1> */}
                        </div>

                    </section>

                    {/* Project */}
                    <section className='space-y-1'>
                        <h1 className=' text-xl font-semibold'>
                            Projects
                        </h1>

                    </section>

                    {/* Achievements */}
                    <section className='space-y-1'>
                        <h1 className=' text-xl font-semibold'>
                            Achievements
                        </h1>
                    </section>

                    {/* Languages */}
                    <section className='space-y-1'>
                        <h1 className=' text-xl font-semibold'>
                            Languages
                        </h1>
                    </section>
                </div>


            </main>
        </>

    )
}

export default Resume