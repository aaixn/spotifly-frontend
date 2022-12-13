import React from "react"

const MusicPlayer = ({ playingNow }) => {
  return (
    <div className="music-player">
      <iframe src={playingNow}></iframe>
    </div>
  );
}

export default MusicPlayer