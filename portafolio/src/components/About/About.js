import React, { useRef } from 'react'
import "../About/About.css"
import Programmer from "../../images/image2pro.jpg"
import { useTranslation } from 'react-i18next'
import {motion, useInView} from "framer-motion"


const About = () => {
    const [t] = useTranslation("global")
    const ref = useRef(null)
    const isInView = useInView(ref,{ once: true })

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) =>({
            opacity: 1,
            transition: {staggerChildren: 0.03, delayChildren: 0.04 * i}
        })
    }

    const child = {
        visible:{
            opacity: 1,
            x: 0,
            transition:{
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden:{
            opacity: 0,
            x: 20,
            transition:{
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        }
    }
    return (
        <div className="container">
            <div className="grid">
            <div className="container-title">
      <h1 data-aos="fade-right" className="section-title1">
        About
      </h1>
      <div data-aos="fade-right" className="bar-style"></div>
      </div>
                <div ref={ref} 
                 className="right">
                    <h1 data-aos="fade-up" data-aos-duration="800" className="titulo-right">{t("about.iam")}</h1>
                    <h2 data-aos="fade-left"  data-aos-delay="400" className="subtitulo-right">Web Developer</h2>
                    <motion.div animate={isInView ? "visible" : "hidden"} style={{overflow: "hidden"}} variants={container} initial="hidden"> {Array.from((t("about.paragraph"))).map((letters, index) =>(<motion.span key={index} variants={child}>{letters === "" ? "/u00A0" : letters}</motion.span>))}</motion.div>
                  
                    
                </div>
            </div>
        </div>
    )
}

export default About
