import { useState } from "react"
import Portfolio from "../components/Portfolio/Portfolio"
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
