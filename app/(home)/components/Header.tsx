import React from 'react'
import { BiUpload } from 'react-icons/bi'

const Header = () => {
  return (
    <>
    <main className='px-10 flex  h-24 items-center'>
        <section>
            <h1 className='text-4xl font-bold text-red-600 '>Rangam</h1>
            <h1 className='text-xs italic'>Empathy Drives Innovation</h1>
        </section>
        <button className='border ml-auto border-red-600 text-red-500 font-semibold items-center flex gap-2 px-3 py-2 rounded-md'>
            Share
            <BiUpload className="text-red-600 text-xl "/>
        </button>
    </main>
        <hr className='w-full'/>
    </>
  )
}

export default Header