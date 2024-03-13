'use client'

import { Components } from "@/lib/Components";
import { useAppSelector } from "@/redux/hooks/hooks"

const page = () => {

    const formComp = useAppSelector( state => state.commonSlice.formComp);
    const Comp = Components[formComp || 'Personal Information']
    
  return (
    <>
       <Comp/>

    </>
  )
}

export default page