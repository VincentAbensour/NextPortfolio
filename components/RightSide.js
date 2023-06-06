import React from 'react'
import Link from 'next/link'

export default function RightSide() {
  return (

    <div className='hidden lgl:inline-flex h-full fixed right-10 bottom-0 text-customwhite'>
    <div className='w-8 h-full flex flex-col items-center justify-end gap-32'>
        <Link href='mailto:vincentabensour@yahoo.fr'><p className='rotate-90 text-sm'>abensour.web@gmail.com</p></Link>
        <div className='w-[1px] h-36 border-[1px]'></div>
    </div>
</div>
  )
}
