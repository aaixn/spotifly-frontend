import React from 'react'
import {IoIosAddCircle} from 'react-icons/io'
import '../Playlist/Playlist.css'

export default function Playlist() {
  return (
    <div className='playlist-page'>
        <div className='playlist-info'>
            <div className='playlist-photo'><img src='' alt='playlist photo'></img></div>
            <h1>Playlist Name</h1>
            <IoIosAddCircle style={{fontSize: '2em'}}/>
        </div>
        <div className='sonng-list'>
            <div className='songlist-header'>
                <h4>Title</h4>
                <h4>Album</h4>
                <h4>Date Added</h4>
                <h4>Duration</h4>
            </div>
            <div className='songs'></div>
        </div>
    </div>
  )
}
