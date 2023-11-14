"use client";

import React from "react";
import SpinningText from "./SpinningText/SpinningText";
import MainButton from "./MainButton/MainButton";
import Link from "next/link";

const CtaMainpage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div>
        <SpinningText />
      </div>
      <div className="fixed">
        <Link href="/selection">
          <MainButton />
        </Link>
      </div>
    </div>
  );
};

export default CtaMainpage;
