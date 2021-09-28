import React from 'react';
import { Link, useParams } from "react-router-dom"
import Portfolio from "./Portfolio"
import Trabajos from "./Trabajos"
import "./Secciones.css"



const Secciones = ({data}) => {
console.log(data)
    return (  
      <section className="seccion">
        {
          data.map((item)=>(
            <ul key={item.id} className="container">
            <li key={item.id} className="lista">
              <Link data-text={item.name} to={`/portafolio/${item.id}`}>
                {item.name}
              </Link>
            </li>
            </ul>
          ))
        }
      </section>
    )
}

export default Secciones
