import { ChatGPT } from "@/lib/ChatGPT";
import dynamic from "next/dynamic";
const MainComp = dynamic( () => import('./components/main/MainComp'))


const BuilderPage = async({
  searchParams
}: { searchParams: { profession: string}}) => {

  const { profession } = searchParams;
  const bioPrompt = `Suggest 4 short bio for ${profession} for resume`;
  const skillPrompt = `Suggest few skills for ${profession} for resume`;

  // const aiSuggestedBio = await ChatGPT(bioPrompt);
  // const aiSuggestedSkills = await ChatGPT(skillPrompt);

  // console.log(aiSuggestedBio,"aiSuggestedBio");
  // console.log(aiSuggestedSkills);

  
  

  return (
    <>
       <MainComp 
        // aiSuggestedBio={aiSuggestedBio}
        // aiSuggestedSkills={aiSuggestedSkills}
        />
    </>
  )
}

export default BuilderPage