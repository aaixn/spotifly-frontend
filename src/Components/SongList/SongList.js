import React from 'react'
import '../SongList/SongList.css'

export default function SongList({playlist}) {
    console.log(playlist.songs);
    return (
    <div>
        <table>
            <tr className='songlist-header'>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Date Added</th>
                <th>Duration</th>
            </tr>
            {playlist.songs && playlist.songs.map((song, index) => {
                return (
                    <tr>
                        <td>{song.name}</td>
                        <td>{song.artist.map((artist, index) => {return index !== song.artist.length -1 ? (`${artist}, `) : artist })}</td>
                        <td>{song.album.map((album, index) => {return index !== song.album.length -1 ? (`${album}, `) : album })}</td>
                        <td>{song.createdAt}</td>
                        <td>{song.duration} sec</td>
                    </tr>
                )
            })}
        </table>
        
    </div>
  )
}
