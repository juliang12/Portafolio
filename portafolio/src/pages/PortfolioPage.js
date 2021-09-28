import { useState } from "react"
import Banner from "../components/Banner"
import Portfolio from "../components/Portfolio"
import Secciones from "../components/Secciones"
import PortfolioData from "../data/PortfolioData"


const PortfolioPage = () => {
  const [items, setItems] = useState(PortfolioData);
    return (
        <div className="portfolio">
          <div className="title">
            <div className="portfolios">
              <Portfolio items={items}/>
            </div>
          </div>
        </div>
        
    )
}

export default PortfolioPage
