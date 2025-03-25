import React from "react";
import { LanguageSelection } from "../language-selection/LanguageSelection";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white mt-10 pt-15 pb-10">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl">Quartier Pizza</h3>
        <p>Delicious pizza made with love in your neighborhood.</p>
        <p>
          &copy; {new Date().getFullYear()} Quartier Pizza. All rights reserved.
        </p>
        <p className="text-xl mt-10">Contact Us</p>
        <a href="mailto:info@quartierpizza.ch" className="mb-5">
          info@quartierpizza.ch
        </a>
        <LanguageSelection />
      </div>
    </footer>
  );
};

export default Footer;
