import dynamic from 'next/dynamic'

const ExperienceForm = dynamic( () => import('./components/ExperienceForm'), {ssr:false})


const Experience = () => {
  return (
    <>

      <ExperienceForm />


    </>
  )
}

export default Experience