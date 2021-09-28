import React from 'react'
import "./About.css"
import Programmer from "../images/image2pro.jpg"


const About = () => {

    return (
        <div  className="container">
            <div className="grid">
                <div className="left">
                <img src={Programmer} alt="Programmer" />
                </div>
                <div className="right">
                    <h1>Soy Julian Garcia</h1>
                    <h2>Web Developer</h2>
                    <p>Soy un Autodidacta que vive en Argentina y me dedico al Desarrollo FrontEnd Web y Movil, no lo puedo llamar trabajo por que me encanta lo que hago, estoy constantemente capacitandome, tomando cursos y aprendiendo nuevas tecnologias con el objetivo de poder ofrecer el mejor servicio. </p>
                    
                </div>
            </div>
        </div>
    )
}

export default About
