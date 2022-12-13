import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AddSong({ playlist, user, header }) {
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

  useEffect(() => {
    setAddSong({ ...addSong, playlistSelect: playlist.name })
  }, [playlist])

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
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form>
        <h1>Add a Song to a Playlist</h1>
        <input className='name-input' placeholder='Song Title' name='name' value={addSong.name} onChange={handleChange}></input>
        <input className='artist-input' placeholder='Artist' name='artist' value={addSong.artist} onChange={handleChange}></input>
        <input className='album-input' placeholder='Album Title' name='album' value={addSong.album} onChange={handleChange}></input>
        <input className='genre-input' placeholder='Genre' name='genre' value={addSong.genre} onChange={handleChange}></input>
        <input className='soundcloud-input' placeholder='SoundCloud URL' name='soundcloud' value={addSong.soundcloud} onChange={handleChange}></input>
        <input className='duration-input' placeholder='Duration in Seconds' name='duration' value={addSong.duration} onChange={handleChange}></input>
        <label for='playlistSelect'></label>
        <select name='playlistSelect' onChange={handleChange}>
          {user ? user.playlists.map((item) => {
            return (
              item.name === playlist.name ? <option value={item.name} selected>{item.name}</option> : <option value={item.name}>{item.name}</option>
            )
          }) : null}
        </select>
        <button onClick={addSongToPlaylist}>Add To Playlist</button>
      </form>
    </div>
  )
}