'use client'
import { MdOutlineSort } from "react-icons/md";
import SidebarOption from "./SidebarOption";
import Progressbar from "./Progressbar";
import { Contact, GraduationCap, Languages, User } from 'lucide-react'
import { BiCertification } from 'react-icons/bi'
import { FaUserPen } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi'
import { usePathname } from "next/navigation";

const Sidebar = () => {

    const pathName = usePathname();

    const sidebarOptions = [
        {
            icon: User,
            title: 'Personal Information',
            isActive: pathName.endsWith('/personal')
        },
        {
            icon: FaUserPen,
            title: 'Experience',
            isActive:  pathName.endsWith('/experience')

        },
        {
            icon: GiSkills,
            title: 'Technical Skills',
            isActive:  pathName.endsWith('/technical')

        },
        {
            icon: GraduationCap,
            title: 'Education',
            isActive:  pathName.endsWith('/education')

        },
        {
            icon: Contact,
            title: 'Contact Information',
            isActive: pathName.endsWith('/contact')

        },
        {
            icon: BiCertification,
            title: 'Achievements',
            isActive: pathName.endsWith('achievements')

        },
        {
            icon: Languages,
            title: 'Language',
            isActive:  pathName.endsWith('/language')

        }
    ]


    return (
        <main className='w-[20rem] h-[calc(100vh-6.5rem)] bg-white py-5'>
            <MdOutlineSort
                className="ml-auto
             mr-5
             size-8
             cursor-pointer
              "/>
            <ul className="space-y-2">
                {
                    sidebarOptions.map((option) => (
                        <SidebarOption option={option} key={option.title} />
                    ))
                }
            </ul>
            <Progressbar />
        </main>
    )
}

export default Sidebar