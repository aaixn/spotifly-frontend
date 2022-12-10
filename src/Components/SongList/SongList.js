import React from 'react'
import '../SongList/SongList.css'

export default function SongList({playlist}) {

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

    return (
    <div>
        <table>
            <tr className='songlist-header'>
                <th>Title</th>
                <th>Album</th>
                <th>Date Added</th>
                <th>Duration</th>
            </tr>
            {playlist.songs && playlist.songs.map((song, index) => {
                return (
                    <tr>
                        <td><span style={{fontWeight: 'bold'}}>{song.name}</span><br/>{song.artist.map((artist, index) => {return index !== song.artist.length -1 ? (`${artist}, `) : artist })}</td>
                        <td>{song.album.map((album, index) => {return index !== song.album.length -1 ? (`${album}, `) : album })}</td>
                        <td>{dateConvert(song.createdAt)}</td>
                        <td>{durationConvert(song.duration)}</td>
                    </tr>
                )
            })}
        </table>
        
    </div>
  )
}
