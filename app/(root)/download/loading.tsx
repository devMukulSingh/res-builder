import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
    return (
        <div className='flex items-center justify-center w-full '>
            <Loader size={35} className='mt-10  animate-spin ' />
        </div>
    )
}

export default loading