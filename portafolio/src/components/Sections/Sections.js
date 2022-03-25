import React from 'react';
import { Link, useParams } from "react-router-dom"
import Portfolio from "../Portfolio/Portfolio"
import Trabajos from "../Works/Works"
import "../Sections/Sections.css"
import {motion} from "framer-motion"
import { useTranslation } from 'react-i18next';



const Sections = ({data}) => {
  const [t] = useTranslation('global')

console.log(data)
    return (  
        <div className='box'> 
        {
          data.map((item)=>(
            <div className="container">
            <ul key={item.id} >
            <li 
              key={item.id} className="lista">
              <Link data-text={item.name} to={`/portafolio/${item.id}`}>
                <div className='image-box'>
                  <img className='images' src={item.preview} alt="" />
                  </div>
                  <div className="details">
                    <div className="content">
                    <h2>{t(item.name)}</h2>
                    <p>{t(item.description)}</p>
                    </div>
                    </div>     
              </Link>
            </li>
            </ul>
            </div>
          ))
        }
        </div>
    )
}

export default Sections
