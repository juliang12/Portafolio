import React from 'react';
import { Link, useParams } from "react-router-dom"
import Portfolio from "./Portfolio"
import Trabajos from "./Trabajos"
import "./Secciones.css"
import {motion} from "framer-motion"

const animationSections = {
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

const Secciones = ({data}) => {
console.log(data)
    return (  
      <section className="seccion">
        {
          data.map((item)=>(
            <ul key={item.id} className="container">
            <motion.li 
             variants={animationSections}
             initial="hidden"
             animate="show"
              key={item.id} className="lista">
              <Link data-text={item.name} to={`/portafolio/${item.id}`}>
                {item.name}
              </Link>
            </motion.li>
            </ul>
          ))
        }
      </section>
    )
}

export default Secciones
