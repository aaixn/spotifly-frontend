import React from 'react'
import '../SongList/SongList.css'

export default function SongList({playlist}) {
    console.log(playlist.songs);
    return (
    <div>
        {/* {playlist.songs && playlist.songs.map((song, index) => {
            return (
            <div key={index} style={{display:'flex'}}>
                <p>{song.name}</p>
                <p>{song.artist[0]}</p>
                <p>{song.album[0]}</p>
                <p>{song.createdAt}</p>
                <p>{song.duration} sec</p>
            </div>
            )
        })} */}
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
                        <td>{song.name}</td>
                        <td>{song.album}</td>
                        <td>{song.createdAt}</td>
                        <td>{song.duration} sec</td>
                    </tr>
                )
            })}
        </table>
        
    </div>
  )
}
