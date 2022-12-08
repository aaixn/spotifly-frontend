import React, { useEffect } from "react";
import './Song.css'
import { useState } from "react";
import { useParams } from "react-router-dom";

const Song = () => {
    const [songs, setSongs] = useState
    let params = useParams()
    const getSongs = () => {
        //I dont think this link is right - i think we need to set a state for the user and interpolate that in to the link??
        axios.get(`http://localhost:8080/api/playlist/${params.id}`).then(response => {
            setSongs(response.data.songs)
        })
    }
    useEffect(() => {
        getSongs()
    }, [])

    if (songs === undefined) return;

    // const deleteSong = (songId) => {
    //     axios.dete(`https://localhost:8080/api/song/${songId}`)
    // }
    const songList = songs.map((song, key) => {
        return (
            <div key={key}>
                <p>{song.name}</p>
                <p>{song.artist}</p>
                <p>{song.album}</p>
                <p>{song.duration}</p>
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