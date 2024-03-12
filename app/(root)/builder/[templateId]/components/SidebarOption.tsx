'use client'
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IconType } from "react-icons/lib";

interface SidebarOptionProps {
    option: {
        title: string,
        icon: IconType | LucideIcon,
        isActive: boolean
    },
    sidebar: boolean
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
    option,
    sidebar
}) => {
    const { templateId } = useParams();
    const optionRoute = option.title.split(" ")[0].toLowerCase();

    return (
        <Link
            href={`/builder/${templateId}/${optionRoute}`}
        >
            <li className={`
        ${option.isActive ? 'bg-red-100' : ''}
        flex 
        gap-3 
        hover:bg-red-100 
        px-10 py-4 items-center 
        cursor-pointer
        whitespace-nowrap
        `}>
                <option.icon className="text-xl" />
                {sidebar && option.title}
            </li>

        </Link>
    )
}

export default SidebarOption