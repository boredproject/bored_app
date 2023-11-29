// ButtonSelection.tsx
"use client;";

import React from "react";
import IdeaButton from "./IdeaButtonSingle/IdeaButton";
import Link from "next/link";

const ButtonSelection = () => {
  return (
    <div className="flex flex-col w-screen z-0">
      <div className="lg:flex lg:flex-row lg:justify-evenly hidden flex-col lg:gap-44">
        <Link href="/productpage">
          <IdeaButton type="svg1" textspin="spinnersvg1" />{" "}
          {/* Vous pouvez changer le type ici */}
        </Link>
        <IdeaButton type="svg2" textspin="spinnersvg2" />{" "}
        {/* Vous pouvez changer le type ici */}
        <IdeaButton type="svg3" textspin="spinnersvg3" />{" "}
        {/* Vous pouvez changer le type ici */}
      </div>
      <div className="lg:hidden flex h-screen w-screen flex-col justify-center items-center">
        <div className="flex md:flex-row md:gap-64 flex-col justify-between gap-52">
          <IdeaButton type="svg1" textspin="spinnersvg1" />{" "}
          {/* Vous pouvez changer le type ici */}
          <IdeaButton type="svg2" textspin="spinnersvg2" />{" "}
          {/* Vous pouvez changer le type ici */}
          <IdeaButton type="svg3" textspin="spinnersvg3" />{" "}
          {/* Vous pouvez changer le type ici */}
        </div>
      </div>
    </div>
  );
};

export default ButtonSelection;
