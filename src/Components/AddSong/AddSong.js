import axios from 'axios'
import React, { useState } from 'react'

export default function AddSong({playlist, user}) {

  const [addSong, setAddSong] = useState(
    {
      name: '',
      artist: '',
      album: '',
      duration: '',
      'playlist-select': playlist ? playlist.name : null
    }
  )

  const handleChange = (e) => {
    const addedSong = {...addSong}
    addedSong[e.target.name] = e.target.value
    setAddSong(addedSong)
  }

  const addSongToPlaylist = async () => {
    try {
      const targetedPlaylist = user.playlists.map(item => item.name = addSong['playlist-select'])
      console.log(targetedPlaylist);
      // targetedPlaylist = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${targetedPlaylist._id}`)
      // const update = await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`, {...playlist, songs: {...playlist.songs, addSong}} )
      console.log({...playlist, songs: {...playlist.songs, addSong}});
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
            <input className='duration-input' placeholder='Duration in Seconds' name='duration' value={addSong.duration} onChange={handleChange}></input>
            <label for='playlist-select'></label>
            <select name='playlist-select' onChange={handleChange}>
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