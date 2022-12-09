import React from 'react'

export default function AddSong() {
  return (
    <div>
        <form>
            <h1>Add a Song to a Playlist</h1>
            <input className='name-input' placeholder='Song Title'></input>
            <input className='artist-input' placeholder='Artist'></input>
            <input className='album-input' placeholder='Album Title'></input>
            <input className='duration-input' placeholder='Duration in Seconds'></input>
            <label for='playlist-select'></label>
            <select name='playlist-select'>
                <option value='playlist1'>playlist1</option>
                <option value='playlist2'>playlist2</option>
                <option value='playlist3'>playlist3</option>
            </select>
            <button>Add To Playlist</button>
        </form>
    </div>
  )
}
