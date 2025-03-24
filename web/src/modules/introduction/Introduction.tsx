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
    <div className="relative w-full flex flex-col md:h-screen">
      <img
        src={pizzaNapoOven}
        alt="Pizza Napo Oven"
        className="md:w-full md:h-full md:absolute -z-10"
      />
      <div className="top-0 absolute flex flex-col gap-5 justify-center items-center w-full">
        <div className="py-3 md:py-10 px-5 md:px-20 m-2 md:m-10 flex flex-col items-center justify-center text-white z-20 border border-gray-700 bg-linear-to-tr opacity-90 from-black to-transparent">
          <h3 className="text-3xl font-bold font-serif text-center">
            {t("lucaAndMarcPresenting")}
          </h3>
          <h1 className="text-6xl mt-4 text-center">Quartier Pizza</h1>
        </div>
        <p className="text-black md:text-white py-1 px-2 rounded bg-white md:bg-transparent font-serif text-3xl text-center z-20">
          {t("pizzaShortIntro")}
        </p>
      </div>
      <div className="hidden md:absolute bottom-5 md:flex justify-center w-full">
        <IconButton icon={iconArrowDown} onClick={props.onNextViewClick} />
      </div>
    </div>
  );
};
