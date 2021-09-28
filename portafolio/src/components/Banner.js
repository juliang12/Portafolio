import React from 'react'
import "./Banner.css"
import Typewriter from "typewriter-effect"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Banner = () => {
    useEffect(()=>{
        Aos.init({ duration: 2000})
      },[])

    return (
        <div>
            <header  className="header">
                <div className="text-banner">
                    <h1 >Julian Garcia</h1>
                    <h2>Desarrollador Front-End <span>    
                        <Typewriter
                    onInit={(typewriter)=>{
                        typewriter.typeString("Javascript")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("React")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("CSS")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("HTML")
                        .start();
                    }}
                    /></span></h2>
                    <div className="redes-sociales">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                    </div>
                    </div>
                
            </header>
        </div>
    )
}

export default Banner
