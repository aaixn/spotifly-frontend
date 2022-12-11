import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosAddCircle, IoIosBrush, IoMdCheckmark } from 'react-icons/io'
import { TbPencil, TbTrash } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'
import AddSong from '../AddSong/AddSong'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import '../Playlist/Playlist.css'
import SongList from '../SongList/SongList'

export default function Playlist({ playlist, setPlaylist, user, setUser }) {
  const [editing, setEditing] = useState(false)
  const [newName, setNewName] = useState('')
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
    await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.username}/remove`, {
      _id: id
    })
    const updatedUser = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.username}`)
    setUser(updatedUser.data)
    navigate(-1)
  }

  const submitNewName = async () => {
    await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`, {
      name: newName
    })
    const updatedUser = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.username}`)
    setUser(updatedUser.data)
    setEditing(false)
    getPlaylist()
  }

  return (
    <div className='playlist-page'>
      <div className='playlist-info'>
        <div className='playlist-photo'><img src='' alt='playlist photo'></img></div>
        {editing ?
          <div className='title-editor'>
            <input type='text' onChange={e => setNewName(e.target.value)} />
            <IoMdCheckmark onClick={submitNewName} />
          </div>
          : <h1>{playlist.name + ' '}
            <TbPencil style={{ fontSize: '1em' }} onClick={() => { setEditing(true) }} />
            <TbTrash className='button delete' style={{ fontSize: '1em', color: 'red' }} onClick={deletePlaylist} />
          </h1>}
        <IoIosAddCircle className='button add' style={{ fontSize: '2em' }} />
      </div>
      <SongList playlist={playlist} />
      <AddSong playlist={playlist} user={user} />
      <MusicPlayer />
    </div>
  )
}
