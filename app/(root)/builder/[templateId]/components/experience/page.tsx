import dynamic from 'next/dynamic'

const ExperienceForm = dynamic(() => import('./ExperienceForm'), { ssr: false })


const Experience = () => {
  return (
    <>

      <ExperienceForm />


    </>
  )
}

export default Experience