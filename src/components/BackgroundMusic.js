import React, { useState, useRef } from "react";
import soundURL from "./sound/backgroundmusic.mp3";
import SoundOn from "../components/icon/music-note.svg";
import SoundOff from "../components/icon/music-note-slash.svg";

const BackgroundMusic = () => {
  const [play, setPlay] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setPlay(!play);

    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    audioRef.current.loop = true;
  };

  const IconPause = () => {
    return <img src={SoundOff} alt="Pause Icon" className="w-8 h-8" />;
  };

  const IconPlay = () => {
    return <img src={SoundOn} alt="Play Icon" className="w-8 h-8" />;
  };

  return (
    <div className="fixed right-0 p-4">
      <button id="audioBtn" onClick={togglePlay}>
        {play ? <IconPause /> : <IconPlay />}
      </button>
      <audio ref={audioRef} src={soundURL} />
    </div>
  );
};

export default BackgroundMusic;
