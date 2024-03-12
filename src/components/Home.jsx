import React, { useState } from "react";
import { Link } from "react-router-dom";
import gif from "./gif.gif"; // GIF dosyasının yolu
import "./Home.css";

export default function Home() {
  const [showGif, setShowGif] = useState(false);

  return (
    <div className="hero-page">
      <div className="hero-container">
        <img className="logo" src="./Assets/mile1-assets/logo.svg" alt="Logo" />
        <p style={{ fontFamily: "Barlow Condensed", fontWeight: "100" }}>
          KOD ACIKTIRIR <br /> PIZZA DOYURUR
        </p>
        <Link to="./OrderPizza" className="button-link">
          <button
            className="button"
            onMouseEnter={() => setShowGif(true)}
            onMouseLeave={() => setShowGif(false)}
          >
            ACIKTIM
            <img src={gif} className="gif" alt="GIF" />
          </button>
        </Link>
      </div>
    </div>
  );
}
