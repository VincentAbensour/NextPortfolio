import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function AboutMe() {
  return (
    <>
        <motion.h2 className='mb-6 text-center lg:mb-10' initial={{opacity:0, x:-20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}><span className='text-customtexthighlight'>
            - </span>A propos de moi<span className='text-customtexthighlight'> - </span>
        </motion.h2>
        <div>
            <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>Hello! je m&apos;appelle <span class="text-highlight">Vincent</span> et je suis un développeur web full-stack auto-didacte. J'ai commencé ma carrière dans le développement de projet, plus particulièrement pour des associations et des entreprises à impact social et environnemental.
                La première fois que j'ai vu une ligne de code était pour un projet de sensibilisation à la qualité de l'air
                The first time I saw a line of code was for programming an air quality sensor for an awareness project.
                A partir de là mon intérêt pour le développement web n'a cessé de grandir et je me suis logiquement mis à apprendre le HTML, CSS et le JavaScript!
            </motion.p>

            <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:-20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>Comme la vie est faite de choix, j'ai décidé en 2022 d'en faire un particulèrement important puisque je me suis mis à coder à plein temps.
                Je me suis mis à Python &#40;probablement par ce que j'aimais bien le nom&#41; et c'était une super aventure. Après quelques petits projets j'ai eu ma première idée de site internet, un site de vente en ligne pour les mairachers avec un dashboard d'aide à la récolte basé sur les paniers commandés par les clients.
            </motion.p>

            <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>
                &Eacute;videmment ça n'était que le début, j'ai continué à apprendre jusqu'à ce que je soit capable de créer des sites de plus en plus beaux et utiles... et ça nous amène à aujourd&apos;hui!
            </motion.p>

        </div>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>
            <p className='mb-4 g:mb-8'>Voilà les principales technologies que j&apos;utilise en ce moment:</p>
            <div className='flex justify-center space-x-7 md:space-x-28'>
                <ul>
                    <li>Python</li>
                    <li>Django - DRF</li>
                </ul>
                <ul>
                    <li>JavaScript</li>
                    <li>Next.JS</li>
                </ul>
            </div>
        </motion.div>
    </>
  )
}