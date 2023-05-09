import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function Projects() {

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
        <h2 id="projects-title" className='text-center'><span className='text-customtexthighlight'> - </span>Mes projets<span className='text-customtexthighlight'> - </span></h2>

        <div className='bg-custombluegrey shadow-2xl rounded-sm p-2 my-12 mx-auto w-4/5 max-w-xs md:shadow-none md:bg-transparent md:max-w-5xl md:w-full md:grid md:grid-cols-12 md:mt-8'>
            <div className='relative hidden md:grid col-start-1 col-end-8 row-span-full self-center grayscale z-0 hover:z-20 hover:grayscale-0 transition ease-in-out duration-500' >
                <img src="/projects/chat-login.png" alt='Screen shot of the loginpage from the chat project' className={`row-span-full col-span-full + ${countChat === 1 ? "block" : "hidden"}`}/>
                <img src="/projects/chat-register.png" alt='Screen shot of the registerpage from the chat project' className={`row-span-full col-span-full + ${countChat === 2 ? "block" : "hidden"}`}/>
                <img src="/projects/chat-home.png" alt='Screen shot of the homepage from the chat project' className={`row-span-full col-span-full + ${countChat === 3 ? "block" : "hidden"}`}/>
                <img src="/icons/next.png" alt="Next Icon" onClick={handleClickChat} className='absolute z-30 w-6 cursor-pointer my-auto top-0 bottom-0 right-5'/>
            </div>
            <div className='md:border-solid md:col-start-5 md:col-end-13 md:row-span-full md:z-10'>
                <div className='flex flex-col md:pt-8 lgl:pt-0'>
                    <p className="text-customtexthighlight md:self-end">Projet Personnel</p>
                    <h3 className='md:self-end'>Chat-Project</h3>
                    <div className='bg-custombluegrey md:shadow-2xl rounded-sm md:p-4 md:self-end'>
                        <p className='md:text-right'>Une application web de chat en ligne. Vous pouvez vous créer un compte, inviter d&apos;autres utilisateurs dans vos channels et refaire le monde!</p>
                        <br/>
                        <p className='md:text-right'> Une application créée avec une API <span className="text-customtexthighlight">Django Rest Framework</span> et une application <span className="text-customtexthighlight">React</span></p>
                    </div>
                    <div className="py-2 md:self-end">
                        <a href="https://github.com/VincentAbensour/ChatBox">
                            <Image width={40} height={40} src="/icons/github-icon.png" alt="Icon of github"></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className='bg-custombluegrey shadow-2xl rounded-sm p-2 my-4 mx-auto w-4/5 max-w-xs md:shadow-none md:bg-transparent md:max-w-5xl md:w-full md:grid md:grid-cols-12 md:mt-8'>

            <div className='relative hidden md:grid col-start-1 col-end-8 row-span-full self-center grayscale z-0 hover:z-20 hover:grayscale-0 transition ease-in-out duration-500' >
                <img src="/projects/ecom-home.png" alt='Screen shot of the homepage from the Ecommerce project' className={`row-span-full col-span-full + ${countEcom === 1 ? "block" : "hidden"}`}/>
                <img src="/projects/ecom-cart.png" alt='Screen shot of the cartpage from the Ecommerce project' className={`row-span-full col-span-full + ${countEcom === 2 ? "block" : "hidden"}`}/>
                <img src="/projects/ecom-market.png" alt='Screen shot of the marketpage from the Ecommerce project' className={`row-span-full col-span-full + ${countEcom === 3 ? "block" : "hidden"}`}/>
                <img src="/icons/blacknext.png" alt="Next Icon" onClick={handleClickEcom} className='absolute z-30 w-10 cursor-pointer my-auto top-0 bottom-0 right-5'/>
            </div>

            <div className='md:border-solid md:col-start-5 md:col-end-13 md:row-span-full md:z-10'>
                <div className='flex flex-col md:pt-8 lgl:pt-0'>
                    <p className="text-customtexthighlight md:self-end">Projet Personnel</p>
                    <h3 className='md:self-end'>Farmer-Ecommerce</h3>
                    <div className='bg-custombluegrey md:shadow-2xl rounded-sm md:p-4 md:self-end'>
                        <p className='md:text-right'>Un site de vente en ligne créé pour aider des mairachers à vendre leurs paniers de légumes en ligne.
                            Chaque semaine les clients peuvent se créer un panier dans la limite du stock proposé par le mairacher. Le site fourni un récapitulaitf de récolte et un système d&apos;envoie de mail pour prévenir de la disponibilité des paniers.
                        </p>
                        <br/>
                        <p className='md:text-right'>Une application créée avec <span className="text-customtexthighlight">Django</span> et <span className="text-customtexthighlight">Bootstrap</span>.</p>
                    </div>
                    <div className="py-2 md:self-end">
                        <a href="https://github.com/VincentAbensour/Projet-Maraichage">
                            <Image width={40} height={40} src="/icons/github-icon.png" alt="Icon of github"></Image>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}
