'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Separator } from '../ui/separator'

const Header = () => {
  const logo = 'https://jobs.rangam.com/hs-fs/hubfs/Rangam_Logo2-1.png?width=375&height=110&name=Rangam_Logo2-1.png'
  const router = useRouter();
  return (
    <>
      <main className=' sticky top-0 z-50 overflow-hidden w-full '>
        <div className='px-10 flex  h-24 items-center'>
          <figure
            className='relative size-32 '>
            <Image
              alt="logo"
              src={logo}
              fill
              onClick={() => router.push('/')}
              className='object-contain cursor-pointer' />
          </figure>
        </div>
        <Separator />
      </main>
    </>
  )
}

export default Header