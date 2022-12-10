import React from "react";
//import axios from "axios";
import {useState, useEffect} from 'react'

const MusicPlayer = () => {
    const [musicArray] = useState([
        "https://soundcloud.com/noahkahan/false-confidence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
      ]);
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const musicData = musicArray.map((sound) => {
          return { audio: new Audio(sound), play: false };
        });
    
        setData(musicData);
      }, [musicArray]);
    
      const playSound = (index) => {
        setData((arr) =>
          arr.map((sound, i) => {
            if (i === index) {
              sound.audio.play();
              return { ...sound, play: true };
            }
            sound.audio.pause();
            return { ...sound, play: false };
          })
        );
      };
    
      useEffect(() => {
        console.log(data);
      }, [data]);
    
      const stopSound = (index) => {
        setData((arr) =>
          arr.map((sound, i) => {
            if (i === index) {
              sound.audio.pause();
              return { ...sound, play: false };
            }
            return { ...sound, play: false };
          })
        );
      };
    
      return (
        <div className="App">
          {data.map((sound, i) => {
            return (
              <>
                {sound.play ? (
                  <button onClick={() => stopSound(i)}>pause</button>
                ) : (
                  <button onClick={() => playSound(i)}>play</button>
                )}
              </>
            );
          })}
    
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );
    }
    
export default MusicPlayer