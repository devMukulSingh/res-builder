'use client'
import { Progress } from "@/components/ui/progress";
import { sidebarOptions } from "@/lib/constants";
import { useAppSelector } from "@/redux/hooks";
import { useParams, useRouter } from "next/navigation";
import { MdOutlineSort } from "react-icons/md";

const Sidebar = () => {

    const { templateId } = useParams();
    const router = useRouter();
    const progress = useAppSelector(state => state.rootSlice.progress);
    const handleOption = (optionTitle: string) => {
        const optionRoute = optionTitle.split(" ")[0].toLowerCase();
        router.push(`/builder/${templateId}/${optionRoute}`)
    }

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
                        <li
                            onClick={() => handleOption(option.title)}
                            className="flex 
                        gap-3 
                        hover:bg-red-100 
                        px-10 py-5 items-center 
                        cursor-pointer
                        text-lg
                        whitespace-nowrap
                        
                        ">
                            <option.icon className="text-xl" />
                            {option.title}
                        </li>
                    ))
                }
            </ul>
            <section className="px-10 py-5 mt-10 flex flex-col gap-2">
                <h1>Progress</h1>
                <div className="flex gap-5 items-center">
                    <Progress value={progress} className="w-64" />
                    <h1>{progress}%</h1>
                </div>
            </section>
        </main>
    )
}

export default Sidebar