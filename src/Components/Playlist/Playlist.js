import axios from 'axios'
import React, { useEffect } from 'react'
import {IoIosAddCircle} from 'react-icons/io'
import { useParams } from 'react-router-dom'
import '../Playlist/Playlist.css'
import SongList from '../SongList/SongList'

export default function Playlist({playlist, setPlaylist}) {

  const {id} = useParams()


  useEffect(() => {
    getPlaylist()
  }, [id])

  const getPlaylist = async() => {
    const playlistInfo = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`)
    setPlaylist(playlistInfo.data)
  }

  return (
    <div className='playlist-page'>
        <div className='playlist-info'>
            <div className='playlist-photo'><img src='' alt='playlist photo'></img></div>
            <h1>{playlist.name}</h1>
            <IoIosAddCircle style={{fontSize: '2em'}}/>
        </div>
        <div className='song-list'>
            <div className='songlist-header'>
                <h4>Title</h4>
                <h4>Album</h4>
                <h4>Date Added</h4>
                <h4>Duration</h4>
            </div>
            <SongList playlist ={playlist}/>
        </div>
    </div>
  )
}
