import { useLocation } from "react-router-dom";
import "./Success.css";
export default function Success() {
  const location = useLocation();
  const { responseData } = location.state;
  return (
    <section className="success">
      <div className="success-container">
        <img
          className="logo-success"
          src="./Assets/mile1-assets/logo.svg"
          alt="Logo"
        />
        <p className="order-oyw">lezzetin yolda</p>
        <p className="order-completed">SİPARİŞ ALINDI</p>
        <span className="seperator-success"></span>
        <h3>Position Absolute Pizza</h3>
        <div className="success-spec">
          <p>
            Boyut:{" "}
            <span style={{ fontWeight: "500" }}>{responseData.size}</span>
          </p>
          <p>
            Hamur:
            <span style={{ fontWeight: "500" }}>{responseData.pastry}</span>
          </p>
          <p>
            Ek Malzemeler:{" "}
            <span style={{ fontWeight: "500" }}>
              {responseData.malzeme.map((malzeme, index) => {
                const suffix =
                  index === responseData.malzeme.length - 1 ? "" : ", ";
                return malzeme + suffix;
              })}
            </span>
          </p>
        </div>
        <section className="success-totalShow">
          {" "}
          <div className="orderSum">
            <h3>Sipariş Toplamı</h3>
            <div className="orderTotal">
              <div className="orderTotal-left">
                <p>Seçimler</p>
                <p>Toplam</p>
              </div>
              <div className="orderTotal-right">
                <p>{responseData.additionPrice}₺</p>
                <p>{responseData.price}₺</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
