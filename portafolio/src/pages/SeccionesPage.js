import { useState } from "react";
import Secciones from "../components/Secciones"
import PortfolioData from "../data/PortfolioData"


const SeccionesPage = () => {
    const [sections, setSections] = useState(PortfolioData);
    return (
        <div>
            <Secciones data={sections}/>
        </div>
    )
}


export default SeccionesPage
