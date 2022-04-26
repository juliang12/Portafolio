import React, { useRef } from 'react'
import "../Banner/Banner.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import {motion} from "framer-motion"
import Moon from '../moon/Moon';

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

    const pathVariants = {
        hidden: {
          pathLength: 0,
          opacity: 0,
        },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: {
            duration: 8,
            ease: "easeInOut",
          },
        },
      };


    return (
        <div>
            <header className="header"> 
      <Moon/>
                <div className="text-banner">
                    <div className='logo'>
                    <motion.svg
                    className="svgLogo"
              width="1440" height="1024" viewBox="0 0 1440 1024"
              fill="none"
              strokeWidth="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M1051.86 265.548L717.115 893.37L381.461 266.032L1051.86 265.548Z"
                stroke="#5F0261"
                stroke-width="6.5"
              />
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M380.888 705.626L718.263 79.2116L1051.29 707.951L380.888 705.626Z"
                stroke="#5F0261"
                stroke-width="6.5"
              />
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M885 587H553L718.271 262L885 587Z"
                stroke="#5F0261"
                stroke-width="6.5"
              />
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M677.271 436.45V518.65C677.271 539.15 667.971 549.4 649.371 549.4C645.471 549.4 641.671 548.8 637.971 547.6V532.15C641.871 533.45 645.321 534.1 648.321 534.1C656.721 534.1 660.921 529.05 660.921 518.95V436.45H677.271ZM791.613 484.6V542.65C780.913 547.15 769.213 549.4 756.513 549.4C739.313 549.4 725.613 544.1 715.413 533.5C705.413 523.1 700.413 509.25 700.413 491.95C700.413 474.65 705.563 460.8 715.863 450.4C726.163 439.8 739.763 434.5 756.663 434.5C769.663 434.5 779.913 436.3 787.413 439.9L785.463 455.8C778.163 451.8 768.563 449.8 756.663 449.8C744.363 449.8 734.613 453.75 727.413 461.65C720.413 469.25 716.913 479.35 716.913 491.95C716.913 504.65 720.313 514.8 727.113 522.4C734.113 530.2 743.913 534.1 756.513 534.1C764.613 534.1 770.763 533.3 774.963 531.7V499.9H751.863V484.6H791.613Z"
                fill="#5F0261"
                stroke="#5F0261"
                strokeWidth="0.5"
              />
            </motion.svg>
                    </div>
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
