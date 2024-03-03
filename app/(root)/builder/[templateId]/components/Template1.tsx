'use client'
import { useAppSelector } from '@/redux/hooks/hooks'
import { Mail, Phone } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaLocationPin } from 'react-icons/fa6'

const Template1 = () => {

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

    console.log(contact);

    if (!isMounted) return null;

    return (
        <>
            <main className='w-[calc(100vw-53rem)] pb-20 whitespace-nowrap pr-10 min-h-[100vh] max-w-[60rem] shrink-0'>

                <div className=' bg-white pb-10 h-full min-w-[40rem]'>
                    <hr className='h-4 bg-blue-400 w-full ' />
                    <div className='flex flex-col gap-5 py-5 px-14'>

                        {/* ABOUT */}
                        <header className='flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold text-blue-400'>
                                {personalInfo?.fullName}
                            </h1>
                            <h1>
                                {personalInfo?.profession}
                            </h1>

                            <div className='flex gap-5 '>
                                <div >

                                    <div className='flex items-center gap-2'>
                                        <Mail size={20} />
                                        {personalInfo?.email || 'john@gmail.com'}
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <FaLinkedin size={20} />
                                        {contact?.linkedIn || 'https://linkedin.com'}
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div>

                                        <div className='flex items-center gap-2'>
                                            <Phone size={20} />
                                            {personalInfo?.mobile || '9808088888'}
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <FaLocationPin size={20} />
                                            {personalInfo?.address || 'pune'}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </header>

                        {/* work Experience */}
                        <section className='space-y-1'>
                            <div className='flex items-center gap-5'>
                                <hr className='h-2 bg-blue-400 w-14' />
                                <h1 className=' font-bold'>
                                    WORK EXPERIENCE
                                </h1>
                            </div>
                            <h1 className='font-bold'>
                                {experience?.company}
                            </h1>
                            <div className='flex justify-between'>
                                <h1>{experience?.role}</h1>
                                <h1>{`${experience?.startDate}-${experience?.endDate}`}</h1>
                            </div>
                            <ul className='list-disc pl-8'>
                                <li className='whitespace-normal'>
                                    Lead a cross-functional team of 5 engineers in developing a search bar, which enables thousands
                                    of daily active users to search content across the entire platform
                                </li>
                                <li className='whitespace-normal'>
                                    Write clean code that is modular and easy to maintain while ensuring 100% test coverage
                                </li>
                            </ul>
                        </section>

                        {/* Education */}
                        <section className='space-y-1'>
                            <div className='flex items-center gap-5'>
                                <hr className='h-2 bg-blue-400 w-14' />
                                <h1 className=' font-bold'>
                                    EDUCATION
                                </h1>
                            </div>
                            <h1 className='font-bold'>
                                {education?.schoolName}
                            </h1>
                            <div className='flex justify-between'>
                                <h1>
                                    {education?.degree}
                                </h1>
                                {/* <h1>{education?.endDate}</h1> */}
                            </div>
                            <ul className='list-disc pl-8'>
                                <li className='whitespace-normal'>
                                    Won 1st place in 2022 Education Hackathon, 2nd place in 2023 Health Tech Competition
                                </li >
                                <li className='whitespace-normal'>
                                    Teaching Assistant for Programming for the Web (2022 - 2023)
                                </li>
                            </ul>
                        </section>

                        {/* Project */}
                        <section className='space-y-1'>
                            <div className='flex items-center gap-5'>
                                <hr className='h-2 bg-blue-400 w-14' />
                                <h1 className=' font-bold'>
                                    PROJECT
                                </h1>
                            </div>

                            <div className='flex justify-between'>
                                <h1 className='font-bold'>
                                    { }
                                </h1>
                                <h1>Spring 2023</h1>
                            </div>
                            <ul className='list-disc pl-8'>
                                <li className='whitespace-normal'>
                                    Created and launched a free resume builder web app that allows thousands of users to create
                                    professional resume easily and land their dream jobs
                                </li >
                                <li className='whitespace-normal'>
                                    Created and launched a free resume builder web app that allows thousands of users to create
                                    professional resume easily and land their dream jobs
                                </li>
                            </ul>
                        </section>

                        {/* SKILLS */}
                        <section className='space-y-1'>
                            <div className='flex items-center gap-5'>
                                <hr className='h-2 bg-blue-400 w-14' />
                                <h1 className=' font-bold'>
                                    SKILLS
                                </h1>
                            </div>
                            <ul className='list-disc pl-8'>
                                <li className='whitespace-normal'>
                                    Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git
                                </li>
                                <li className='whitespace-normal'>
                                    Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile
                                </li>
                            </ul>
                        </section>

                    </div>
                </div>

            </main>
        </>

    )
}

export default Template1