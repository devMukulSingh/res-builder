'use client'
import { MdOutlineSort } from "react-icons/md";
import SidebarOption from "./SidebarOption";
import Progressbar from "./Progressbar";
import { Contact, GraduationCap, Languages, User } from 'lucide-react'
import { BiCertification } from 'react-icons/bi'
import { FaDiagramProject, FaUserPen } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi'
import { usePathname } from "next/navigation";
import { resetProgressBar } from "@/redux/slice/rootSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { Button } from "@/components/ui/button";

const Sidebar = () => {

    const pathName = usePathname();
    const dispatch = useAppDispatch();

    const sidebarOptions = [
        {
            icon: User,
            title: 'Personal Information',
            isActive: pathName.endsWith('/personal')
        },
        {
            icon: FaUserPen,
            title: 'Experience',
            isActive: pathName.endsWith('/experience')

        },
        {
            icon: GiSkills,
            title: 'Technical Skills',
            isActive: pathName.endsWith('/technical')

        },
        {
            icon: GraduationCap,
            title: 'Education',
            isActive: pathName.endsWith('/education')

        },
        {
            icon: Contact,
            title: 'Social Links',
            isActive: pathName.endsWith('/social')

        },
        {
            icon: FaDiagramProject,
            title: 'Projects',
            isActive: pathName.endsWith('/projects')

        },
        {
            icon: BiCertification,
            title: 'Achievements',
            isActive: pathName.endsWith('achievements')

        },
        {
            icon: Languages,
            title: 'Language',
            isActive: pathName.endsWith('/language')

        },

    ]

    const handleResetForm = () => {
        dispatch(resetProgressBar())
    }
    return (
        <main className='w-[20rem] h-[calc(100vh-6.5rem)] bg-white py-3 fixed'>
            <MdOutlineSort
                className="ml-auto
             mr-5
             size-8
             cursor-pointer
              "/>
            <ul >
                {
                    sidebarOptions.map((option) => (
                        <SidebarOption option={option} key={option.title} />
                    ))
                }
            </ul>
            <Progressbar />
            <Button
                className="mx-10"
                onClick={handleResetForm}
                variant="destructive">
                Reset
            </Button>
        </main>
    )
}

export default Sidebar