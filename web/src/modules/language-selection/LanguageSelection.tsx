import { useTranslation } from "react-i18next";

export const LanguageSelection = () => {
  const { i18n } = useTranslation();
  const handleLanguageSelect = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const availableLanguages = Object.keys(i18n.store.data);
  return (
    <div className={`flex items-center space-x-4 z-30`}>
      {availableLanguages.map((language) => (
        <button
          key={language}
          onClick={() => handleLanguageSelect(language)}
          className={`text-white hover:underline focus:outline-none transition-colors ${
            i18n.language === language ? "font-bold" : "font-normal"
          }`}
          aria-current={i18n.language === language ? "page" : undefined}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
