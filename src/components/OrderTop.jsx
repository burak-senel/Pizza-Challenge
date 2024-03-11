import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function OrderTop() {
  return (
    <section className="header-section">
      <div className="header">
        <img src="./Assets/mile1-assets/logo.svg" />
        <div className="navigate" style={{ display: "flex" }}>
          <NavLink to="/" style={{ marginRight: "20px" }}>
            Anasayfa
          </NavLink>
          <NavLink disabled to="/OrderPizza">
            Sipariş Oluştur
          </NavLink>
        </div>
      </div>
    </section>
  );
}
