import axios from 'axios'
import React, { useEffect } from 'react'
import {IoIosAddCircle} from 'react-icons/io'
import { useParams } from 'react-router-dom'
import AddSong from '../AddSong/AddSong'
import '../Playlist/Playlist.css'
import SongList from '../SongList/SongList'

export default function Playlist({playlist, setPlaylist, user}) {

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
        <SongList playlist ={playlist}/>
        <AddSong playlist={playlist} user={user}/>
    </div>
  )
}
