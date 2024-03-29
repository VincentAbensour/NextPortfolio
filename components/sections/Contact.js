import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@component/components/Button';

export default function Contact() {
  return (

    <div className='flex flex-col sm:gap-2 md:gap-3 lgl:gap-4 font-bold'>
        <h2 className='gradient-text text-4xl sm:text-5xl sml:text-6xl lg:text-7xl xl:text-8xl'>Et maintenant?</h2>
        <h2 className="text-customtexthighlight my-5">Rencontrons nous!</h2>

        <p>Je suis toujours à la recherche de nouvelles opportunités!
        Si vous avez un projet web et que vous êtes à la recherche d&apos;un développeur sympa et plein d&apos;idées je pourrais être votre Dave.
        Envoyez-moi un message et on en discutera!</p>
        <div className="mt-8 flex flex-col self-center">
            <Button text='Me Contacter' link="mailto:abensour.web@gmail.com"/>
            <div className='flex gap-2 self-center mt-8 md:mt-12'>
                <Link href="https://www.linkedin.com/in/vincent-abensour-0a477a176/" className='w-[50px] h-[50px] hover:animate-bounce'>
                    <Image width={40} height={40} src="/icons/linkedin-icon.png" alt="Icon of linkedin" className='m-auto'></Image>
                </Link>
                <Link href="https://github.com/VincentAbensour" className='relative bottom-1 w-[50px] h-[50px] hover:animate-bounce'>
                    <Image width={50} height={50} src="/icons/github-icon.png" alt="Icon of github" className='m-auto'></Image>
                </Link>
            </div>
        </div>
    </div>
  )
}
