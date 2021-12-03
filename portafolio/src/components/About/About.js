import React from 'react'
import "../About/About.css"
import Programmer from "../../images/image2pro.jpg"


const About = () => {

    return (
        <div className="container">
            <div className="grid">
                <div data-aos="zoom-in-left" 
                data-aos-mirror="true"
                data-aos-once="true"
                className="left">
                <img src={Programmer} alt="Programmer" />
                </div>
                <div data-aos="zoom-in"
                data-aos-once="true"
                data-aos-mirror="true"
                 className="right">
                    <h1 className="titulo-right">Soy Julian Garcia</h1>
                    <h2 className="subtitulo-right">Web Developer</h2>
                    <p>Soy un Autodidacta que vive en Argentina y me dedico al Desarrollo FrontEnd Web y Movil, no lo puedo llamar trabajo porque me encanta lo que hago, estoy constantemente capacitandome, tomando cursos y aprendiendo nuevas tecnologias con el objetivo de poder ofrecer el mejor servicio. </p>
                    
                </div>
            </div>
        </div>
    )
}

export default About
