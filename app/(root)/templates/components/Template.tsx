import Image from "next/image"
import { useRouter } from "next/navigation"

interface TemplateProps {
    image: {
        url: string,
        id: string
    },
    setTemplateId: (templateId: string) => void,
    templateId: string,

}
const Template: React.FC<TemplateProps> = ({
    image,
    setTemplateId,
    templateId,

}) => {

    const router = useRouter();
    const handleTemplateSelect = () => {
        setTemplateId(image.id);
    }

    return (
        <figure
            className={
                `relative
                w-[20rem]
                h-[25rem]

                  `}>
            <Image
                onClick={handleTemplateSelect}
                alt="template"
                fill
                src={image.url}
                className={`
                hover:scale-110
                transition
                object-
                cursor-pointer
                ${templateId === image.id ? ' border-4 border-red-400 scale-110' : ''}
                
            `}
            />
        </figure>
    )
}

export default Template