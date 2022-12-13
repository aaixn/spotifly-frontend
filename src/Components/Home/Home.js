import React, { useEffect } from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home({ user, setUser }) {

  useEffect(() => {
    let refreshUser
    if (localStorage.getItem('user') !== 'undefined' || undefined) refreshUser = JSON.parse(localStorage.getItem('user'))
    refreshUser && setUser(refreshUser)
  }, [])

  return (
    <div className='home'>
      <div className='announcement'></div>
      <h2>Hello <span style={{ color: '#1BD760' }}>{user && user.email.split('@')[0]}</span>!</h2>
      <div className='playlists-section'>
        <h3>Your Playlists</h3>
        {user && <div className='playlist-grid'>
          {user.playlists.map(playlist => {
            return (
              <div className='playlist-grid-item'>
                <div>{playlist.name}</div>
                <img src={playlist.image} alt='playlist cover art' style={{ width: '200px' }} />
              </div>
            )
          })}
        </div>}
      </div>
    </div>
  )
}
