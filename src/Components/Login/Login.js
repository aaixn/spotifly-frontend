import React from 'react'
import './Login.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import axios from 'axios'
//import { useState } from 'react'

const Login = ({user, setUser}) => {
    //const [user, setUser] = useState()
    const handleClick = async (event) => {
        console.log(event.target.name)
       const response = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${event.target.name}`)
       console.log(response.data)
        setUser(response.data)
        console.log(user)

        //setUser(event.target.id)
    }
    return (
        <div className='user-selection'>
            <h3 id='63935095d2cd174067383ea6' className='user-morgan'><Link to='/63935095d2cd174067383ea6/home'>Morgan</Link></h3>
            <h3 id='63935095d2cd174067383ea5' className='user-ana'><Link to='/63935095d2cd174067383ea5/home'>Ana</Link></h3>
            <Link to='/63935095d2cd174067383ea4/home' onClick={(event)=>{handleClick(event)}} name ='63935095d2cd174067383ea4' className='user-eli'>Eli</Link>
        </div>
    )
}
export default Login 