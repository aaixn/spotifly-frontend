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
            <Link to='/63951edfa8f000c929cedcdb/home' onClick={(event)=>{handleClick(event)}} name = '63951edfa8f000c929cedcdb' className='user-morgan'>Morgan</Link>
            <Link to='/63951edfa8f000c929cedcda/home' onClick={(event)=>{handleClick(event)}} name = '63951edfa8f000c929cedcda' className='user-ana'>Ana</Link>
            <Link to='/63951edfa8f000c929cedcd9/home' onClick={(event)=>{handleClick(event)}} name = '63951edfa8f000c929cedcd9' className='user-eli'>Eli</Link>
        </div>
    )
}
export default Login