"use client";

import React from "react";
import styles from "../SpinningTextSelec/SpinningTextSelec.module.css";

type SVGType = "spinnersvg1" | "spinnersvg2" | "spinnersvg3";

interface MySVGComponentProps {
  type: SVGType;
}

const spinnersvg1 = (
  <svg
    className="md:animate-spin-very-slow transition-all"
    id="skyrim"
    viewBox="0 0 100 100"
    width="400"
    height="400"
  >
    <defs>
      <path
        id="circle"
        d="
                M 50, 50
                m -35, 0
                a 35,35 0 1,1 70,0
                a 35,35 0 1,1 -70,0"
      />
    </defs>
    <text
      fill="white"
      fontWeight="bold" // Utilise camelCase pour les propriétés CSS
      fontSize="7"
      letterSpacing="1.1"
      fontFamily="'Inter', sans-serif"
    >
      <textPath xlinkHref="#circle">
        WANNA
        <tspan className={styles.customColor}>EAT?</tspan>
        WANNA
        <tspan className={styles.customColor}>EAT?</tspan>
        WANNA
        <tspan className={styles.customColor}>EAT?</tspan>
        WANNA
        <tspan className={styles.customColor}>EAT?</tspan>
        WANNA
        <tspan className={styles.customColor}>EAT?</tspan>
        WANNA
        <tspan className={styles.customColor}>EAT?</tspan>
      </textPath>
    </text>
  </svg>
);

const spinnersvg2 = (
  <svg
    className="md:animate-spin-very-slow transition-all"
    id="skyrim"
    viewBox="0 0 100 100"
    width="400"
    height="400"
  >
    <defs>
      <path
        id="circle"
        d="
                M 50, 50
                m -35, 0
                a 35,35 0 1,1 70,0
                a 35,35 0 1,1 -70,0"
      />
    </defs>
    <text
      fill="white"
      fontWeight="bold" // Utilise camelCase pour les propriétés CSS
      fontSize="7"
      letterSpacing="0.7"
      fontFamily="'Inter', sans-serif"
    >
      <textPath xlinkHref="#circle">
        SOMETHING
        <tspan className={styles.customColor}>NEW?</tspan>
        SOMETHING
        <tspan className={styles.customColor}>NEW?</tspan>
        SOMETHING
        <tspan className={styles.customColor}>NEW?</tspan>
      </textPath>
    </text>
  </svg>
);

const spinnersvg3 = (
  <svg
    className="md:animate-spin-very-slow transition-all"
    id="skyrim"
    viewBox="0 0 100 100"
    width="400"
    height="400"
  >
    <defs>
      <path
        id="circle"
        d="
                M 50, 50
                m -35, 0
                a 35,35 0 1,1 70,0
                a 35,35 0 1,1 -70,0"
      />
    </defs>
    <text
      fill="white"
      fontWeight="bold" // Utilise camelCase pour les propriétés CSS
      fontSize="7"
      letterSpacing="0.85"
      fontFamily="'Inter', sans-serif"
    >
      <textPath xlinkHref="#circle">
        FEELING
        <tspan className={styles.customColor}>FREAKY?</tspan>
        FEELING
        <tspan className={styles.customColor}>FREAKY?</tspan>
        FEELING
        <tspan className={styles.customColor}>FREAKY?</tspan>
      </textPath>
    </text>
  </svg>
);

const MySVGComponent: React.FC<MySVGComponentProps> = ({ type }) => {
  let svgContent;

  switch (type) {
    case "spinnersvg1":
      svgContent = spinnersvg1;
      break;
    case "spinnersvg2":
      svgContent = spinnersvg2;
      break;
    case "spinnersvg3":
      svgContent = spinnersvg3;
      break;
    default:
      svgContent = spinnersvg1; // Default to svg1 if type is not recognized
  }

  return <>{svgContent}</>;
};

export default MySVGComponent;
