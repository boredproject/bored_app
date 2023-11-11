'use client';

import React, { useEffect, useRef } from "react";

const SoundEffects = () => {
  const backgroundMusicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playBackgroundMusic = () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.volume = 0.1;
        backgroundMusicRef.current.play();
        document.removeEventListener("click", playBackgroundMusic);
      }
    };

    // Add a click event listener to the document to initiate audio playback
    document.addEventListener("click", playBackgroundMusic);

    return () => {
      // Clean up the event listener when the component is unmounted
      document.removeEventListener("click", playBackgroundMusic);
    };
  }, []); 

  return (
    <div>
      <audio ref={backgroundMusicRef} autoPlay>
        <source
          src="https://bored-bucket.s3.eu-west-3.amazonaws.com/Wii+Menu+Music+1+Hour.mp4"
          type="audio/mp3"
        />
        This was supposed to be the background music but your browser does not
        support the audio element.
      </audio>
      <audio>
        <source
          src="https://bored-bucket.s3.eu-west-3.amazonaws.com/click.mp3"
          type="audio/mp3"
        />
        This was supposed to be the click sound effect but your browser does not
        support the audio element.
      </audio>
    </div>
  );
};

export default SoundEffects;
