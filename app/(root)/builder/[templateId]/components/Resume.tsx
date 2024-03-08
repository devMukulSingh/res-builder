'use client'
import RichTextEditor from '@/components/commons/RichTextEditor'
import RichTextEditors from '@/components/commons/RichTextEditors'
import Tiptap from '@/components/commons/Tiptap'
import { Textarea } from '@/components/ui/textarea'
import { useAppSelector } from '@/redux/hooks/hooks'
import { format, formatDate } from 'date-fns'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaLocationPin } from 'react-icons/fa6'
import Skill from './SkillsSection'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ProjectSection from './ProjectSection'
import AchievementSection from './AchievementSection'
import LanguageSection from './LanguageSection'

const Resume = () => {

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])
    const personalInfo = useAppSelector(state => state.persistedReducer.personalInfo);
    const experience = useAppSelector(state => state.persistedReducer.experience);
    const education = useAppSelector(state => state.persistedReducer.education);
    const technical = useAppSelector(state => state.persistedReducer.technicalSkills);
    const contact = useAppSelector(state => state.persistedReducer.contact);
    const achievements = useAppSelector(state => state.persistedReducer.achievements);
    const languages = useAppSelector(state => state.persistedReducer.languages);
    const projects = useAppSelector(state => state.persistedReducer.projects);
    const sidebar = useAppSelector(state => state.commonSlice.sidebar);

    console.log(achievements);

    if (!isMounted) return null;

    return (
        <>
            <main className={`${sidebar ? 'w-[calc(100vw-52rem)]' : 'w-calc(100vw-37rem)'} pb-20  pr-10 max-w-[60rem] shrink-0 `}>

                <div className='text-neutral-700 pb-10  min-w-[40rem]  flex flex-col gap-5 p-5  '>

                    <header className='bg-white px-8 pt-10 pb-5 flex flex-col gap-5'>
                        {/* ABOUT */}
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold'>
                                {personalInfo?.fullName}
                            </h1>
                            <h1>
                                {personalInfo?.mobile} || {personalInfo?.email}
                            </h1>
                        </div>

                        <div className='space-y-2'>

                            <h1 className='text-xl font-semibold'>
                                Address
                            </h1>
                            <h1>
                                {personalInfo?.address}
                            </h1>

                        </div>

                        {/* BIO */}
                        <div className=''>
                            <h1 className='text-xl font-semibold'>
                                Bio
                            </h1>
                            <h1>
                                Creative Frontend Developer with expertise in HTML, CSS, and JavaScript. Proven ability to transform design concepts into responsive web applications. Passionate about delivering visually appealing and user-centric experiences.
                            </h1>
                            {/* <RichTextEditors label="bio" /> */}
                        </div>

                    </header>

                    {/* work Experience */}
                    <section className='space-y-4 bg-white p-5'>
                        <h1 className=' text-xl font-semibold'>
                            Work Experience
                        </h1>
                        {
                            experience?.map((item, index) => (
                                <div className='flex flex-col gap-5' key={index}>

                                    <div>
                                        <h1 className='font-bold'>
                                            {item.role || ''}  {` ${item.address ? `| ${item.address}` : ''} `}
                                        </h1>
                                        <h1>
                                            {/* {format(item.startDate, "MMM dd")}-{format(item.endDate, "MMM dd")} */}
                                        </h1>
                                    </div>

                                    <ul className='list-disc pl-8'>
                                        {
                                            <>
                                                <li>
                                                    I am Deepak Prakash
                                                    a Frontend engineer, with the passion for creating stunning and user-friendly websites and applications. With 3years plus experience in the industry, I have honed skills in HTML, CSS, Javascript, as well as modern frontend frameworks such as ReactJs And VueJs.
                                                </li>
                                            </>
                                        }
                                    </ul>

                                </div>
                            ))
                        }
                    </section>

                    {/* SKILLS */}
                    <section className='space-y-5 bg-white p-5'>
                        <h1 className=' text-xl font-semibold'>
                            Technical Skills
                        </h1>
                        <SkillsSection skills={technical} />

                    </section>

                    {/* Education */}
                    <section className='space-y-5 p-5 bg-white'>
                        <h1 className=' text-xl font-semibold'>
                            Education
                        </h1>
                        {
                            education?.map((educationInfo, index) => (
                                <EducationSection educationInfo={educationInfo} key={index} />
                            ))
                        }

                    </section>

                    {/* Project */}
                    <section className='space-y-5  bg-white p-5'>
                        <h1 className=' text-xl font-semibold'>
                            Projects
                        </h1>
                        {
                            projects?.map((project, index) => (
                                <ProjectSection project={project} key={index} />
                            ))
                        }

                    </section>

                    {/* Achievements */}
                    <section className='space-y-5  bg-white p-5'>
                        <h1 className=' text-xl font-semibold'>
                            Achievements
                        </h1>
                        <ul className='list-disc pl-5'>
                            {
                                achievements?.map((achievement, index) => (
                                    <AchievementSection achievement={achievement.value} key={index} />
                                ))
                            }
                        </ul>
                    </section>

                    {/* Languages */}
                    <section className='space-y-5  bg-white p-5'>
                        <h1 className=' text-xl font-semibold'>
                            Languages
                        </h1>
                        <ul className='list-disc pl-5'>
                            {
                                languages?.map((language, index) => (
                                    <LanguageSection language={language} key={index} />
                                ))
                            }
                        </ul>
                    </section>
                </div>


            </main>
        </>

    )
}

export default Resume