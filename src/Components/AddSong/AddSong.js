import React, { useEffect, useState } from 'react'
import './AddSong.css'
import axios from 'axios'
import { IoIosAddCircle } from 'react-icons/io'
import TextField from '@mui/material'

export default function AddSong({ playlist, user, setUser }) {
  const [addSong, setAddSong] = useState(
    {
      name: '',
      artist: '',
      album: '',
      duration: '',
      genre: '',
      soundcloud: '',
      playlistSelect: ''
    }
  )
  const [matchingSongs, setMatchingSongs] = useState([])
  const [allSongs, setAllSongs] = useState([])
  const header = { headers: { authorization: `bearer ${sessionStorage.getItem('ID Token')}` } }

  useEffect(() => {
    const getAllSongs = async () => {
      const response = await axios.get('https://spotifly-backend-ga.herokuapp.com/api/songs/', header)
      setAllSongs(response.data)
    }
    getAllSongs()
  }, [])

  useEffect(() => {
    setAddSong({ ...addSong, playlistSelect: playlist.name })
  }, [playlist])

  useEffect(() => {
    addSong.name === ''
      ? setMatchingSongs([])
      : setMatchingSongs(allSongs.filter(song => song.name.toLowerCase().startsWith(addSong.name.toLowerCase())))
  }, [addSong])

  const handleChange = (e) => {
    const addedSong = { ...addSong }
    addedSong[e.target.name] = e.target.value
    setAddSong(addedSong)
  }

  const addSongToPlaylist = async (e) => {
    e.preventDefault()
    try {
      const songToAdd = await axios.post(`https://spotifly-backend-ga.herokuapp.com/api/songs/`,
        {
          name: addSong.name,
          artist: [addSong.artist],
          album: [addSong.album],
          genre: [addSong.genre],
          soundcloud: addSong.soundcloud,
          duration: parseInt(addSong.duration)
        }, header)
      const targetedPlaylist = user.playlists.filter(item => item.name === addSong.playlistSelect)
      await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${targetedPlaylist[0]._id}`, { ...targetedPlaylist[0], songs: [...targetedPlaylist[0].songs, songToAdd.data._id] }, header)
      const updatedUser = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.email}`, header)
      setUser(updatedUser.data)
    } catch (err) {
      console.log(err);
    }
  }

  const addExistingSong = async (song) => {
    const targetedPlaylist = user.playlists.filter(item => item.name === addSong.playlistSelect)
    await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${targetedPlaylist[0]._id}/add`, {
      _id: song._id
    }, header)
    const updatedUser = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.email}`, header)
    setUser(updatedUser.data)
    setAddSong({
      name: '',
      artist: '',
      album: '',
      duration: '',
      genre: '',
      soundcloud: '',
      playlistSelect: ''
    })
    setMatchingSongs([])
  }

  return (
    <div className='add-song'>
      <div>
        <form className='add-song-form'>
          <h1>Add a Song to a Playlist</h1>
          <input className='name-input' placeholder='Song Title' name='name' value={addSong.name} onChange={handleChange}></input>
          <input className='artist-input' placeholder='Artist' name='artist' value={addSong.artist} onChange={handleChange}></input>
          <input className='album-input' placeholder='Album Title' name='album' value={addSong.album} onChange={handleChange}></input>
          <input className='genre-input' placeholder='Genre' name='genre' value={addSong.genre} onChange={handleChange}></input>
          <input className='duration-input' placeholder='Duration in Seconds' name='duration' value={addSong.duration} onChange={handleChange}></input>
          <small>Click the share button on your song in SoundCloud, go to embed, copy and paste the code below.</small>
          <input className='soundcloud-input' placeholder='SoundCloud Embed URL' name='soundcloud' value={addSong.soundcloud} onChange={handleChange}></input>
          <select name='playlistSelect' onChange={handleChange}>
            {user ? user.playlists.map((item) => {
              return (
                item.name === playlist.name ? <option value={item.name} selected>{item.name}</option> : <option value={item.name}>{item.name}</option>
              )
            }) : null}
          </select>
          <IoIosAddCircle onClick={addSongToPlaylist} className='add button' style={{ color: '#1BD760' }} />
        </form>
      </div>
      <ul className='search-results'>
        {matchingSongs.map(song => <li style={{ listStyle: 'none' }}>{`${song.name} - ${song.artist} - ${song.album}`}<IoIosAddCircle onClick={() => { addExistingSong(song) }} /></li>)}
      </ul>
    </div>
  )
}