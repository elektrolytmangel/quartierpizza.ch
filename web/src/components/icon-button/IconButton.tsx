import React from "react";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <button
      className="bg-white text-black rounded-full p-3 hover:bg-gray-100 active:bg-gray-200 transition duration-200"
      {...props}
    >
      <img src={icon} alt="Icon" />
    </button>
  );
};

export default IconButton;
