import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'
import { GrHomeRounded } from 'react-icons/gr'
import axios from 'axios'
import '../Nav/Nav.css'

export default function Nav() {
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
		<div className='nav'>
			<Link to='/'><div className='nav-home'>
				<GrHomeRounded />
				<p>Home</p>
			</div></Link>
			<div className='nav-playlists'>
				<p>Playlists</p>
				<IoIosAddCircle className='add-playlist-button' style={{ fontSize: '1.3em' }} />
			</div>
			<div className='nav-playlist-list'>
				{playlists.map(playlist => <div className='playlist-item'>{playlist.name}</div>)}
			</div>
		</div>
	)
}
