"use client";

import React from "react";
import Image from "next/image";
import MainButton from "../CTA/MainButton/MainButton";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex items-center justify-between mx-auto p-5 fixed cursor w-screen">
        <div className="flex flex-row">
        <Link href="/">
          <MainButton />
        </Link>
        </div>
        <div className="flex flex-row">
          <svg
            className="cursor transition-transform transform-gpu active:scale-150"
            width="28"
            height="28"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 7C6.0375 7 5.21354 6.65729 4.52812 5.97187C3.84271 5.28646 3.5 4.4625 3.5 3.5C3.5 2.5375 3.84271 1.71354 4.52812 1.02813C5.21354 0.342708 6.0375 0 7 0C7.9625 0 8.78646 0.342708 9.47187 1.02813C10.1573 1.71354 10.5 2.5375 10.5 3.5C10.5 4.4625 10.1573 5.28646 9.47187 5.97187C8.78646 6.65729 7.9625 7 7 7ZM0 14V11.55C0 11.0542 0.12775 10.5983 0.38325 10.1824C0.63875 9.76646 0.977666 9.44942 1.4 9.23125C2.30417 8.77917 3.22292 8.43996 4.15625 8.21363C5.08958 7.98729 6.0375 7.87442 7 7.875C7.9625 7.875 8.91042 7.98817 9.84375 8.2145C10.7771 8.44083 11.6958 8.77975 12.6 9.23125C13.0229 9.45 13.3621 9.76733 13.6176 10.1832C13.8731 10.5992 14.0006 11.0548 14 11.55V14H0Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
