import React from 'react'
import {IoIosAddCircle} from 'react-icons/io'

export default function Playlist() {
  return (
    <div className='playlist-page'>
      <div className='playlist-info'>
        <div>playlist image</div>
        <div>Playlist Name</div>
        <IoIosAddCircle />
      </div>
      <div className='playlist-songs'>
        <div className='songlist-header'>
            <p>Title</p>
            <p>Album</p>
            <p>Date Added</p>
            <p>Duration</p>
        </div>
        <div className='song-list'></div>
      </div>
    </div>
  )
}
