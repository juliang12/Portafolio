import React, { useState } from 'react'
import PortfolioPage from '../../pages/PortfolioPage'
import Secciones from '../Sections/Sections'

const Works = () => {
    const works = [{
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

    const [state, setState] = useState(works)
    return (
        <div>
          <PortfolioPage data={state}/>
          <Secciones data={state}/>
        </div>
    )
}

export default Works


