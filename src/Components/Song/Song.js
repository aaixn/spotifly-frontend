import React, { useEffect } from "react";
import './Song.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Song = () => {
    const [songs, setSongs] = useState()
    const {id} = useParams()


    useEffect(() => {
      getSongs()
    }, [id])
  
    const getSongs = async() => {
      const response = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`)
      console.log(response.data.songs)
      setSongs(response.data.songs)
    }

    if (songs === undefined) return;

    // const deleteSong = (songId) => {
    //     axios.dete(`https://localhost:8080/api/song/${songId}`)
    // }
    const songList = songs.map((song, key) => {
        const dateFormat=song.createdAt.substring(0,10)
        const month=dateFormat.substring(5, 6)
        const day=dateFormat.substring(8,9)
        const year=dateFormat.substring(0,3)
        const dateAdded=`${month}-${day}-${year}`
        return (
            <div className='song' key={key}>
                <div className='song-section'>
                    <p className='song-name'>{song.name}</p>
                    {/* <p className='song-artist'>{song.artist}</p> */}
                    <p className='song-album'>{song.album}</p>
                    <p className='date-added'>{song.createdAt.substring(0,10)}</p>
                    <p className='song-duration'>{song.duration}</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <p>{songList}</p>
        </div>
    )
}

export default Song