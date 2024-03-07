'use client'
import { useAppSelector } from "@/redux/hooks/hooks";
import { LucideIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { IconType } from "react-icons/lib";

interface SidebarOptionProps {
    option: {
        title: string,
        icon: IconType | LucideIcon,
        isActive: boolean
    },
    sidebar:boolean
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
    option,
    sidebar
}) => {
    const { templateId } = useParams();

    const router = useRouter();
    const handleOption = (optionTitle: string) => {
        const optionRoute = optionTitle.split(" ")[0].toLowerCase();
        router.push(`/builder/${templateId}/${optionRoute}`)
    }

    return (
        <li
            onClick={() => handleOption(option.title)}
            className={`
                    ${option.isActive ? 'bg-red-100' : ''}
                        flex 
                        gap-3 
                        hover:bg-red-100 
                        px-10 py-4 items-center 
                        cursor-pointer
                        whitespace-nowrap
                        `}>
            <option.icon className="text-xl" />
            { sidebar && option.title}
        </li>

    )
}

export default SidebarOption