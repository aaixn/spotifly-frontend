import axios from 'axios';
import React from 'react';
import './User.css'
import { useState } from 'react'

const User = () => {
    // // const [users, setUsers] = useState()
    // // //axios call to user for email
    // axios.get('https://localhost:8080/api/user/').then(response => {
    //     console.log(response.data)
    //     console.log(response.data)
    //     setUsers(response.data)
    // })
    //user image in the top right corner, or just display email?
    // const email=users.map((user, key) => {
    //     return (
    //         <div key={key}>
    //             <h3>{user.email}</h3>
    //         </div>
    //     )
    // })
    return (
        <div class='user-name-div'>
            <h3 class='user-name'>User</h3>
        </div>
    )
}

export default User