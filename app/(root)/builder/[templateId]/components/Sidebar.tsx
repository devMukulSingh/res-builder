'use client'
import { sidebarOptions } from "@/lib/constants";
import { MdOutlineSort } from "react-icons/md";
import SidebarOption from "./SidebarOption";
import Progressbar from "./Progressbar";

const Sidebar = () => {

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
                        <SidebarOption option={option} />
                    ))
                }
            </ul>
            <Progressbar />
        </main>
    )
}

export default Sidebar