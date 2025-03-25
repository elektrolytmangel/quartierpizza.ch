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
    <div className="relative md:w-full flex flex-col md:h-screen bg-gray-100 md:bg-transparent">
      <div className="w-screen md:w-full h-full overflow-hidden">
        <img
          src={pizzaNapoOven}
          alt="Pizza Napo Oven"
          className="object-cover w-full h-full md:absolute"
        />
      </div>
      <div className="top-0 absolute flex flex-col gap-5 justify-center items-center w-full">
        <div className="py-3 md:py-10 px-5 md:px-20  md:m-10 flex flex-col items-center justify-center text-white z-20 md:border md:border-gray-700 md:bg-linear-to-tr md:opacity-90 md:from-black md:to-transparent">
          <h3 className="text-3xl font-bold font-serif text-center px-3 py-2 bg-black/40 rounded-full md:bg-transparent">
            {t("lucaAndMarcPresenting")}
          </h3>
          <h1 className="text-6xl mt-4 text-center">Quartier Pizza</h1>
        </div>
        <p className="hidden md:flex md:text-white md:bg-transparent font-serif text-3xl text-center z-20">
          {t("pizzaShortIntro")}
        </p>
      </div>
      <div className="hidden md:absolute bottom-5 md:flex justify-center w-full">
        <IconButton icon={iconArrowDown} onClick={props.onNextViewClick} />
      </div>
      <p className="md:hidden mt-5 mx-5 text-black bg-gray-100 font-serif text-3xl text-center z-20">
        {t("pizzaShortIntro")}
      </p>
    </div>
  );
};
