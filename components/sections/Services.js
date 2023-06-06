import React from 'react'
import {FaRegLightbulb, FaPaintBrush, FaSearch, FaDesktop} from "react-icons/fa";
import {motion} from 'framer-motion'
import Button from '../Button';

function Services() {
  return (
    <div>
        <h2 id="projects-title" className='text-center mb-8 lgl:mb-12 xl:mb-16'><span className='text-customtexthighlight'> - </span>Mes Services<span className='text-customtexthighlight'> - </span></h2>
        <div className='mx-auto md:translate-x-[5%] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8 lgl:w-5/6'>
                <motion.div className="relative lgl:max-w-[400px]" initial={{opacity:0, x:-30}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>
                    <div className='flex items-center relative z-10'>
                        <h4 className='grow mr-2'>Gestion de projets Web</h4>
                        <FaRegLightbulb style={{color:"#00FFD5","font-size":"30px"}}/>
                    </div>
                    <p className='w-5/6 relative z-10'>Mise en place de sites vitrines, marchands et de réservation au meilleur prix!</p>
                </motion.div>
                <motion.div className="lgl:max-w-[400px]" initial={{opacity:0, x:30}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.4}} viewport={{ once: true }}>
                    <div className='flex items-center'>
                        <h4 className='grow mr-2'>Conception sur mesure</h4>
                        <FaPaintBrush style={{color:"#00FFD5","font-size":"30px"}}/>
                    </div>
                    <p className='w-5/6'>Une conception qui s&apos;adapte à vos envies et vos besoins grâce à un lien fort avec vous pendant le processus de création.</p>
                </motion.div>

                <motion.div className="lgl:max-w-[400px]" initial={{opacity:0, x:-30}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.6}} viewport={{ once: true }}>
                    <div className='flex items-center'>
                        <h4 className='grow mr-2'>Référencement Naturel</h4>
                        <FaSearch style={{color:"#00FFD5","font-size":"30px"}}/>
                    </div>
                    <p className='w-5/6'>Un référencement optimal de votre site pour de meilleurs performances sur les moteurs de recherche </p>
                </motion.div>
                <motion.div className="lgl:max-w-[400px]" initial={{opacity:0, x:30}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.8}} viewport={{ once: true }}>
                    <div className='flex items-center justify-between'>
                        <h4 className='mr-2'>Sites dynamiques et responsives</h4>
                        <FaDesktop style={{color:"#00FFD5","font-size":"30px"}}/>
                    </div>
                    <p className='w-5/6'>Des sites responsives avec des animations discrètes mais efficaces pour attirer l&apos;oeil!</p>
                </motion.div>

        </div>
        <div className='flex flex-col items-center gap-8 md:gap-12 lgl:gap-14 xl:gap-16 mt-12'>
            <p className="text-customtexthighlight text-center">Un projet web? Demandez un devis gratuit!</p>
            <Button text='Me Contacter' link="mailto:abensour.web@gmail.com"/>
        </div>
    </div>
  )
}

export default Services
