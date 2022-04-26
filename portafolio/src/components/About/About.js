import React from 'react'
import "../About/About.css"
import Programmer from "../../images/image2pro.jpg"
import { useTranslation } from 'react-i18next'


const About = () => {
    const [t] = useTranslation("global")
    return (
        <div className="container">
            <div className="grid">
            <div className="container-title">
      <h1 data-aos="fade-right" className="section-title1">
        About
      </h1>
      <div data-aos="fade-right" className="bar-style"></div>
      </div>
                {/* <div data-aos="zoom-in-left" 
                data-aos-mirror="true"
                data-aos-once="true"
                className="left">
                <img src={Programmer} alt="Programmer" />
                </div> */}
                <div data-aos="zoom-in"
                 className="right">
                    <h1 className="titulo-right">{t("about.iam")}</h1>
                    <h2 className="subtitulo-right">Web Developer</h2>
                    <p>{t("about.paragraph")}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default About
