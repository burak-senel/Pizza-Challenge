import OrderTop from "./OrderTop";
import { malzemeler } from "./PizzaMalzemeler";

export default function Order() {
  return (
    <>
      <OrderTop />

      <section className="main-section">
        <div className="product">
          <h3>Position Absolute Acı Pizza</h3>
          <h2>85.50₺</h2>
          <span>4.9</span>
          <span>(200)</span>
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
            <h3>
              Boyut Seç<span>*</span>
            </h3>
            <div className="product-size">
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
                Hamur Seç<span>*</span>
              </h3>
              <select id="pastry" name="pastry">
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
            {malzemeler.map((malzeme, index) => (
              <div className="additions" key={index}>
                <input type="checkbox" id={malzeme} name={malzeme} />
                <label htmlFor={malzeme}>{malzeme}</label>
              </div>
            ))}
          </div>
        </form>
      </section>
    </>
  );
}
