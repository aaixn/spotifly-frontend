import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
//import { useState } from 'react'

const Login = () => {
    //const [user, setUser] = useState()
    return (
        <div>
            <h3 className='user'><Link to='/morgan'>Morgan</Link></h3>
            <h3 className='user'><Link to='/ana'>Ana</Link></h3>
            <h3 className='user'><Link to='/eli'>Eli</Link></h3>
        </div>
    )
}
export default Login 