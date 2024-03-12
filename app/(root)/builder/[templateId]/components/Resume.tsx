'use client'
import { useAppSelector } from '@/redux/hooks/hooks'
import React, { useEffect, useState } from 'react'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ProjectSection from './ProjectSection'
import AchievementSection from './AchievementSection'
import LanguageSection from './LanguageSection'
import ExperienceSection from './ExperienceSection'
import PersonalSection from './PersonalSection'
import { usePathname } from 'next/navigation'
import SuggestedBio from './SuggestedBio'

const Resume = () => {

    const pathName = usePathname();
    const personalInfo = useAppSelector(state => state.persistedReducer.personalInfo);
    const experience = useAppSelector(state => state.persistedReducer.experience);
    const education = useAppSelector(state => state.persistedReducer.education);
    const skills = useAppSelector(state => state.persistedReducer.technicalSkills);
    const contact = useAppSelector(state => state.persistedReducer.contact);
    const achievements = useAppSelector(state => state.persistedReducer.achievements);
    const languages = useAppSelector(state => state.persistedReducer.languages);
    const projects = useAppSelector(state => state.persistedReducer.projects);
    const bioFromDb = useAppSelector(state => state.persistedReducer.bioFromDb);
    const sidebar = useAppSelector(state => state.commonSlice.sidebar);

    return (
        <>
            <div className={`${sidebar ? 'w-[calc(100vw-52rem)]' : 'w-[calc(100vw-37rem)]'} pb-20  pr-10 max-w-[60rem] shrink-0 `}>

                <div className='text-neutral-700 pb-10  min-w-[40rem]  flex flex-col gap-5 p-5  '>

                    {/* PersonalInfo */}
                    <PersonalSection personalInfo={personalInfo} />

                    {
                        pathName.endsWith('/personal') &&
                        <SuggestedBio bioFromDb={bioFromDb}/>
                    }

                    {/* work Experience */}
                    <section className='space-y-4 bg-white p-5 '>
                        <h1 className=' text-xl font-semibold'>
                            Work Experience
                        </h1>
                        {
                            experience?.map((item, index) => (
                                <ExperienceSection experience={item} key={index} />
                            ))
                        }
                    </section>

                    {/* SKILLS */}
                    <section className='space-y-5 bg-white p-5'>
                        <h1 className=' text-xl font-semibold'>
                            Technical Skills
                        </h1>
                        <SkillsSection skills={skills} />

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


            </div>
        </>

    )
}

export default Resume