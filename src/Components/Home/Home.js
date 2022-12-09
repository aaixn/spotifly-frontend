import React from 'react'
import '../Home/Home.css'

export default function Home() {
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
