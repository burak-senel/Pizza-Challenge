import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../Assets/mile1-assets/logo.svg";

export default function OrderTop() {
  return (
    <section className="header-section">
      <div className="header">
        <img src={logo} />
        <div className="navigate" style={{ display: "flex" }}>
          <NavLink to="/" style={{ fontWeight: "300", marginRight: "20px" }}>
            Anasayfa
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", cursor: "auto" }}
            disabled
            to="/OrderPizza"
          >
            Sipariş Oluştur
          </NavLink>
        </div>
      </div>
    </section>
  );
}
