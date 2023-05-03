import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function Hero() {
  return (
    <div className='flex flex-col m-auto'>
        <div className='mb-2'>
            <motion.h4 animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:0.8}}>Salut, je suis</motion.h4>
            <motion.h1 className='gradient-text' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1}}>Vincent </motion.h1>
            <motion.h1 className='gradient-text' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.2}}>Abensour</motion.h1>
            <motion.h4 animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.4}}>Je crée des sites internets</motion.h4>
        </div>
        <motion.div className='mb-2 lg:w-4/5' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.6}}>
            <p>
                Je suis <span className='text-customtexthighlight'>développeur web fullstack</span> en freelance et je crée et design des sites responsive. Je suis toujours à l&apos;écoute de nouveax projets! Si vous avez besoin d'aide pour votre présence sur internet que soit pour un site vitrine ou une application web vous pouvez <a href="mailto:vincentabensour@yahoo.fr" class="text-customtexthighlight">me conctacter</a>!
            </p>
        </motion.div>
        <div className='self-center flex flex-col'>
            <motion.h4 className="text-gradientgreen md:mt-8 lgl:pt-16" animate={{y:0, opacity:1}} initial={{y:-20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.8}}>On passe à la suite?</motion.h4>
            <Link href="#about-section" className="self-center" scroll={false}>
                <motion.div animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.8}}>
                    <Image src="/icons/triangle.png" alt="Triangle that lead to the next page" width={50} height={50} className='duration-300 ease-in-out hover:translate-y-4'></Image>
                </motion.div>
            </Link>
        </div>
    </div>
  )
}
