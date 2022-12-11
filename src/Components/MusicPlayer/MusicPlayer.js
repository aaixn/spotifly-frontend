import React from "react";
//import axios from "axios";
import {useState, useEffect} from 'react'
import {ReactPlayer} from 'react-player'
import jsonp from 'jsonp';

const MusicPlayer = () => {
    // const [musicLinks] = useState([
        // "https://soundcloud.com/noahkahan/false-confidence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    //   ]);
    // const [data, setData] = useState([{link: new Audio ("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499655217&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"), play: false}]);
    //   useEffect(() => {
    //     const musicData = musicLinks.map((sound) => {
    //       return { audio: new Audio(sound), play: false };
    //     });
    
    //     setData(musicData);
    //   }, []);
      //setData ( {audio: new Audio(musicLinks[0]), play: false } )
    //   const playSound = (index) => {
    //     setData((arr) =>
    //       arr.map((sound, i) => {
    //         if (i === index) {
    //           sound.audio.play();
    //           return { ...sound, play: true };
    //         }
    //         sound.audio.pause();
    //         return { ...sound, play: false };
    //       })
    //     );
    //   };
    // const playSound = (event) => {
    //     event.preventDefault()
    //     console.log(data[0].link)
    //     data[0].link.play()
    // }
    //   useEffect(() => {
    //     console.log(data);
    //   }, [data]);
    
      const stopSound = (index) => {
        // setData((arr) =>
        //   arr.map((sound, i) => {
        //     if (i === index) {
        //       sound.audio.pause();
        //       return { ...sound, play: false };
        //     }
        //     return { ...sound, play: false };
        //   })
        // );
      };
    
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
          {/* {data.map((sound, i) => {
            return (
              <>
                {sound.play ? (
                  <button onClick={() => stopSound(i)}>pause</button>
                ) : (
                  <button onClick={() => playSound(i)}>play</button>
                )}
              </>
            );
          })} */}
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499655217&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  {/* <button onClick={(event) => playSound(event)}>play</button> */}
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );
    }
    
export default MusicPlayer