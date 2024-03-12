import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";
export default function Home() {
  return (
    <div className="hero-page">
      <div className="hero-container">
        <img className="logo" src="./Assets/mile1-assets/logo.svg" />
        <p style={{ fontFamily: "Barlow Condensed", fontWeight: "100" }}>
          KOD ACIKTIRIR <br></br> PIZZA DOYURUR
        </p>
        <Link to="./OrderPizza">
          <button>ACIKTIM</button>
        </Link>
      </div>
    </div>
  );
}
