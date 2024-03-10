import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./Home.css"
export default function Home() {
    return (
        <div className="hero-container">
            <img className="hero-img" src="./Assets/mile1-assets/home-banner.png" />
            <img src="./Assets/mile1-assets/logo.svg" />
            <p className="text-3xl">KOD ACIKTIRIR PİZZA DOYURUR</p>
            <Link to="./OrderPizza">
                <button className="overlay-button">sdfdsf</button>
            </Link>
        </div>
    )


}