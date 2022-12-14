import React from "react"
import './MusicPlayer.css'

const MusicPlayer = ({ playingNow }) => {
  return (
    <div className="music-player">
      {playingNow && <iframe
        margin="0"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${playingNow}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`}>
      </iframe>}
    </div>
  )
}

export default MusicPlayer