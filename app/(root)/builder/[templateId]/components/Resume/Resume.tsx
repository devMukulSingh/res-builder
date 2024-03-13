'use client'
import dynamic from 'next/dynamic'
import { useAppSelector } from '@/redux/hooks/hooks'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ProjectSection from './ProjectSection'
import AchievementSection from './AchievementSection'
import ExperienceSection from './ExperienceSection'
import PersonalSection from './PersonalSection'
import { usePathname } from 'next/navigation'
import SuggestedBio from './SuggestedBio'
const LanguageSection = dynamic(() => import('./LanguageSection'), { ssr: false })

const Resume = () => {

    const pathName = usePathname();
    const sidebar = useAppSelector(state => state.commonSlice.sidebar);
    const formComp = useAppSelector(state => state.commonSlice.formComp);

    return (
        <>
            <div className={`${sidebar ? 'w-[calc(100vw-52rem)]' : 'w-[calc(100vw-37rem)]'} pb-20  pr-10 max-w-[60rem] shrink-0 `}>

                <div className='text-neutral-700 pb-10  min-w-[40rem]  flex flex-col gap-5 p-5  '>

                    {/* PersonalInfo */}
                    <PersonalSection />
                    {
                        formComp === 'Personal Information' &&
                        <SuggestedBio />
                    }

                    <ExperienceSection />

                    {/* SKILLS */}
                    <SkillsSection />

                    {/* Education */}
                    <EducationSection />

                    {/* Project */}
                    <ProjectSection />

                    {/* Achievements */}
                    <AchievementSection />

                    {/* Languages */}
                    <LanguageSection />

                </div>


            </div>
        </>

    )
}

export default Resume