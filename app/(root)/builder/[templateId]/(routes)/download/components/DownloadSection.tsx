import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const DownloadSection = () => {
    const templateId = useParams();
    return (
        <main className='w-1/2'>
            <Link href={`/builder/${templateId}/language`}>
            <BiArrowBack
                className='cursor-pointer' 
                size={30}/>
                </Link>
        </main>
    )
}

export default DownloadSection