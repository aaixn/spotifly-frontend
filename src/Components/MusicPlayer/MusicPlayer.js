import React from "react"
import './MusicPlayer.css'

const MusicPlayer = ({ playingNow }) => {
  return (
    <div className="music-player">
      <iframe className='music' src={playingNow}></iframe>
    </div>
  );
}

export default MusicPlayer