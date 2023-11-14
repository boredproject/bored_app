// IdeaButton.tsx
"use client;";

import React from "react";
import ButtonSVG from "../IdeaButtonSVG/ButtonSVG";
import SpinnerButtonSVG from "../SpinnerButtonSVG/SpinnerButtonSVG";

interface IdeaButtonProps {
  type: "svg1" | "svg2" | "svg3";
  textspin: "spinnersvg1" | "spinnersvg2" | "spinnersvg3";
}

const IdeaButton: React.FC<IdeaButtonProps> = ({ type, textspin }) => {
  return (
    <div className="lg:min-h-screen flex items-center justify-center md:scale-75 scale-50 lg:scale-100 lg:hover:scale-110 transition-all ease-in duration-500">
      <div className="fixed">
        <SpinnerButtonSVG type={textspin} />
      </div>
      <div className="w-64 h-64 bg-transparent border-4 border-[#5E2BFF] rounded-full flex items-center justify-center lg:hover:border-white hover:bg-[#5e2bff] duration-500 fixed">
        <ButtonSVG type={type} />
      </div>
    </div>
  );
};

export default IdeaButton;
