import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { Inter } from 'next/font/google'
import {motion} from 'framer-motion'
import LeftSide from '@component/components/LeftSide';
import RightSide from '@component/components/RightSide';
import Hero from '@component/components/sections/Hero';
import AboutMe from '@component/components/sections/AboutMe';
import Projects from '@component/components/sections/Projects';
import Contact from '@component/components/sections/Contact';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{ease: 'linear', duration:1, delay:1.8}}>
        <RightSide/>
        <LeftSide/>
    </motion.div>
    <div id="content" className='w-4/5 m-auto xl:w-4/6'>

        <section id="hero-section" className='min-h-screen flex items-center pt-6 xl:w-5/6 m-auto'>
          <Hero/>
        </section>


        <section id="about-section" className='my-4 mx-auto sm:w-4/5 lg:w3/5 max-w-xl'>
          <AboutMe/>
        </section>

        <section id="projects-section" className='my-8'>

            <Projects/>

        </section>

        <section id="contact-section" className='h-screen flex items-center max-w-4xl m-auto'>
            <Contact/>
        </section>

    </div>
    </>
  )
}
