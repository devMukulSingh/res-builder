'use client'
import { MdOutlineSort } from "react-icons/md";
import SidebarOption from "./SidebarOption";
import Progressbar from "./Progressbar";
import { Contact, GraduationCap, Languages, User } from 'lucide-react'
import { BiCertification } from 'react-icons/bi'
import { FaDiagramProject, FaUserPen } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi'
import { usePathname } from "next/navigation";
import { resetProgressBar, toggleSidebar } from "@/redux/slice/rootSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Sidebar = () => {

    const [isMounted, setIsMounted] = useState(false);
    const pathName = usePathname();
    const dispatch = useAppDispatch();
    const sidebar = useAppSelector(state => state.rootSlice.sidebar);


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
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return (
        <main className={`flex flex-col w-[20rem] h-[calc(100vh-6.5rem)] bg-white py-3 fixed transition ${!sidebar && ' w-[7rem]'}  `}>
            <MdOutlineSort
                onClick={() => dispatch(toggleSidebar())}
                className={
                    `ml-auto
                mr-5
                size-8
                cursor-pointer
                ${!sidebar && 'self-center mr-0 ml-0 mb-5'}
                `} />
            <ul >
                {
                    sidebarOptions.map((option) => (
                        <SidebarOption option={option} key={option.title} sidebar={sidebar} />
                    ))
                }
            </ul>
            {sidebar && <Progressbar />}
            <Button
                className={`mx-10 self-center ${!sidebar && 'mt-10'}`}
                onClick={handleResetForm}
                variant="destructive">
                Reset
            </Button>
        </main>
    )
}

export default Sidebar