import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'
import { GrHomeRounded } from 'react-icons/gr'

import PlaylistList from '../PlaylistList/PlaylistList'
import '../Nav/Nav.css'

export default function Nav() {
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
			<PlaylistList />
		</div>
	)
}
