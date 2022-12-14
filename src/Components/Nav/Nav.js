import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosAddCircle, IoIosHome } from 'react-icons/io'
import '../Nav/Nav.css'
import PlaylistList from '../PlaylistList/PlaylistList'
import axios from 'axios'

export default function Nav({ user, setUser, setEmail }) {
	const navigate = useNavigate()
	const header = { headers: { authorization: `bearer ${sessionStorage.getItem('ID Token')}` } }
	const handleLogout = () => {
		sessionStorage.removeItem('Auth Token')
		sessionStorage.removeItem('ID Token')
		sessionStorage.removeItem('user')
		setUser('')
		setEmail('')
		navigate('/login')
	}
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
		navigate(`/playlist/${newPlaylist.data._id}`)
	}
	return (
		<div className='nav'>
			<Link to='/home'><div className='nav-home'>
				<IoIosHome style={{ color: 'white', fontSize: '1.3em' }} />
				<p>Home</p>
			</div></Link>
			<div className='nav-playlists'>
				<p>Playlists</p>
				<IoIosAddCircle className='add-playlist-button' style={{ fontSize: '1.3em', cursor: 'pointer', color: '#1BD760' }} onClick={handleAddPlaylist} />
			</div>
			<PlaylistList user={user} />
			<button className='logout-button' onClick={handleLogout}>Log Out</button>
		</div>
	)
}
