import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = ({user, setUser}) => {
    const handleClick = async (event) => {
        const response = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${event.target.name}`)
        setUser(response.data)

    }
    return (
        <div className='user-selection'>
            <Link to='/63935095d2cd174067383ea6/home' onClick={(event)=>{handleClick(event)}} name = '63935095d2cd174067383ea6' className='user-morgan'>Morgan</Link>
            <Link to='/63935095d2cd174067383ea5/home' onClick={(event)=>{handleClick(event)}} name = '63935095d2cd174067383ea5' className='user-ana'>Ana</Link>
            <Link to='/63935095d2cd174067383ea4/home' onClick={(event)=>{handleClick(event)}} name = '63935095d2cd174067383ea4' className='user-eli'>Eli</Link>
        </div>
    )
}
export default Login 