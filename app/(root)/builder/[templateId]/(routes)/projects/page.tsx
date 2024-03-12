import dynamic from 'next/dynamic'
const ProjectsForm = dynamic( () => import('./components/ProjectsForm'), {ssr:false})

const Projects = () => {
  return (
    <div>
      <ProjectsForm/>
    </div>
  )
}

export default Projects