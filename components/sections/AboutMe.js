import React from 'react'
import {motion} from 'framer-motion'

export default function AboutMe() {
  return (
    <>
        <motion.h2 className='mb-6 text-center lg:mb-10' initial={{opacity:0, x:-20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}><span className='text-customtexthighlight'>
            - </span>A propos de moi<span className='text-customtexthighlight'> - </span>
        </motion.h2>
        <div>
            <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>Hello! je m&apos;appelle <span className="text-highlight">Vincent</span> et je suis un développeur web full-stack auto-didacte. J&apos;ai commencé ma carrière dans le développement de projet, plus particulièrement pour des associations et des entreprises à impact social et environnemental.
                J'ai vu ma première ligne de code en programmant des Arduino pour un projet de sensibilisation à la qualité de l&apos;air.
                A partir de là mon intérêt pour le développement web n&apos;a cessé de grandir et je me suis logiquement mis à apprendre le HTML, CSS et le JavaScript!
            </motion.p>

            <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:-20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>Comme la vie est faite de choix, j&apos;ai décidé en 2022 d&apos;en faire un particulèrement important puisque je me suis mis à coder à plein temps.
                J'ai commencé par Python &#40;probablement par ce que j&apos;aimais bien le nom&#41; et c&apos;était une super aventure. Après quelques petits projets j&apos;ai eu ma première idée de site internet, un site de vente en ligne pour les mairachers avec un dashboard d&apos;aide à la récolte basé sur les paniers commandés par les clients.
            </motion.p>

            <motion.p className='mb-4 lg:mb-8' initial={{opacity:0, x:20}} whileInView={{opacity: 1, x:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>
                &Eacute;videmment ça n&apos;était que le début, j&apos;ai continué à apprendre jusqu&apos;à ce que je soit capable de créer des sites de plus en plus beaux et utiles... et ça nous amène à aujourd&apos;hui!
            </motion.p>

        </div>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{ once: true }}>
            <p className='mb-4 g:mb-8'>Voilà les principales technologies que j&apos;utilise en ce moment:</p>
            <div className='flex justify-center space-x-7 md:space-x-28'>
                <ul>
                    <li>Python</li>
                    <li>Strapi</li>
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
