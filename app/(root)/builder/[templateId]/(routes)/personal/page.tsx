import dynamic from 'next/dynamic'
const PersonalForm = dynamic( () => import('./components/PersonalForm'), {ssr:false})

const Personal = () => {
  return (
    <>
      <PersonalForm />
    </>
  )
}

export default Personal