import React from "react";
//import axios from "axios";
import {useEffect} from 'react'
import jsonp from 'jsonp';

const MusicPlayer = () => {
      useEffect (() => {
        const soundcloudUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499655217&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
        
        jsonp(soundcloudUrl, {}, (err, data) => {
          if (err) {
            // Handle error
          } else {
            console.log(data)
            // Use the data to create the audio player
          }
        });
        })
        
      return (
        <div className="App">
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499655217&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );
    }
    
export default MusicPlayer