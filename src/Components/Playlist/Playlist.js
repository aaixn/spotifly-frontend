import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosAddCircle, IoMdCheckmark } from 'react-icons/io'
import { TbPencil, TbTrash } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'
import AddSong from '../AddSong/AddSong'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import '../Playlist/Playlist.css'
import SongList from '../SongList/SongList'

export default function Playlist({ playlist, setPlaylist, user, setUser }) {
  const [editing, setEditing] = useState(false)
  const [newName, setNewName] = useState('')
  const [playingNow, setPlayingNow] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const header = { headers: { authorization: `bearer ${sessionStorage.getItem('ID Token')}` } }

  useEffect(() => {
    getPlaylist()
  }, [id])

  useEffect(() => {
    getPlaylist()
  }, [user])

  const getPlaylist = async () => {
    const playlistInfo = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`, header)
    setPlaylist(playlistInfo.data)
  }

  const deletePlaylist = async () => {
    await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.email}/remove`, {
      _id: id
    }, header)
    const updatedUser = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.email}`, header)
    setUser(updatedUser.data)
    navigate(-1)
  }

  const submitNewName = async () => {
    await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`, {
      name: newName
    }, header)
    const updatedUser = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.email}`, header)
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
            <TbPencil style={{ fontSize: '1em', color: '#1BD760' }} onClick={() => { setEditing(true) }} className='pencil button' />
            <TbTrash className='delete button' style={{ fontSize: '1em', color: 'white' }} onClick={deletePlaylist} />
          </h1>}
        <IoIosAddCircle className='addsong button' style={{ fontSize: '2em', color: '#1bd760' }} />
      </div>
      <SongList user={user} setUser={setUser} playlist={playlist} playingNow={playingNow} setPlayingNow={setPlayingNow} />
      <AddSong playlist={playlist} user={user} setUser={setUser} />
      <MusicPlayer playingNow={playingNow} setPlayingNow={setPlayingNow} />
    </div>
  )
}
