import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button/Button';

export default function Form({title, setEmail, setPassword, handleAction}) {

    return (
        <div>
            <div className="heading-container">
                <h3>
                    {title} Form
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="email" label="Enter the Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
                <TextField id="password" label="Enter the Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
                {/* require password to be at least 6 chara 
                    make
                */}
            </Box>

            <Button title={title} handleAction={handleAction}/>
        </div>
    );
}