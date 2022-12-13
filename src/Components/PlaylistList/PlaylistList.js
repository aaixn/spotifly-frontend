import React from 'react'
import { Link } from 'react-router-dom'
import '../PlaylistList/PlaylistList.css'

export default function PlaylistList({ user }) {
    console.log('user in playlist list: ', user)
    return (
        <div className='nav-playlist-list'>
            {user.playlists.map((playlist, index) =>
                <div key={index} className='playlist-item'>
                    <Link to={'/playlist/' + playlist._id}>{playlist.name}</Link>
                </div>)}
        </div>
    )
}
