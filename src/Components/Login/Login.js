import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button/Button';
import './Login.css'

export default function Login({ setEmail, setPassword, handleLogin }) {
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
                <TextField className='email input' id="email" label="Enter Your Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                <h4>Password</h4>
                <TextField className='password input' type="password" id="password" label="Enter Your Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <div className='sign-buttons'>
                    <Button title='Log In' handleAction={() => { handleLogin('log in') }} />
                    <Button title='Sign Up' handleAction={() => { handleLogin('register') }} />
                </div>
            </Box>
        </div>
    );
}