import React, { useEffect } from "react";

function Song() {
  useEffect(() => {
    const music = new Audio('/Write-Your-Daily-Notes/music/Deema.mp3');  // Update the file path

    const playButton = document.getElementById('play-music');
    const pauseButton = document.getElementById('pause-music');

    playButton.addEventListener('click', () => {
      music.play().catch(error => {
        console.error('Error playing music:', error);
      });
    });

    pauseButton.addEventListener('click', () => {
      music.pause();
    });
  }, []); // The effect runs once after the component renders

  return (
    <div className="audi-container">
      <button id="play-music">Play Music</button>
      <button id="pause-music">Pause Music</button>
      <h1 className="mudi">If You Bored Listen Music</h1>
    </div>
  );
}

export default Song;
