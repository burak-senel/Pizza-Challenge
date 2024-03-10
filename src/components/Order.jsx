import OrderTop from "./OrderTop";
import { malzemeler } from "./PizzaMalzemeler";

export default function Order() {
  return (
    <>
      <OrderTop />

      <section className="main-section">
        <div className="product">
          <h3>Position Absolute Acı Pizza</h3>
          <div className="price">
            {" "}
            <h2>85.50₺</h2>
            <span className="rate">4.9</span>
            <span>(200)</span>
          </div>

          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta
            denir.{" "}
          </p>
        </div>
        <form>
          <fieldset>
            <div className="product-size">
              <h3>
                Boyut Seç<span className="yildiz"> *</span>
              </h3>

              <label>
                <input type="radio" name="size" value="kucuk" />
                Küçük
              </label>
              <label>
                <input type="radio" name="size" value="orta" />
                Orta
              </label>
              <label>
                <input type="radio" name="size" value="buyuk" />
                Büyük
              </label>
            </div>

            <div className="product-pastry">
              <h3 htmlFor="pastry">
                Hamur Seç<span className="yildiz"> *</span>
              </h3>
              <select id="pastry" name="pastry">
                <option value="" selected disabled hidden>
                  Hamur Kalınlığı
                </option>
                <option value="thin">İnce</option>
                <option value="standard">Standart</option>
                <option value="thick">Kalın</option>
              </select>
            </div>
          </fieldset>
          <div>
            <h3>Ek Malzemeler</h3>
            <p>
              En az 4, en fazla 10 malzeme seçebilirsiniz. (Her biri ekstra 5₺)
            </p>
            <div className="checkbox-container">
              {malzemeler.map((malzeme, index) => (
                <div className="additions" key={index}>
                  <input type="checkbox" id={malzeme} name={malzeme} />
                  <label className="checkbox-label" htmlFor={malzeme}>
                    {malzeme}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <section className="infos">
            <div className="name">
              {" "}
              <h3>Adınız:</h3>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Siparişini teslim edebilmemiz için adını gir"
              />
            </div>
            <div className="note">
              {" "}
              <h3>Sipariş Notu</h3>
              <input
                type="text"
                name="note"
                id="note"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </div>
          </section>
          <div className="seperator"></div>
          <section className="order-spec">
            <div className="orderCount">
              <button>-</button>
              <span>total sipariş</span>
              <button>+</button>
            </div>
            <div className="orderSum-container">
              {" "}
              <div className="orderSum">
                <h3>Sipariş Toplamı</h3>
                <div className="orderTotal">
                  <div className="orderTotal-left">
                    <p>Seçimler</p>
                    <p>Toplam</p>
                  </div>
                  <div className="orderTotal-right">
                    <p>addition total</p>
                    <p>genel total</p>
                  </div>
                </div>
              </div>
              <button className="order-button">SİPARİŞ VER</button>
            </div>
          </section>
        </form>
      </section>
    </>
  );
}
