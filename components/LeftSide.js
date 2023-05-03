import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LeftSide() {
  return (
    <div className='hidden lgl:inline-flex h-full fixed left-10 bottom-0 text-customwhite'>
        <div className='w-8 flex flex-col items-center justify-end gap-6'>

                <Link href="https://www.linkedin.com/in/vincent-abensour-0a477a176/" className='w-8' >
                    <Image src="/icons/linkedin-icon.png" alt="Icon de linkedin" width={50} height={50}/>
                </Link>
                <Link href="https://github.com/VincentAbensour" className='w-10'>
                    <Image src="/icons/github-icon.png" alt="Icon de github" width={60} height={60}/>
                </Link>
                <div className='w-[1px] h-36 border-[1px]'></div>

        </div>
    </div>
  )
}
