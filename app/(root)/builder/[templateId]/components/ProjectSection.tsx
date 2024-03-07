import { Iprojects } from '@/lib/types'

interface ProjectSectionProps {
    project: Iprojects | null
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
    project
}) => {
    return (
        <main className='space-y-5'>
            <div className='flex gap-5 items-center'>
                <h1 className='text-lg'>
                    {project?.projectName}
                </h1>
                <h1 className="underline text-black text-sm">
                    {project?.projectUrl}
                </h1>
            </div>
            <h1>

            </h1>
            <ul className='list-disc pl-5'>
                <li>Google Lens has many uses, including:
                    Identifying objects: Google Lens can translate text into your language by pointing it at a sign or piece of paper in a foreign language.
                    Exploring locales or menus:</li>
                <li>
                    Google Lens can identify objects by reading barcodes, QR codes, labels, and text.
                    Translating text:
                </li>

            </ul>
        </main>
    )
}

export default ProjectSection