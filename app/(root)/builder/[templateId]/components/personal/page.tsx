import { ChatGPT } from '@/lib/ChatGPT';
import dynamic from 'next/dynamic'
const PersonalForm = dynamic(() => import('./PersonalForm'), { ssr: false })

const Personal = async ({
  searchParams
}: {
  searchParams: { profession: string }
}) => {

  const { profession } = searchParams;
  const prompt = `Suggest 2 short bio for ${profession} resume`
  // const aiSuggestedBio = await ChatGPT(prompt);

  return (
    <>
      <PersonalForm aiSuggestedBio={""} />
    </>
  )
}

export default Personal