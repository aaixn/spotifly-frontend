import axios from 'axios'
import React, { useEffect } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { IoMdRemoveCircle } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'
import AddSong from '../AddSong/AddSong'
import '../Playlist/Playlist.css'
import SongList from '../SongList/SongList'

export default function Playlist({ playlist, setPlaylist, user }) {

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getPlaylist()
  }, [id])

  const getPlaylist = async () => {
    const playlistInfo = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`)
    setPlaylist(playlistInfo.data)
  }

  const deletePlaylist = async () => {
    const updatedUser = await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/users/${user._id}/remove`, {
      _id: id
    })
    navigate(-1)
  }

  return (
    <div className='playlist-page'>
      <div className='playlist-info'>
        <div className='playlist-photo'><img src='' alt='playlist photo'></img></div>
        <h1>{playlist.name + ' '}<IoMdRemoveCircle className='button delete' style={{ fontSize: '1em' }} onClick={deletePlaylist} /></h1>
        <IoIosAddCircle className='button add' style={{ fontSize: '2em' }} />
      </div>
      <SongList playlist={playlist} />
      <AddSong playlist={playlist} user={user} />
    </div>
  )
}
