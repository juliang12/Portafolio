import React, { useState } from 'react'
import PortfolioPage from '../pages/PortfolioPage'
import Portfolio from './Portfolio'
import Secciones from './Secciones'

const Trabajos = () => {
    const trabajos = [{
    id: 1,
    name: "Proyecto 1",
    imagen: "https://placeimg.com/400/400/nature",
    description: "Es un trabajo hecho..."
    },
    {
        id: 2,
        name: "Proyecto 2",
        imagen: "https://placeimg.com/400/400/nature",
        description: "Es un trabajo hecho..."
        },
        {
            id: 3,
            name: "Proyecto 3",
            imagen: "https://placeimg.com/400/400/nature",
            description: "Es un trabajo hecho..."
            },
            {
                id: 4,
                name: "Proyecto 4",
                imagen: "https://placeimg.com/400/400/nature",
                description: "Es un trabajo hecho..."
                },
    ]

    const [state, setState] = useState(trabajos)
    return (
        <div>
          <PortfolioPage data={state}/>
          <Secciones data={state}/>
        </div>
    )
}

export default Trabajos


