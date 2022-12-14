import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button/Button';
import './Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser, setEmail, setPassword, handleLogin }) {
    const navigate = useNavigate()
    useEffect(() => {
        let refreshUser
        if (sessionStorage.getItem('user') !== 'undefined' || undefined) {
            refreshUser = JSON.parse(sessionStorage.getItem('user'))
        }
        refreshUser && setUser(refreshUser)
        if (refreshUser) navigate('/home')
    }, [])
    return (
        <div className='sign-page'>
            <div className="heading-container">
                <h3>Spotifly</h3>
            </div>
            <Box
                className='form'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h4>Email Address</h4>

                <TextField className='email-input' id="email" label="Enter Your Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                <h4>Password</h4>
                <TextField className='password-input' type="password" id="password" label="Enter Your Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <div className='sign-buttons'>
                    <Button title='Log In' handleAction={() => { handleLogin('log in') }} />
                    <Button title='Sign Up' handleAction={() => { handleLogin('register') }} />
                </div>
            </Box>
        </div>
    )
}