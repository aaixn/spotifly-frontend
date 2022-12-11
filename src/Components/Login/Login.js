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
            <Link to='/6394c87544a2d6352ff755ad/home' onClick={(event)=>{handleClick(event)}} name = '6394c87544a2d6352ff755ad' className='user-morgan'>Morgan</Link>
            <Link to='/6394c87544a2d6352ff755ac/home' onClick={(event)=>{handleClick(event)}} name = '6394c87544a2d6352ff755ac' className='user-ana'>Ana</Link>
            <Link to='/6394c87544a2d6352ff755ab/home' onClick={(event)=>{handleClick(event)}} name = '6394c87544a2d6352ff755ab' className='user-eli'>Eli</Link>
        </div>
    )
}
export default Login