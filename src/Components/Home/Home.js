import React, { useEffect } from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home({ setUser }) {
  useEffect(() => {
    const refreshUser = JSON.parse(sessionStorage.getItem('user'))
    refreshUser && setUser(refreshUser)
  }, [])


  let navigate = useNavigate();
  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')
      if (authToken) {
          navigate('/home')
      }

      if (!authToken) {
          navigate('/register')
      }
  }, [])

  return (
    <div className='home'>
      <div className='announcement'></div>
      <h2>Hello user</h2>
      <div className='discover'>
        <h3>Discover</h3>
      </div>
      <div className='genres'>
        <h3>Listen by Genre</h3>
      </div>
    </div>
  )
}
