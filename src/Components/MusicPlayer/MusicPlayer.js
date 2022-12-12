import React from "react";
//import axios from "axios";
import {useEffect} from 'react'
import jsonp from 'jsonp';
import axios from "axios";

const MusicPlayer = ({playingNow}) => {
    
    
    //   useEffect ( () => {
    //     const url = 'https://soundcloud.com/noahkahan/growing-sideways'
        // const getTrackID = async () => {
        //     const response = await axios.get(`https://w.soundcloud.com/player/?url=${url}`)
        //     let trackID = response.url
        //     console.log(trackID)
           
        // }
        // console.log('useEffect')
        // jsonp(`https://w.soundcloud.com/player/?url=${url}`, {}, (err, data) => {
        //     if(err) {
        //         console.log(err)
        //     } else (
        //         console.log(data.url, 'URL')
        //     )
        // })
        // getTrackID()
        // }, [])
      return (
        <div className="App">
          <iframe src={playingNow}></iframe>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );
    }
    
export default MusicPlayer