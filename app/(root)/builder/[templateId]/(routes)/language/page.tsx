import dynamic from 'next/dynamic'
const LanguageForm = dynamic( () => import('./components/LanguageForm'),{ssr:falsew}  )

const Language = () => {
  return (
    <div>
        <LanguageForm/>
    </div>
  )
}

export default Language