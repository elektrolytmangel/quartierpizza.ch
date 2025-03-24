import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import imgContact from "./assets/images/contact.jpg";
import imgDough from "./assets/images/dough.jpg";
import imgIngredients from "./assets/images/ingredients.jpg";
import imgPizza from "./assets/images/pizza.jpg";
import Footer from "./modules/footer/Footer";
import { Introduction } from "./modules/introduction/Introduction";
import { TextImageBox } from "./modules/text-image-box/TextImageBox";

function App() {
  const { t } = useTranslation();
  const firstViewRef = useRef<HTMLDivElement>(null);

  const handleNextViewClick = () => {
    if (firstViewRef.current) {
      firstViewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-auto h-screen">
      <Introduction onNextViewClick={handleNextViewClick} />
      <TextImageBox
        ref={firstViewRef}
        titel={t("fireAndDough")}
        text={t("fireAndDoughText")}
        img={imgDough}
      />
      <TextImageBox
        titel={t("ourPizzas")}
        text={t("ourPizzasText")}
        img={imgPizza}
        ltr={true}
      />
      <TextImageBox
        titel={t("ourValues")}
        text={t("ourValuesText")}
        img={imgIngredients}
      />
      <TextImageBox
        titel={t("contactUs")}
        text={t("contactUsText")}
        img={imgContact}
        ltr={true}
      />
      <Footer />
    </div>
  );
}

export default App;
