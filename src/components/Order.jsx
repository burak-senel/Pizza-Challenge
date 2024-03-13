import { useEffect, useState } from "react";
import OrderTop from "./OrderTop";
import { malzemeler } from "./PizzaMalzemeler";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialForm = {
  size: "",
  pastry: "",
  malzeme: [],
  name: "",
  note: "",
  price: 0,
  additionPrice: 0,
  xPiece: 0,
};
const price = 85.5;
//parseFloat(price)
export default function Order() {
  const [formData, setFormData] = useState(initialForm);
  const [newPrice, setNewPrice] = useState(price);
  const [additionPrice, setAdditionPrice] = useState(0);
  const [xPiece, setxPiece] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [sizePrice, setSizePrice] = useState(0);

  useEffect(() => {
    setAdditionPrice(formData.malzeme.length * 5);
    const calculatedPrice =
      (sizePrice + price + formData.malzeme.length * 5) * xPiece;
    setNewPrice(calculatedPrice);
    setFormData((prevData) => ({
      ...prevData,
      price: calculatedPrice,
      additionPrice: additionPrice,
      xPiece: xPiece,
    }));
  }, [formData.malzeme, xPiece, sizePrice]);

  const validateForm = () => {
    return (
      formData.name.trim().length >= 3 &&
      formData.pastry &&
      formData.size &&
      formData.malzeme.length >= 4 &&
      formData.malzeme.length <= 10
    );
  };

  useEffect(() => {
    setIsValid(validateForm());
  }, [formData]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
  };
  const handleMalzemeler = (event) => {
    const { value, checked } = event.target;
    let yeniMalzemeler;
    if (checked) {
      yeniMalzemeler = [...formData.malzeme, value];
    } else {
      yeniMalzemeler = formData.malzeme.filter((item) => item !== value);
    }
    setFormData({ ...formData, ["malzeme"]: yeniMalzemeler });
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        console.log("API Response:", response.data);
        setFormData(initialForm);
        history.push("/success", { responseData: response.data });
      })
      .catch((error) => {
        console.error("API Request Error:", error);
      });
  };
  const handleSizePrice = () => {
    if (formData.size === "Büyük") {
      setSizePrice(35);
    } else if (formData.size === "Orta") {
      setSizePrice(25);
    } else if (formData.size === "Küçük") {
      setSizePrice(0);
    }
  };

  useEffect(() => {
    handleSizePrice(formData.size);
  }, [formData.size]);

  const handlePricePlus = () => {
    setxPiece(xPiece + 1);
  };
  const handlePriceMinus = () => {
    setxPiece(xPiece - 1);
    if (xPiece <= 1) {
      setxPiece(1);
    }
  };
  return (
    <>
      <OrderTop />

      <section className="main-section">
        <div className="product">
          <h3>Position Absolute Acı Pizza</h3>
          <div className="price">
            {" "}
            <h2>{price}₺</h2>
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
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="product-size">
              <h3>
                Boyut Seç<span className="yildiz"> *</span>
              </h3>

              <label>
                <input
                  type="radio"
                  name="size"
                  value="Küçük"
                  onChange={handleChange}
                  checked={formData.size == "Küçük"}
                />
                Küçük
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="Orta"
                  onChange={handleChange}
                  checked={formData.size == "Orta"}
                />
                Orta (+15₺)
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="Büyük"
                  onChange={handleChange}
                  checked={formData.size == "Büyük"}
                />
                Büyük (+25₺)
              </label>
            </div>

            <div className="product-pastry">
              <h3 htmlFor="pastry">
                Hamur Seç<span className="yildiz"> *</span>
              </h3>
              <select
                value={formData.pastry}
                id="pastry"
                name="pastry"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Hamur Kalınlığı
                </option>
                <option value="İnce">İnce</option>
                <option value="Standart">Standart</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </fieldset>
          <div className="additions-container">
            <h3>Ek Malzemeler</h3>

            <p>
              En az 4, en fazla 10 malzeme seçebilirsiniz. (Her biri ekstra 5₺)
            </p>

            <div className="checkbox-container">
              {malzemeler.map((malzeme, index) => (
                <div className="additions" key={index}>
                  <input
                    type="checkbox"
                    id={`malzeme${index}`}
                    name="malzeme"
                    onChange={handleMalzemeler}
                    value={malzeme}
                    checked={formData.malzeme.includes(malzeme)}
                  />

                  <label className="checkbox-label" htmlFor={`malzeme${index}`}>
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
                onChange={handleChange}
                value={formData.name}
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
                onChange={handleChange}
                value={formData.note}
              />
            </div>
          </section>
          <div className="seperator"></div>
          <section className="order-spec">
            <div className="orderCount">
              <button
                type="button"
                onClick={handlePriceMinus}
                className="minus"
                disabled={xPiece === 1}
              >
                -
              </button>
              <span>{xPiece}</span>
              <button type="button" onClick={handlePricePlus} className="plus">
                +
              </button>
            </div>
            <div className="orderSum-container">
              {" "}
              <div className="orderSum">
                <h3>Sipariş Toplamı</h3>
                <div className="orderTotal">
                  <div className="orderTotal-left">
                    <p style={{ fontWeight: 500 }}>Seçimler</p>
                    <p style={{ color: "#CE2829", fontWeight: 500 }}>Toplam</p>
                  </div>
                  <div className="orderTotal-right">
                    <p style={{ fontWeight: 500 }}>{additionPrice}₺</p>
                    <p style={{ color: "#CE2829", fontWeight: 500 }}>
                      {newPrice}₺
                    </p>
                  </div>
                </div>
              </div>
              <button disabled={!isValid} className="order-button">
                SİPARİŞ VER
              </button>
            </div>
          </section>
        </form>
      </section>
    </>
  );
}
