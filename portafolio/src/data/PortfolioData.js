import weather1 from "../images/appweather/desktop.jpg"
import weather2 from "../images/appweather/movil-1.jpg"
import weather3 from "../images/appweather/movil-2.jpg"
import weather4 from "../images/appweather/weather4.png"
import weather5 from "../images/appweather/weather5.png"
import web1 from "../images/webFit/img1.png"
import web2 from "../images/webFit/movil1.jpg"
import web3 from "../images/webFit/web2.jpg"
import app1 from "../images/ecommerce/app1.png"
import app2 from "../images/ecommerce/app2.png"
import app3 from "../images/ecommerce/app3.png"
import app4 from "../images/ecommerce/app4.png"
import app5 from "../images/ecommerce/app5.png"




const PortfolioData = () => [
         {
    id: 1,
    name: "AppWeather",
    imagen1: weather1,
    imagen2: weather2,
    imagen3: weather3,
    description: "appweather.paragraph",
    tecnologias: "React, HTML, CSS, Javascript",
    github: <a href="https://github.com/juliang12/weather"><i class="fab fa-github"></i></a>,

    },
    {
        id: 2,
        name: "Web Fitness",
        imagen1: web1,
        imagen2: web2,
        imagen3: web3,
        description: "fitness.paragraph",
        tecnologias: "React, HTML, CSS, Javascript",
        github: <a href="https://github.com/juliang12/webFit"><i class="fab fa-github"></i></a>,
        },
        {
            id: 3,
            name: "App Hamburguesas",
            imagen1: app1,
            imagen2: app2,
            imagen3: app3,
            imagen4: app4,
            imagen5: app5,
            description: "Es una APP Ecommerce de Hamburguesas, contiene un carrito de compras y una cuenta de usuarios.",
            tecnologias: "React, HTML, CSS, Javascript",
            github: <a href="https://appecommerce.netlify.app/"><i class="fab fa-react"></i></a>,
            },
            
    ]

    export default PortfolioData