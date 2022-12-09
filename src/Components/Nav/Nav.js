import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'
import { GrHomeRounded } from 'react-icons/gr'
import '../Nav/Nav.css'
import PlaylistList from '../PlaylistList/PlaylistList'
import axios from 'axios'


export default function Nav({ user }) {
	const navigate = useNavigate()
	const handleAddPlaylist = async () => {
		console.log(user.playlists.length)
		const newPlaylist = await axios.post('https://spotifly-backend-ga.herokuapp.com/api/playlists', {
			name: `My Playlist #${user.playlists.length + 1}`,
			songs: []
		})
		const updatedUser = await axios.put('https://spotifly-backend-ga.herokuapp.com/api/users/' + user._id + '/add', {
			_id: newPlaylist.data._id
		})
		navigate(`/playlist/${newPlaylist.data._id}`)
	}
	return (
		<div className='nav'>
			<Link to='/'><div className='nav-home'>
				<GrHomeRounded />
				<p>Home</p>
			</div></Link>
			<div className='nav-playlists'>
				<p>Playlists</p>
				<IoIosAddCircle className='add-playlist-button' style={{ fontSize: '1.3em' }} onClick={handleAddPlaylist} />
			</div>
			<PlaylistList />
		</div>
	)
}
