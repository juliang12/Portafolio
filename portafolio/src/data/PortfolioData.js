import weather1 from "../images/img1.jpg"
import weather2 from "../images/img2.jpg"
import weather3 from "../images/img3.jpg"
import weather4 from "../images/weather4.png"
import weather5 from "../images/weather5.png"
import web1 from "../images/webFit/img1.png"
import web2 from "../images/webFit/movil1.jpg"
import web3 from "../images/webFit/web2.jpg"


const PortfolioData = () => [
         {
    id: 1,
    name: "AppWeather",
    imagen1: weather1,
    imagen2: weather2,
    imagen3: weather3,
    imagen4: weather4,
    imagen5: weather5,
    description: "Es una App del clima desarrolada en React js, en el cual muestra el clima en 6 horarios diferentes, cambia su background acorde al tiempo",
    tecnologias: "React, HTML, CSS, Javascript",
    github: <a href="https://github.com/juliang12/weather"><i class="fab fa-github"></i></a>,

    },
    {
        id: 2,
        name: "Web Fitness",
        imagen1: web1,
        imagen2: web2,
        imagen3: web3,
        description: "Es una Pagina web Fitness desarrollada en React js, esta adaptada en dispositivos moviles",
        tecnologias: "React, HTML, CSS, Javascript",
        github: <a href="https://github.com/juliang12/weather"><i class="fab fa-github"></i></a>,
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

    export default PortfolioData