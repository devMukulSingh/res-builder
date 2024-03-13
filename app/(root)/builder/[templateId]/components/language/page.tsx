import dynamic from 'next/dynamic'
const LanguageForm = dynamic(() => import('./LanguageForm'), { ssr: false })

const Language = () => {
  return (
    <div>
      <LanguageForm />
    </div>
  )
}

export default Language