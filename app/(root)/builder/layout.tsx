'use client'
import { useAppSelector } from "@/redux/hooks/hooks"
import Resume from "./[templateId]/components/Resume"
import Sidebar from "./[templateId]/components/Sidebar"
import { usePathname } from "next/navigation"


export default function TemplateLayout({ children }: {
    children: React.ReactNode
}) {
    const sidebar = useAppSelector(state => state.commonSlice.sidebar);
    const pathName = usePathname();
    return (
        <main className="flex gap-5">
            <Sidebar />
            <div className={`md:flex-row flex flex-col ${!sidebar ? 'ml-[7rem]' : 'ml-[20rem]'} `} >
                <div className="w-[30rem]">
                    {children}
                </div>
                <div >
                    <Resume />
                </div>
            </div>
        </main>
    )
}