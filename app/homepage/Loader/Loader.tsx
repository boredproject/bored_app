"use client";

import React, { useState, useEffect, useRef } from "react";
import WaveFooter from "../Footer/WaveFooter";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleKeyPress = () => {
    setIsVisible(false);
  };

  const handleMouseClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyPress();
    };

    const handleClick = () => {
      handleMouseClick();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={`fixed z-40 w-full h-full bg-black flex flex-col justify-center items-center transition-opacity duration-2000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="px-2 max-w-screen-md mx-auto text-center uppercase font-bold md:text-2xl opacity-100">
        <div className="flex flex-row gap-2 justify-center align-middle text-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden"
          >
            <path
              d="M14.8 4.61286L21.501 15.7739C22.464 17.3769 21.991 19.4859 20.444 20.4839C19.9248 20.8201 19.3196 20.9992 18.701 20.9999H5.298C3.477 20.9999 2 19.4699 2 17.5809C2 16.9419 2.173 16.3169 2.498 15.7739L9.2 4.61286C10.162 3.00986 12.196 2.51886 13.743 3.51686C14.171 3.79286 14.533 4.16786 14.8 4.61286ZM12 16.9999C12.2652 16.9999 12.5196 16.8945 12.7071 16.707C12.8946 16.5194 13 16.2651 13 15.9999C13 15.7346 12.8946 15.4803 12.7071 15.2928C12.5196 15.1052 12.2652 14.9999 12 14.9999C11.7348 14.9999 11.4804 15.1052 11.2929 15.2928C11.1054 15.4803 11 15.7346 11 15.9999C11 16.2651 11.1054 16.5194 11.2929 16.707C11.4804 16.8945 11.7348 16.9999 12 16.9999ZM12 7.99986C11.7348 7.99986 11.4804 8.10522 11.2929 8.29275C11.1054 8.48029 11 8.73464 11 8.99986V12.9999C11 13.2651 11.1054 13.5194 11.2929 13.707C11.4804 13.8945 11.7348 13.9999 12 13.9999C12.2652 13.9999 12.5196 13.8945 12.7071 13.707C12.8946 13.5194 13 13.2651 13 12.9999V8.99986C13 8.73464 12.8946 8.48029 12.7071 8.29275C12.5196 8.10522 12.2652 7.99986 12 7.99986Z"
              fill="white"
            />
          </svg>
          <h1 className="text-3xl font-bold pb-5">WARNING-HEALTH AND SAFETY</h1>
        </div>
        <h2>
          Before playing, read your operations manual for important information
          about your health and safety.
        </h2>
        <p>This fantastic website was created with the help of</p>
        <p className="pb-5">
          Icham , Samy , Victor , Alexis , Wissem , Maxime , Jean
        </p>
        <p className="normal-case">SFX can be found at</p>
        <p className="pb-20 lowercase">https://github.com/boredproject</p>
        <p className="animate-bounce-slow">
          Press
          <span className="bg-transparent border-2 border-white text-white p-2 rounded-full">
            any key
          </span>
          to continue
        </p>
      </div>
      <WaveFooter />
    </div>
  );
};

export default Loader;
