import { useTranslation } from "react-i18next"
import "../Footer/Footer.css"

const Footer = () => {
    const [t] = useTranslation("global")
    return (
        <footer>
            <span>{t("footer.copyright")}</span>
        </footer>
    )
}

export default Footer
