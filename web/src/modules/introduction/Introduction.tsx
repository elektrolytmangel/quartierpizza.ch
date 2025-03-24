import { useTranslation } from "react-i18next";
import iconArrowDown from "../../assets/icons/arrow_downward_24dp_black.svg";
import pizzaNapoOven from "../../assets/images/pizza-napo-oven.jpg";
import IconButton from "../../components/icon-button/IconButton";

type Props = {
  onNextViewClick: () => void;
};

export const Introduction = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex flex-col h-screen">
      <img
        src={pizzaNapoOven}
        alt="Pizza Napo Oven"
        className="w-full h-full absolute -z-10"
      />
      <div className=" top-0 flex justify-center items-center w-full">
        <div
          className="py-10 px-20 m-10 flex flex-col items-center justify-center text-white z-20 border border-gray-700"
          style={{
            backgroundImage: `radial-gradient(circle at center, transparent, black 90%)`,
          }}
        >
          <h3 className="text-3xl font-bold font-serif">
            {t("lucaAndMarcPresenting")}
          </h3>
          <h1 className="text-6xl mt-4">Quartier Pizza</h1>
        </div>
      </div>
      <div>
        <p className="text-white font-serif text-3xl text-center z-20">
          {t("pizzaShortIntro")}
        </p>
      </div>
      <div className="absolute bottom-5 flex justify-center w-full">
        <IconButton icon={iconArrowDown} onClick={props.onNextViewClick} />
      </div>
    </div>
  );
};
