import { Linkedin, LinkedinIcon, Mail, Phone } from 'lucide-react'
import React from 'react'
import { FaLinkedin, FaLocationPin } from 'react-icons/fa6'

const Resume = () => {
    return (
        <>
            <main className='w-[calc(100vw-50rem)] pb-20 whitespace-nowrap pr-10 '>

                <div className=' bg-white pb-10'>
                    <hr className='h-4 bg-blue-400 w-full ' />
                    <div className='flex flex-col gap-5 py-5 px-10'>


                        {/* ABOUT */}
                        <header className='flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold text-blue-400'>
                                Deepak Prakash
                            </h1>
                            <h1>
                                Software engineer obsessed with building exceptional products that people love
                            </h1>
                            <div className='flex gap-10'>
                                <div className='flex items-center gap-2'>
                                    <Mail size={20} />
                                    hello@openresume.com
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Phone size={20} />
                                    23-456-7890
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaLocationPin size={20} />
                                    NYC, NY
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaLinkedin size={20} />
                                    inkedin.com/in/john-doe
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
                                ABC Company
                            </h1>
                            <div className='flex justify-between'>
                                <h1>Software Engineer</h1>
                                <h1>May 2023 - Present</h1>
                            </div>
                            <ul className='list-disc pl-2'>
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
                                XYZ University
                            </h1>
                            <div className='flex justify-between'>
                                <h1>
                                    Bachelor of Science in Computer Science - 3.8 GPA
                                </h1>
                                <h1>Sep 2019 - May 2023</h1>
                            </div>
                            <ul className='list-disc pl-2'>
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
                                    OpenResume
                                </h1>
                                <h1>Spring 2023</h1>
                            </div>
                            <ul className='list-disc pl-2'>
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
                            <ul className='list-disc pl-2'>
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

export default Resume