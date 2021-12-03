import "../Portfolio/Portfolio.css"
import React from 'react';
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Portfolio = ({items}) => {
  useEffect(()=>{
    Aos.init({ duration: 2000})
  },[])
   const {id} = useParams();
   console.log(id)
    return (
      <div>
        
        {
          items.filter(item => item.id == id ).map((item)=>{
            return <div className="portfolio" key={item.id}>
              <div data-aos="zoom-in-left" 
                data-aos-mirror="true"
                data-aos-once="true"
                 className="name">
                <h1 data-aos="zoom-in-left" 
                data-aos-mirror="true"
                data-aos-once="true"
                className="titulo-1"><h1>{item.name}</h1></h1>
                <div className="description"><h2>DESCRIPCION:</h2><p>{item.description}</p></div>
                <div className="tecnologias"><h2>TECNOLOGIAS:</h2>{item.tecnologias}</div>
                <h2>GITHUB:</h2><div className="github">{item.github}</div>
              </div>
              <div className="gallery-img">
                  <div  className="imagen-data">
                    <h1  className="font">01</h1>
                  <img data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-once="true" 
                src={item.imagen1} alt="" />
                  </div>
                  <div  className="imagen-data">
                  <img data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-once="true" src={item.imagen2} alt="" />
                  </div>
                  <div  className="imagen-data">
                  <img data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-once="true"
                  className="imagen3" src={item.imagen3} alt="" />
                  </div>
                  <div  className="imagen-data">
                  <img data-aos="fade-left"  className="imagen3" src={item.imagen4} alt="" />
                  </div>
                <p className="descripcion">
                  
                </p>
            
              </div>
            
              
            </div>
          
          })
          
         
          
        }
        <div>
        </div>
      </div>

     
    )

 
}



export default Portfolio
