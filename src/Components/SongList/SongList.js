import React from 'react'
import '../SongList/SongList.css'
import {TbTrash, TbPlayerPlay} from 'react-icons/tb'
import axios from 'axios'

export default function SongList({playlist, setPlayingNow}) {

    const durationConvert = (duration) => {
        let minutes = Math.floor(duration/60)
        minutes = minutes < 10 ? '0' + minutes : minutes
        let seconds = duration%60
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }

    const dateConvert = (createdAt) => {
        let date = new Date(createdAt.substring(0, 10)) 
        date = date.toLocaleDateString('en-us', {month: 'long', day: 'numeric', year: 'numeric'})
        return date
    }

    const deleteSong = async (song) => {
        try {
            const id = await playlist._id
            const updatedSongs = await playlist.songs.filter(item => item._id !== song._id)
            await axios.put(`https://spotifly-backend-ga.herokuapp.com/api/playlists/${id}`, {songs: updatedSongs})
        } catch(err) {
            console.log(err);
        }
    }
    return (
    <div>
        <table>
            <tbody>
                <tr className='songlist-header'>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Date Added</th>
                    <th>Duration</th>
                </tr>
            </tbody>
            {playlist.songs && playlist.songs.map((song, index) => {
                return (
                    <tbody>
                        <tr>
                            <td><TbPlayerPlay onClick={() => {
                                setPlayingNow(song.soundcloud)
                            }}/></td>
                            <td><span style={{fontWeight: 'bold'}}>{song.name}</span><br/>{song.artist.map((artist, index) => {return index !== song.artist.length -1 ? (`${artist}, `) : artist })}</td>
                            <td>{song.album.map((album, index) => {return index !== song.album.length -1 ? (`${album}, `) : album })}</td>
                            <td>{dateConvert(song.createdAt)}</td>
                            <td>{durationConvert(song.duration)}</td>
                            <td><TbTrash style={{color:'red'}} onClick={() => deleteSong(song)}/></td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
        
    </div>
  )
}
