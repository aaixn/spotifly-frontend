import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../PlaylistList/PlaylistList.css'

export default function PlaylistList() {
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        const getPlaylists = async (userID) => {
            const res = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${userID}`)
            const gotPlaylists = res.data.playlists
            setPlaylists(gotPlaylists)
        }
        getPlaylists('63935095d2cd174067383ea4')
    }, [])
    return (
        <div className='nav-playlist-list'>
            {playlists.map(playlist =>
                <div className='playlist-item'>
                    <Link to='/playlist'>{playlist.name}</Link>
                </div>)}
        </div>
    )
}
