'use client'

import { Components } from "@/lib/Components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks"
import { setAiSuggestedBio, setAiSuggestedSkills } from "@/redux/slice/userSlice";

interface MainCompProps{

}

const MainComp:React.FC<MainCompProps> = ({

}) => {
    const formComp = useAppSelector( state => state.commonSlice.formComp);
    const FormComponent = Components[formComp || 'Personal Information']
    const dispatch = useAppDispatch();  
    // const parsedBio = aiSuggestedBio?.split('\n').filter( item => item !== '');

    // dispatch(setAiSuggestedBio(parsedBio));
    // dispatch(setAiSuggestedSkills());

  return (
        <FormComponent 
        // aiSuggestedSkills={aiSuggestedSkills}
        // aiSuggestedBio={aiSuggestedBio}
  
  />)
}

export default MainComp