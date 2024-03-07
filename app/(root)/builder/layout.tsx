'use client'
import { useAppSelector } from "@/redux/hooks/hooks"
import Resume from "./[templateId]/components/Resume"
import Sidebar from "./[templateId]/components/Sidebar"
import Template1 from "./[templateId]/components/Template1"


export default function TemplateLayout({ children }: {
    children: React.ReactNode
}) {
    const sidebar = useAppSelector( state => state.rootSlice.sidebar);
    return (
        <main className="flex gap-5">
            <Sidebar />
            <div className={`md:flex-row flex flex-col ${ sidebar ? 'ml-[20rem]' : 'ml-[7rem]' }`}>
                <div className="w-[30rem]  ">
                    {children}
                </div>
                <div >
                    <Resume />
                </div>
            </div>
        </main>
    )
}