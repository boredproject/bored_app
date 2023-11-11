'use client';

// pages/index.tsx

import React, { useEffect, useRef, useState } from 'react';



const MainButton: React.FC = () => {
  const audioClick = useRef<HTMLAudioElement | null>(null);
  const bgAudio = useRef<HTMLAudioElement | null>(null);
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);
  const [bgAudioVolume, setBgAudioVolume] = useState(0.1);

  useEffect(() => {
    // Lier l'élément audio avec l'id bgAudio à la référence bgAudio
    bgAudio.current = document.getElementById('bgAudio') as HTMLAudioElement;
  }, []);

  const playClick = () => {
    if (audioClick.current) {
      audioClick.current.play();
      toggleButtons();
    }
  };

  const toggleMuteAndPlay = () => {
    toggleMute();
    playClick();
  };

  const toggleButtons = () => {
    setShowButton1(!showButton1);
    setShowButton2(!showButton2);
  };

  const toggleMute = () => {
    if (bgAudio.current) {
      setBgAudioVolume(bgAudioVolume === 0 ? 0.1 : 0);
      bgAudio.current.volume = bgAudioVolume;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen relative max-h-full">
      <div className="absolute flex justify-center items-center transform transition-all duration-300 hover:scale-90">
        <svg
          className="animate-spin-slow hover:animate-spin-medium transition-all"
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
            fontWeight="bold"
            fontSize="7"
            letterSpacing="-0.12"
            fontFamily="'Inter', sans-serif"
          >
            <textPath xlinkHref="#circle">
              CLICK
              <tspan className="text-[#5E2BFF]">ME!</tspan>
              CLICK
              <tspan className="text-[#5E2BFF]">ME!</tspan>
              CLICK
              <tspan className="text-[#5E2BFF]">ME!</tspan>
              CLICK
              <tspan className="text-[#5E2BFF]">ME!</tspan>
              CLICK
              <tspan className="text-[#5E2BFF]">ME!</tspan>
              CLICK
              <tspan className="text-[#5E2BFF]">ME!</tspan>
            </textPath>
          </text>
        </svg>
      </div>
      <button
        className="absolute z-1 flex items-center justify-center bg-transparent text-white font-bold uppercase px-2 py-1 rounded-lg text-3xl border-4 border-white transform transition-all duration-300 hover:scale-125"
        onClick={playClick}
      >
        BO<span className="text-[#5E2BFF]">RED</span>
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58179 2.31567L10.1741 3.86158C10.5578 4.8626 11.3076 5.68493 12.2748 6.16596C13.0375 6.54523 13.6702 7.13923 14.0914 7.87311L14.6333 8.81586"
            stroke="#5E2BFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M2.15295 6.15674L2.74522 7.70264C3.12893 8.7037 3.8782 9.52604 4.84597 10.007C5.60871 10.3863 6.24081 10.9803 6.6626 11.7142L7.20449 12.6569"
            stroke="#5E2BFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M17.1594 22.2596L18.7704 20.7151C20.4377 19.1164 21.6281 17.0954 22.211 14.873L22.4687 13.1659C22.5917 12.3477 22.5033 11.5118 22.211 10.7366"
            stroke="#5E2BFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M3.78735 22.2596L8.12243 23.3649C9.09138 23.6119 10.0884 23.7369 11.089 23.7369H11.6221C13.2091 23.7369 14.7727 23.3532 16.1751 22.6191C16.6327 22.3798 17.0697 22.1049 17.4827 21.7969L19.1335 20.5658C20.3673 19.6459 21.3087 18.3971 21.8488 16.9662C22.1862 16.0705 22.3596 15.1222 22.3596 14.1662V12.0662V10.5889"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <audio id="bgAudio" autoPlay controls loop {...(bgAudioVolume !== 0 && { volume: bgAudioVolume })}>
        <source
          src="https://bored-bucket.s3.eu-west-3.amazonaws.com/Wii+Menu+Music+1+Hour.mp4"
          type="audio/mp3"
        />
        This was supposed to be the background music but your browser does not
        support the audio element.
      </audio>
      <audio ref={audioClick} {...(bgAudioVolume !== 0 && { volume: bgAudioVolume })}>
        <source
          src="https://bored-bucket.s3.eu-west-3.amazonaws.com/click.mp3"
          type="audio/mp3"
        />
        This was supposed to be the click sound effect but your browser does not
        support the audio element.
        </audio>
      <div className="fixed top-0 left-0 p-4 flex flex-row gap-6">
        <button
          onClick={toggleMuteAndPlay}
          className="bg-transparent border-4 border-white rounded-lg py-1 px-2 p-2 text-sm text-white uppercase hover:scale-125 transition-all duration-300"
        >
          {bgAudioVolume === 0 ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </div>
  );
};

export default MainButton;
