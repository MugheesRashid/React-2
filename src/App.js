import "./App.css";
import React,{ useState, useRef, useEffect } from 'react'
import SideBar from './components/SideBar';
import Home from './components/Home';
import SongDashboard from './components/SongDashboard'
import Search from './components/Search';
// Songs
import GhalatFehmi from "./Musics/GhalatFehmi.mp3"
import Kesariya from "./Musics/Kesariya.mp3"
import KaliKaliZulfonKe from "./Musics/Kali-Kali-Zulfon-Ke.mp3"
import DeewaneHumNahiHote from "./Musics/Deewane Hum Nahi Hote.mp3"
import Vaaste from "./Musics/Vaaste.mp3"
import RaatanLambiyan from "./Musics/RaataanLambiyan.mp3"
import Twonintyfive from "./Musics/295.mp3"
import KyaBoltiCompany from "./Musics/Kya-Bolte-Company.mp3"
import HumTeraBina from "./Musics/Hum-Tere-Bin.mp3"
import IkLamha from "./Musics/Ik-Lamha.mp3"
import ZihalMuskin from "./Musics/ZihalMuskin.mp3"
import TeraVaaste from "./Musics/Tera Vaaste.mp3"


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 

  function App(){
     const newcollection =[
     {img: 'https://i.scdn.co/image/ab67616d0000b2736791de7e8fc53f8710a8ca17',fileLocation: GhalatFehmi,songName: 'Tarasti hai Nigahain' ,singer: 'Asim Azhar,Mahira Khan'},
     {img: 'https://i.scdn.co/image/ab67616d00001e02c08202c50371e234d20caf62',fileLocation: Kesariya,songName: 'Kesariya' ,singer: 'Arjeet singh'},
     {img: 'https://i.scdn.co/image/ab67616d00001e0274a15231dbc371253d0c00ec',fileLocation: KaliKaliZulfonKe,songName: 'Kali Kali Zulfoon' ,singer: 'Nusrat Fateh Ali khan'},
     {img: 'https://i.scdn.co/image/ab67616d0000b273024a42387032964bc0d640fb',fileLocation: DeewaneHumNahiHote,songName: 'Dewaney harm nahi hotey' ,singer: 'Ijaz Ahmed'},
     {img: 'https://tse2.mm.bing.net/th?id=OIP.ae-N_0l39F2RjRjLpSrDKwAAAA&pid=Api&P=0&h=180',fileLocation: Vaaste, songName: 'Vaaste' ,singer: 'Dhvani Bhanushali,Nikhil DSouza' },
     {img: 'https://i.scdn.co/image/ab67616d00001e02a75c2f26913099a420050f01',fileLocation: RaatanLambiyan, songName: 'Raatan Lambiyan' ,singer: 'Jubin Nautiyal, Asees Kaur' },
     {img: 'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',fileLocation: Twonintyfive, songName: '295' ,singer: 'Sidhu Moose Wala' }, 
     {img: 'https://i.scdn.co/image/ab67616d00001e023f88e73dbf635f308161215f',fileLocation: KyaBoltiCompany, songName: 'Kya Bolti Company' ,singer: 'Emiway Bantai' }, 
     {img: 'https://tse1.mm.bing.net/th?id=OIP.5DW1_3hUi9lURqTCmLBI7gHaFj&pid=Api&P=0&h=180',fileLocation: HumTeraBina, songName: 'Tum Hi Ho' ,singer: 'Arijit Singh' }, 
     {img: 'https://i.scdn.co/image/ab67616d00001e02662770d782cd8c21dca9edda',fileLocation: IkLamha, songName: 'Ik Lamha' ,singer: 'Azaan Sami Khan’s' }, 
     {img: 'https://i.scdn.co/image/ab67616d00001e0273b0435dbfea11043c2909b8',fileLocation: ZihalMuskin, songName: 'Zihal e Muskin' ,singer: 'Vishal Mishra & Shreya Ghoshal' }, 
     {img: 'https://i.scdn.co/image/ab67616d00001e02b5e6c9ce5bb77c1607780315',fileLocation: TeraVaaste, songName: 'Tere Vaaste' ,singer: 'Varun Jain, Sachin- Jigar, Shadab Faridi, and Altamash Faridi.'}, 
     ]

    const [activeIndex, setActiveIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [dbnone,dbappear] = useState(null)
    const [homeHeight,setHomeHeight] = useState("95vh")
    
    const dbactivator = () =>{
          dbappear("Appeared")
    }
    const heightchanger = () =>{
    setHomeHeight("85vh")
    }
    useEffect(() => {
      if (activeIndex !== null) {
        if (audioPlayer.current) {
          // Pause the current audio if it exists
          if (typeof audioPlayer.current.pause === 'function') {
            audioPlayer.current.pause();
          }
        }
        
        const audio = new Audio();
        audio.src = newcollection[activeIndex].fileLocation;
        audio.addEventListener('loadedmetadata', () => {
          setDuration(audio.duration);
        });
        audio.addEventListener('timeupdate', () => {
          setCurrentTime(audio.currentTime);
        });
        audio.addEventListener('ended', () => {
          // Handle the end of the song, e.g., play the next song
          playNext();
        });
  
        audioPlayer.current = audio;
        if (isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    }, [activeIndex, isPlaying]);
  
    const togglePlay = () => {
      setIsPlaying((prev) => !prev);
    };
  
    const playNext = () => {
      if (activeIndex === null) return;
      const nextIndex = (activeIndex + 1) % newcollection.length;
      setActiveIndex(nextIndex);
      setCurrentTime(0);
      setIsPlaying(true);
    };
  
    const playPrev = () => {
      if (activeIndex === null) return;
      const prevIndex = (activeIndex - 1 + newcollection.length) % newcollection.length;
      setActiveIndex(prevIndex);
      setCurrentTime(0);
      setIsPlaying(true);
    };
  
    const handleSeek = (e) => {
      const newTime = parseFloat(e.target.value);
      setCurrentTime(newTime);
      if (audioPlayer.current) {
        audioPlayer.current.currentTime = newTime;
      }
    };
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secondsLeft = Math.floor(seconds % 60);
      return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }
    

     const items = newcollection.map((element, idx) => (
      <div key={idx} className="item" onClick={() => {
        if (idx === activeIndex) {
          togglePlay();
          dbactivator()
          heightchanger()
        } else {
          setActiveIndex(idx);
          setIsPlaying(true);
          dbactivator()
          heightchanger()
        }
      }}>
        <img src={element.img} alt={element.songName} />
        <audio ref={(ref) => (audioPlayer.current[idx] = ref)} src={`${element.fileLocation}`} />
        <div>
        <i className={`bi ${idx === activeIndex && isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
        </div>
        <h4>{element.songName}</h4>
        <p>{element.singer}</p>
      </div>
    ));

    return (
        <>
        <Router>
        <SideBar />
        <SongDashboard formatTime={formatTime} dbnone={dbnone} newcollection={newcollection} activeIndex={activeIndex} duration={duration} handleSeek={handleSeek} isPlaying={isPlaying} currentTime={currentTime} togglePlay={togglePlay} playNext={playNext} playPrev={playPrev} setCurrentTime={setCurrentTime} />
        <Routes>
        <Route path="/" element={<Home items={items} homeHeight={homeHeight}  />} />
        <Route path="/search" element={<Search />} />
        </Routes>
        </Router>
        </>
    )
}

export default App

