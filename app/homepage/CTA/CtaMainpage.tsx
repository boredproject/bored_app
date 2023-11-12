"use client";

import React from "react";
import SpinningText from "./SpinningText/SpinningText";
import MainButton from "./MainButton/MainButton";

const CtaMainpage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div>
        <SpinningText />
      </div>
      <div className="fixed">
        <MainButton />
      </div>
    </div>
  );
};

export default CtaMainpage;
