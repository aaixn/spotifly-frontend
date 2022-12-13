import React, { useEffect } from 'react'
import '../Home/Home.css'
import { IoIosAddCircle, IoMdCheckmark } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home({ user, setUser }) {
  const navigate = useNavigate()
  const header = { headers: { authorization: `bearer ${sessionStorage.getItem('ID Token')}` } }
  useEffect(() => {
    let refreshUser
    if (localStorage.getItem('user') !== 'undefined' || undefined) refreshUser = JSON.parse(localStorage.getItem('user'))
    refreshUser && setUser(refreshUser)
  }, [])

  const handleAddPlaylist = async () => {
    const newPlaylist = await axios.post('https://spotifly-backend-ga.herokuapp.com/api/playlists', {
      name: `My Playlist #${user.playlists.length + 1}`,
      songs: []
    }, header)
    await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.email}/add`, {
      _id: newPlaylist.data._id
    }, header)
    const updatedUser = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${user.email}`, header)
    setUser(updatedUser.data)
  }

  return (
    <div className='home'>
      <div className='announcement'></div>
      <h2>Hello <span style={{ color: '#1BD760' }}>{user && user.email.split('@')[0]}</span>!</h2>
      <div className='playlists-section'>
        <h3>Your Playlists</h3>
        {user && <div className='playlist-grid'>
          {user.playlists.map(playlist => {
            return (
              <div className='playlist-grid-item' onClick={() => { navigate(`/playlist/${playlist._id}`) }}>
                <div>{playlist.name}</div>
                <img src={playlist.image} alt='playlist cover art' style={{ width: '200px', height: '200px', objectFit: 'cover' }} className='button' />
              </div>
            )
          })}
          <div className='addcontainer'><IoIosAddCircle className='addplaylist button' onClick={handleAddPlaylist} /></div>
        </div>}
      </div>
    </div>
  )
}
