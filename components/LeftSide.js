import React from 'react'

export default function LeftSide() {
  return (
    <div className='hidden lgl:inline-flex h-full fixed left-10 bottom-0 text-customwhite'>
        <div className='w-8 flex flex-col items-center justify-end gap-6'>

                <a href="https://www.linkedin.com/in/vincent-abensour-0a477a176/" className='w-8' >
                    <img src="/icons/linkedin-icon.png" alt="github-icon"/>
                </a>
                <a href="https://github.com/VincentAbensour" className='w-10'>
                    <img src="/icons/github-icon.png" alt="github-icon"/>
                </a>
                <div className='w-[1px] h-36 border-[1px]'></div>

        </div>
    </div>
  )
}
