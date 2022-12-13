import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button/Button';
import './Form.css'

export default function Form({ title, setEmail, setPassword, handleAction }) {
    const navigate = useNavigate()
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
                <TextField id="email" label="Enter Your Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                <h4>Password</h4>
                <TextField id="password" label="Enter Your Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <div className='sign-buttons'>
                    <Button title={title} handleAction={handleAction} />
                    {title === 'Log In' && <Button title='Sign Up' handleAction={() => { navigate('/register') }} />}
                </div>
            </Box>
        </div>
    );
}