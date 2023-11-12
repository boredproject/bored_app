"use client";

import React from "react";
import "./wave.css";

const WaveFooter = () => {
  return (
    <div className="w-full z-50">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(94, 43, 255, 0.2)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255, 255, 255, 1)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(94, 43, 255, 0.4)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#5E2BFF" />
          </g>
        </svg>
        <div className="fixed bottom-0 text-middle flex flex-col align-center justify-center w-full text-center uppercase gap-2 pb-2">
            <p>
                All rights reserved ©
            </p>
            <p>
                <span className="text-[#26E8A0] font-bold">HETIC</span> students 2024
            </p>
          </div>
    </div>
  );
};

export default WaveFooter;
