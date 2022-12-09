import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {IoIosAddCircle} from 'react-icons/io'
import {GrHomeRounded} from 'react-icons/gr'
import '../Nav/Nav.css'
import axios from 'axios'

export default function Nav() {
  const [playlists, setPlaylists] = useState()
  const {id} = useParams()

  useEffect(() => {
    getPlaylists()
  }, [playlists])

  const getPlaylists = async () => {
    const userInfo = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/63935095d2cd174067383ea5`)
    setPlaylists(userInfo.data.playlists)
  }

  return (
    <div className='nav'>
        <Link to='/'><div className='nav-home'>
            <GrHomeRounded />
            <p>Home</p>
        </div></Link>
        <div className='nav-playlists'>
            <p>Playlists</p>
            <IoIosAddCircle className='add-playlist-button' style={{fontSize: '1.3em'}}/>
        </div>
        <div className='nav-playlist-list'>
          {playlists ? playlists.map(playlist => <Link to={`/${playlist._id}`}><p>{playlist.name}</p></Link>) : null}
        </div>
    </div>
  )
}
