import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white p-10">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl">Quartier Pizza</h3>
          <p>Delicious pizza made with love in your neighborhood.</p>
          <p>
            &copy; {new Date().getFullYear()} Quartier Pizza. All rights
            reserved.
          </p>
          <p className="text-xl mt-5">Contact Us</p>
          <p>
            Email:{" "}
            <a href="mailto:info@quartierpizza.ch">info@quartierpizza.ch</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
