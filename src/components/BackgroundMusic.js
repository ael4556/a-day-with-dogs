import React, { useState, useEffect,useRef } from 'react';
import soundURL from './sound/dog.mp3'


const BackgroundMusic = () => {
  const [play, setPlay] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setPlay(!play);

    if(play){
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    audioRef.current.loop = true;
  }

  useEffect(()=>{
    const handleUserInteract = () =>{
      togglePlay();

      window.removeEventListener('click', handleUserInteract)
    };

    window.addEventListener('click',handleUserInteract );

    return () =>{
      window.removeEventListener('click', handleUserInteract)
    };
  },[])

  return (
    <div>
      <button id="audioBtn" onClick={togglePlay}>
        {play ? "Play" : "Pause"}
      </button>
      <audio ref={audioRef} src={soundURL} />
    </div>
  );
};


export default BackgroundMusic;