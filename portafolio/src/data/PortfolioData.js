import weather1 from "../images/appweather/desktop.jpg"
import weather2 from "../images/appweather/movil-1.jpg"
import weather3 from "../images/appweather/movil-2.jpg"
import web1 from "../images/webresponsive/img1.jpg"
import web2 from "../images/webresponsive/img2.jpg"
import web3 from "../images/webresponsive/movil-2.jpg"
import web4 from "../images/webresponsive/movil1.jpg"
import app1 from "../images/ecommerce/app1.png"
import app2 from "../images/ecommerce/app2.png"
import app3 from "../images/ecommerce/app3.png"
import app4 from "../images/ecommerce/app4.png"
import app5 from "../images/ecommerce/app5.png"
import preview1 from "../images/preview/preview1.jpg"
import preview2 from "../images/preview/preview2.jpg"
import preview3 from "../images/preview/preview3.jpg"
import preview4 from "../images/preview/previewMarket.jpg"
import form from "../images/form/markets.jpg"
import form1 from "../images/form/markets1.jpg"
import form2 from "../images/form/markets2.jpg"
import form3 from "../images/form/markets3.jpg"
import form4 from "../images/form/movil.jpg"
import form5 from "../images/form/movil2.jpg"


const PortfolioData = () => [
         {
    id: 1,
    name: "AppWeather",
    preview: preview1,
    imagen1: weather1,
    imagen2: weather2,
    imagen3: weather3,
    description: "appweather.paragraph",
    tecnologias: "React, HTML, CSS, Javascript",
    github: <a href="https://github.com/juliang12/weather"><i class="fab fa-github"></i></a>,

    },
    {
        id: 2,
        name: "Web Responsive",
        preview: preview2,
        imagen1: web1,
        imagen2: web2,
        imagen3: web3,
        imagen4: web4,
        description: "fitness.paragraph",
        tecnologias: "React, HTML, CSS, Javascript",
        github: <a href="https://github.com/juliang12/webFit"><i class="fab fa-github"></i></a>,
        },
        {
            id: 3,
            name: "App Hamburguesas",
            preview: preview3,
            imagen1: app1,
            imagen2: app2,
            imagen3: app3,
            imagen4: app4,
            imagen5: app5,
            description: "Es una APP Ecommerce de Hamburguesas, contiene un carrito de compras y una cuenta de usuarios.",
            tecnologias: "React, HTML, CSS, Javascript",
            github: <a href="https://appecommerce.netlify.app/"><i class="fab fa-react"></i></a>,
            },
            {
                id: 4,
                name: "Form Multi step",
                preview: preview4,
                imagen1: form,
                imagen2: form1,
                imagen3: form2,
                imagen4: form3,
                imagen5: form4,
                imagen6: form5,
                description: "markets.paragraph",
                tecnologias: "React, HTML, CSS, Javascript",
                // github: <a href="https://appecommerce.netlify.app/"><i class="fab fa-react"></i></a>,
                },
            
    ]

    export default PortfolioData