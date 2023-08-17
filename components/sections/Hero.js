import {React} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion, useScroll, useTransform  } from 'framer-motion'

export default function Hero() {

    const {scrollY} = useScroll();
    let fastP = useTransform(scrollY, [0,500], ["0%","-50%"])
    let mediumP = useTransform(scrollY, [0,500], ["0%","-50%"])
    let slowP = useTransform(scrollY, [0,500], ["0%","10%"])

  return (
    <motion.div className='relative flex flex-col m-auto py-4'>

        <motion.div drag animate={{opacity:1}} initial={{opacity:0}} transition={{ease: 'easeInOut', duration:1, delay:0.8}} className="animate-pulse absolute rounded-[100%] inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-40" aria-hidden="true">
          <div className="cursor-pointer relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] rounded-[100%] bg-gradient-to-tr from-[#16cf69] to-[#9089fc] opacity-30 sm:left-[calc(30%-30rem)] sm:w-[80rem]"></div>
        </motion.div>
        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{ease: 'easeInOut', duration:1, delay:0.9}} class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="animate-pulse relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4624a1] to-[#12ddc2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </motion.div>

        <motion.div className='mb-2 relative' style={{y : fastP}}>
            <motion.h4 className='text-xl sml:text-2xl mdl:text-3xl font-medium text-customwhite' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:0.8}}>Vincent Abensour</motion.h4>
            <motion.h1 className='gradient-text text-4xl sm:text-5xl sml:text-6xl lg:text-7xl xl:text-8xl font-semibold' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1}}>Développeur Web </motion.h1>
            <motion.h4 className='gradient-text text-4xl sm:text-5xl sml:text-6xl lg:text-7xl xl:text-8xl font-semibold' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.2}}>Freelance</motion.h4>
            <motion.h4 className='text-xl sml:text-2xl mdl:text-3xl font-medium text-customwhite' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.4}}>Je vous accompagne dans vos projets numériques</motion.h4>
        </motion.div>
        <motion.div className='mb-2 relative lg:w-4/5' style={{y : mediumP}} animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.6}}>
            <p>
                Je suis <span className='text-customtexthighlight'>développeur web fullstack en freelance basé en Haute-Loire</span> et je crée et design des sites responsive. Je suis toujours à l&apos;écoute de nouveaux projets! Si vous avez besoin d&apos;aide pour votre présence sur internet que soit pour un site vitrine ou une application web vous pouvez <a href="mailto:abensour.web@gmail.com" className="text-customtexthighlight">me conctacter</a>!
            </p>
        </motion.div>
        <motion.div className='relative self-center flex flex-col' style={{y : slowP}}>
            <motion.h4 className="text-gradientgreen sm:mb-4 lg:mb-6 md:mt-8" animate={{y:0, opacity:1}} initial={{y:-20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.8}}>On passe à la suite?</motion.h4>
            <Link href="#services-section" className="self-center" scroll={false}>
                <motion.div animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.8}}>
                    <Image src="/icons/triangle.png" alt="Triangle that lead to the next page" width={50} height={50} className='duration-300 ease-in-out hover:translate-y-4'></Image>
                </motion.div>
            </Link>
        </motion.div>

    </motion.div>
  )
}
