import { HTMLRenderer } from '@/lib/HTMLRenderer';
import { Iprojects } from '@/lib/types'

interface ProjectSectionProps {
    project: Iprojects | null
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
    project
}) => {
    if (!project) return null;

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
        </main>
    )
}

export default ProjectSection