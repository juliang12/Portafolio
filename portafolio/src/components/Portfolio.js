import "./Portfolio.css"
import React from 'react';
import {Link, useParams } from "react-router-dom";
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
              <div data-aos="fade-out" className="name">
                <h1 data-aos="fade-right" className="titulo-1">{item.name}</h1>
                <h2>DESCRIPCION:</h2>{item.description}
                <div><h2>TECNOLOGIAS USADAS:</h2>{item.tecnologias}</div>
                <h2>GITHUB:</h2><div className="github">{item.github}</div>
              </div>
              <div className="gallery-img">
                  <div  className="imagen-data">
                    <h1 data-aos="fade-out" className="font">01</h1>
                  <img data-aos="fade-left" src={item.imagen1} alt="" />
                  </div>
                  <div  className="imagen-data">
                  <h1 data-aos="fade-out" className="font">02</h1>
                  <img data-aos="fade-right" src={item.imagen2} alt="" />
                  </div>
                  <div  className="imagen-data">
                  <h1 data-aos="fade-out" className="font">03</h1>
                  <img data-aos="fade-left"  className="imagen3" src={item.imagen3} alt="" />
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
