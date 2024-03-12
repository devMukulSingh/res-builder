import { HTMLRenderer } from '@/lib/HTMLRenderer';
import { Iprojects } from '@/lib/types'
import * as DOMPurify from 'dompurify';

interface ProjectSectionProps {
    project: Iprojects | null
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
    project
}) => {
    if (!project) return null;

    const sanitizedHtml = DOMPurify.sanitize(project.description);

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
            <HTMLRenderer htmlString={project.description} />
            <h1>

            </h1>
            {/* <ul className='list-disc pl-5'>
                <li></li>
            </ul> */}
        </main>
    )
}

export default ProjectSection