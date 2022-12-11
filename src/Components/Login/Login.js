import React, { useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = ({ setUser }) => {
    useEffect(() => {
        window.localStorage.setItem('user', '')
    }, [])
    const handleClick = async (e) => {
        const response = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${e.target.name}`)
        setUser(response.data)
    }
    return (
        <div className='user-selection'>
            <Link to='/home' onClick={(e) => { handleClick(e) }} name='mgreen1092'>Morgan</Link>
            <Link to='/home' onClick={(e) => { handleClick(e) }} name='aaixn'>Ana</Link>
            <Link to='/home' onClick={(e) => { handleClick(e) }} name='esaltzm'>Eli</Link>
        </div>
    )
}
export default Login