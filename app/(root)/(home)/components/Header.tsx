'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const logo = 'https://jobs.rangam.com/hs-fs/hubfs/Rangam_Logo2-1.png?width=375&height=110&name=Rangam_Logo2-1.png'
  const router = useRouter();
  return (
    <>
      <main className='px-10 flex  h-24 items-center fixed z-50 mb-24 overflow-hidden w-full'>
        <figure
          className='relative size-32 '>
          <Image
            alt="logo"
            src={logo}
            fill
            onClick={() => router.push('/')}
            className='object-contain cursor-pointer' />
        </figure>
      </main>
      <hr className='w-full' />
    </>
  )
}

export default Header