import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"
import NavItem from "./NavItem";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [nav, setNav] = useState(false)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
        setShow(false);
      } else { // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  const handleClick = () => {
    setNav(!nav)
  }

  useEffect(() => {

    if (typeof window !== 'undefined') {

      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
    <nav className={`fixed z-50 backdrop-filter backdrop-blur-sm w-full transition ease-in-out px-2 sm:px-4 lg:px-6 + ${show===false ? "opacity-100" : "opacity-0"}`}>
      <div class="">
        <div class="flex flex-wrap items-center justify-between mx-auto p-2">
          <motion.div  animate={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{ease: "linear", duration:0.5}}>
          <Link href="/" id="#logo" className="flex items-center">
              <Image src='/logo/logo.png' width={50} height={50} alt="Logo de Vincent Abensour"/>
          </Link>
          </motion.div>
          {
            !nav
            ?
            <button onClick={handleClick} class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            :
            <button onClick={handleClick} class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          }

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-row space-x-8 list-none dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <motion.li animate={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{delay:0.2, ease: "linear", duration:0.5}}>
                <Link href="/#about-section" class="nav-list-computer block py-2 pl-3 pr-4 md:p-0 dark:text-white" aria-current="page">About Me</Link>
              </motion.li>
              <motion.li animate={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{delay:0.4,  ease: "linear", duration:0.5}}>
                <Link href="/#projects-section" class="nav-list-computer block py-2 pl-3 pr-4 md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
              </motion.li>
              <motion.li animate={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{delay:0.6,  ease: "linear", duration:0.5}}>
                <Link href="/#contact-section" class="nav-list-computer block py-2 pl-3 pr-4 md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </motion.li>
              <li>
              <NavItem message="About Me" link="/#contact-section"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className={`fixed inset-y-0 bg-customclearblue w-3/5 sm:w-1/2 h-screen flex flex-col justify-center items-center duration-300 ease-in-out z-50' md:hidden + ${nav===false ? "-translate-x-96" : ""}`}>
      <div className="flex flex-col gap-6">
        <ul id="nav-list">
            <li class="nav-list" id="about-nav-list"><Link href="/#about-section">About Me</Link></li>
            <li class="nav-list" id="projects-nav-list"><Link href="/#projects-section">Projects</Link></li>
            <li class="nav-list" id="contact-nav-list"><Link href="/#contact-section">Contact</Link></li>
        </ul>
        <a href="media/CV_Vincent_Abensour.pdf" class="button resume-link">Resume</a>
      </div>
    </div>
    </>
  );
};
export default Navbar;

/**/