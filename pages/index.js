import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { Inter } from 'next/font/google'
import {motion} from 'framer-motion'
import LeftSide from '@component/components/LeftSide';
import RightSide from '@component/components/RightSide';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [countChat, setCountChat] = useState(1)
    const [countEcom, setCountEcom] = useState(1)

    const handleClickChat = () => {
        countChat != 3 ? setCountChat(countChat+1) : setCountChat(1)
    }

    const handleClickEcom = () => {
        countEcom != 3 ? setCountEcom(countEcom+1) : setCountEcom(1)
    }

  return (
    <>
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{ease: 'linear', duration:1, delay:1.8}}>
        <RightSide/>
        <LeftSide/>
    </motion.div>
    <div id="content" className='w-4/5 m-auto xl:w-4/6'>

        <section id="hero-section" className='min-h-screen flex items-center pt-6 xl:w-5/6 m-auto'>
          <div className='flex flex-col w-4/5 m-auto'>
            <div className='mb-2'>
                <motion.h4 animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:0.8}}>Hi, my name is</motion.h4>
                <motion.h1 className='gradient-text' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1}}>Vincent </motion.h1>
                <motion.h1 className='gradient-text' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.2}}>Abensour</motion.h1>
                <motion.h4 animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.4}}>I create web sites and applications</motion.h4>
            </div>
            <motion.div className='mb-2 lg:w-4/5' animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.6}}>
                <p>
                    I’m a  freelance <span className='text-customtexthighlight'>full stack web developper</span> based in France. I build and design responsive web sites. I&apos;m always happy to hear about new projects so if you need help to digitalise your next idea you can <a href="mailto:vincentabensour@yahoo.fr" class="text-customtexthighlight">reach me</a>!
                </p>
            </motion.div>
            <div className='self-center flex flex-col'>
                <motion.h4 className="text-gradientgreen md:mt-8 lgl:pt-16" animate={{y:0, opacity:1}} initial={{y:-20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.8}}>More About Me</motion.h4>
                <Link href="#about-section" className="self-center" scroll={false}>
                    <motion.div animate={{y:0, opacity:1}} initial={{y:20, opacity:0}} transition={{ease: 'easeInOut', duration:0.5, delay:1.8}}>
                        <Image src="/icons/triangle.png" alt="Triangle that lead to the next page" width={50} height={50} className='duration-300 ease-in-out hover:translate-y-4'></Image>
                    </motion.div>
                </Link>
            </div>
          </div>
        </section>


        <section id="about-section" className='my-4 mx-auto sm:w-4/5 lg:w3/5 max-w-xl'>
          <motion.h2 className='mb-6 text-center lg:mb-10' initial={{opacity:0, x:-20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}><span className='text-customtexthighlight'> - </span>A Bit More About Me<span className='text-customtexthighlight'> - </span></motion.h2>
          <div>
              <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>Hello! My name is <span class="text-highlight">Vincent</span> and I&apos;m a self taught full-stack web developper. I started my career in project management, particulary for association and company with social or environmental impact.
                  The first time I saw a line of code was for programming an air quality sensor for an awareness project.
                  From there my interest in development didn&apos;t stop growing up and I started learning HTML, CSS and JavaScript!</motion.p>

              <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:-20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>As life is made of choices, in 2022 I decided to make a big one and start coding full time.
                  I decided to give a try to Python at that time and that was a great adventure. After a few small projects I got my first web site idea. An e-commerce website for farmers that provide a harvest dashboard based on clients carts.
              </motion.p>
              <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>Of course that was only the beginning has I kept learning until I was able to create cool websites and offer my skills... And that&apos;s today!</motion.p>
          </div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>
              <p className='mb-4 g:mb-8'>Here are the main technologies that I use currently</p>
              <div className='flex justify-center space-x-7 md:space-x-28'>
                  <ul>
                      <li>Python</li>
                      <li>Django - DRF</li>
                  </ul>
                  <ul>
                      <li>JavaScript</li>
                      <li>React</li>
                  </ul>
              </div>
          </motion.div>
        </section>

        <section id="projects-section" className='my-8'>

            <h2 id="projects-title" className='text-center'><span className='text-customtexthighlight'> - </span>Some of my work<span className='text-customtexthighlight'> - </span></h2>

            <div className='bg-custombluegrey rounded-sm p-2 my-12 mx-auto w-4/5 max-w-xs md:bg-transparent md:max-w-5xl md:w-full md:grid md:grid-cols-12 md:mt-8'>
                <div className='relative hidden md:grid col-start-1 col-end-8 row-span-full self-center grayscale z-0 hover:z-20 hover:grayscale-0' >
                    <img src="/projects/chat-login.png" alt='Screen shot of the loginpage from the chat project' className={`row-span-full col-span-full + ${countChat === 1 ? "block" : "hidden"}`}/>
                    <img src="/projects/chat-register.png" alt='Screen shot of the registerpage from the chat project' className={`row-span-full col-span-full + ${countChat === 2 ? "block" : "hidden"}`}/>
                    <img src="/projects/chat-home.png" alt='Screen shot of the homepage from the chat project' className={`row-span-full col-span-full + ${countChat === 3 ? "block" : "hidden"}`}/>
                    <img src="/icons/next.png" alt="Next Icon" onClick={handleClickChat} className='absolute z-30 w-6 cursor-pointer my-auto top-0 bottom-0 right-0'/>
                </div>
                <div className='md:border-solid md:col-start-5 md:col-end-13 md:row-span-full md:z-10'>
                    <div className='flex flex-col md:pt-8 lgl:pt-0'>
                        <p class="text-customtexthighlight md:self-end">Personnal Project</p>
                        <h3 className='md:self-end'>Chat-Project</h3>
                        <div className='bg-custombluegrey rounded-sm md:p-4 md:self-end'>
                            <p className='md:text-right'>A real time chat application
                                where you can create an account,
                            create channels and invite users to have a nice chat!</p>
                            <br/>
                            <p className='md:text-right'> Built with a <span class="text-customtexthighlight">Django Rest Framework</span> API and a <span class="text-customtexthighlight">React</span> App</p>
                        </div>
                        <div className="py-2 md:self-end">
                            <a href="https://github.com/VincentAbensour/ChatBox">
                                <Image width={40} height={40} src="/icons/github-icon.png" alt="Icon of github"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        <div className='bg-custombluegrey rounded-sm p-2 my-4 mx-auto w-4/5 max-w-xs md:bg-transparent md:max-w-5xl md:w-full md:grid md:grid-cols-12 md:mt-8'>

            <div className='relative hidden md:grid col-start-1 col-end-8 row-span-full self-center grayscale z-0 hover:z-20 hover:grayscale-0' >
                <img src="/projects/ecom-home.png" alt='Screen shot of the homepage from the Ecommerce project' className={`row-span-full col-span-full + ${countEcom === 1 ? "block" : "hidden"}`}/>
                <img src="/projects/ecom-cart.png" alt='Screen shot of the cartpage from the Ecommerce project' className={`row-span-full col-span-full + ${countEcom === 2 ? "block" : "hidden"}`}/>
                <img src="/projects/ecom-market.png" alt='Screen shot of the marketpage from the Ecommerce project' className={`row-span-full col-span-full + ${countEcom === 3 ? "block" : "hidden"}`}/>
                <img src="/icons/blacknext.png" alt="Next Icon" onClick={handleClickEcom} className='absolute z-30 w-10 cursor-pointer my-auto top-0 bottom-0 right-0'/>
            </div>

            <div className='md:border-solid md:col-start-5 md:col-end-13 md:row-span-full md:z-10'>

            <div className='flex flex-col md:pt-8 lgl:pt-0'>
                <p class="text-customtexthighlight md:self-end">Personnal Project</p>
                <h3 className='md:self-end'>Farmer-Ecommerce</h3>
                <div className='bg-custombluegrey rounded-sm md:p-4 md:self-end'>
                    <p className='md:text-right'>An E-commerce website designed to help farmers to sell their products.
                Curstomers can create a cart in the limit of the stock set each week by the producer.
                The site provides a summury of the harvest that needs to be done at the end of the week depending on the carts thats have been ordered.</p>
                    <br/>
                    <p className='md:text-right'> Built with a <span class="text-customtexthighlight">Django</span> and <span class="text-customtexthighlight">Bootstrap</span>.</p>
                </div>
                <div className="py-2 md:self-end">
                    <a href="https://github.com/VincentAbensour/Projet-Maraichage">
                        <Image width={40} height={40} src="/icons/github-icon.png" alt="Icon of github"></Image>
                    </a>
                </div>
                </div>
            </div>
        </div>

        </section>

        <section id="contact-section" className='h-screen flex items-center max-w-4xl m-auto'>
          <div className='flex flex-col'>
            <h1 className='gradient-text'>So... What do we do now?</h1>
            <h2 class="text-customtexthighlight my-5">Let&apos;s get in Touch!</h2>

              <p>I&apos;m always looking for new opportunities!
                If you have a web project and you&apos;r looking for a developper I might be your Dave.
                Send me a message and I&apos;ll get back to you! Promise!</p>
              <div class="mt-8 flex flex-col self-center">
                <a class="button" href="mailto:vincentabensour@yahoo.fr">Reach Me</a>
                <div className='flex self-center mt-4'>
                  <Link href="https://www.linkedin.com/in/vincent-abensour-0a477a176/">
                    <Image width={40} height={40} src="/icons/linkedin-icon.png" alt="Icon of linkedin"></Image>
                  </Link>
                  <Link href="https://github.com/VincentAbensour">
                    <Image width={40} height={40} src="/icons/github-icon.png" alt="Icon of github"></Image>
                  </Link>
                </div>
              </div>
            </div>
        </section>

    </div>
    </>
  )
}
