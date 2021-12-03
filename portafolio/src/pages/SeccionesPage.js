import { useState } from "react";
import Secciones from "../components/Sections/Sections"
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
