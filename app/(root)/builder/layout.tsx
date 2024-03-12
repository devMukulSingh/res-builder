'use client'
import { useAppSelector } from "@/redux/hooks/hooks"
const Resume = dynamic( () => import('./[templateId]/components/Resume'), {ssr:false})
import Sidebar from "./[templateId]/components/Sidebar"
import dynamic from "next/dynamic"


export default function TemplateLayout({ children }: {
    children: React.ReactNode
}) {
    const sidebar = useAppSelector(state => state.commonSlice.sidebar);
    return (
        <main className="flex gap-5">
            <Sidebar />
            <div className={`md:flex-row flex flex-col w-full ${!sidebar ? 'ml-[7rem]' : 'ml-[20rem]'} `} >
                <div className="w-[30rem]">
                    {children}
                </div>
                <>
                    <Resume />
                </>
            </div>
        </main>
    )
}