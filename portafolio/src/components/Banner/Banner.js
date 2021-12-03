import React from 'react'
import "../Banner/Banner.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import {motion} from "framer-motion"

const Banner = () => {
    useEffect(()=>{
        Aos.init({ duration: 2000})
      },[])


      const parrafoVariants = {
          hidden: {
              x: 100,
              opacity: 0,

          },
          show: {
              x: 0,
              opacity: 1,
              transition: {
                  duration: 1,
                  ease: "easeInOut",
              }
          }
      }

      const h2animation = {
        hidden: {
            x: -100,
            opacity: 0,

        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeIn",
            }
        }
    }
    return (
        <div>
            <header  className="header"> 
            
                <div className="text-banner">
                    <motion.h1
                    variants={parrafoVariants}
                    initial="hidden"
                    animate="show">Julian Garcia</motion.h1>
                    <motion.h2
                    variants={h2animation}
                    initial="hidden"
                    animate="show">Web Developer</motion.h2>
                    <div className="twinklind"></div>
                    <div className="clouds"></div>
                    <div className="title"></div>
                    <div className="redes-sociales">
                        <a href="https://www.linkedin.com/in/julian-garcia-8bb751214/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/julian.garcia16/" className="instagram"><i className="fa fa-instagram"></i></a>
                    </div>
                    </div>
               
            </header>
        </div>
    )
}

export default Banner
