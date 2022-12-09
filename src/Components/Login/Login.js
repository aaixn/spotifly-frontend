import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
//import { useState } from 'react'

const Login = () => {
    //const [user, setUser] = useState()
    return (
        <div>
            <div class='user-selection'>
                <h3 className='user-morgan'><Link to='/63935095d2cd174067383ea6'>Morgan</Link></h3>
            </div>
            <div class='user-selection'>
                <h3 className='user-ana'><Link to='/63935095d2cd174067383ea5'>Ana</Link></h3>
            </div >
            <div class='user-selection'>
                <h3 className='user-eli'><Link to='/63935095d2cd174067383ea4'>Eli</Link></h3>
            </div>
            
        </div>
    )
}
export default Login 