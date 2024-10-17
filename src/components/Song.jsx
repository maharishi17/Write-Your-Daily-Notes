import React, { useEffect } from "react";

function Audi() {
  useEffect(() => {
    const playButton = document.getElementById('play-music');
    const pauseButton = document.getElementById('pause-music');
    const music = new Audio('/Deema.mp3');



    playButton.addEventListener('click', function() {
      music.play();
    });

    pauseButton.addEventListener('click', function() {
      music.pause();
    });
  }, []); // The effect runs once after the component renders

  return (
    <div className="audi-container">
      <button id="play-music">Play Music</button>
      <button id="pause-music">Pause Music</button>
    </div>
  );
}

export default Audi;
