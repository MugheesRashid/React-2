import "./App.css";
import React,{ useState, useRef, useEffect } from 'react'
import SideBar from './components/SideBar';
import Home from './components/Home';
import SongDashboard from './components/SongDashboard'
import AllSongs from './components/AllSongs';
import Wedding from "./components/Wedding";
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
import GaltiSeMistake from "./Musics/Galti Se Mistake.mp3"
import LutGaye from "./Musics/Lut Gaye.mp3"
import Arcade from "./Musics/Arcade.mp3"
import Lovely from "./Musics/Lovely.mp3"
import TumheDillagi from "./Musics/tumhe-dillagi.mp3"
import ColdHours from "./Musics/Cold Hours.mp3"
import LetMeDown  from "./Musics/Let-Me-Down-Slowly.mp3"
import Pasoori  from "./Musics/Pasoori.mp3"
import KhairiyatPucho  from "./Musics/Khairiyat-Pucho.mp3"
import BijleeBijlee  from "./Musics/Bijlee Bijlee.mp3"
import BrownMunde  from "./Musics/Brown Munde.mp3"
import Cheques  from "./Musics/Cheques.mp3"
import StillRollin  from "./Musics/Still Rollin.mp3"
import WeRollin  from "./Musics/We Rollin.mp3"
import Childhood  from "./Musics/Childhood.mp3"
import Excuses  from "./Musics/Excuses.mp3"
import AfreenAfreen  from "./Musics/Afreen-Afreen.mp3"
import KahaniSuno  from "./Musics/Kahani Suno.mp3"
import mehindihairachneywali from "./Musics/MehendiHaiRachnewali.mp3"
import yeladkiyan from "./Musics/yeladkiyan.mp3"
import mehindilagakeyrakhna from "./Musics/MehndiLagaKeRakhna.mp3"
import LatheyDiChadar from "./Musics/LatheyDiChaadar.mp3"
import mehindisg from "./Musics/Mehendi.mp3"






import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 

  function App(){
    console.log(Childhood)

    const weddingmehindi = [
    {img: 'https://i.scdn.co/image/ab67616d00001e028b0cf882235c7ef59eb77a5f',fileLocation: mehindihairachneywali,songName: 'Mehindi Hai Rachney Wala' ,singer: 'Nil'},
    {img: 'https://i.scdn.co/image/ab67616d00001e020553935df95aaa9381f4fc66',fileLocation: mehindilagakeyrakhna,songName: 'Mehindi Laga Key Rahkna' ,singer: 'Nil'},
    {img: 'https://i.scdn.co/image/ab67616d00001e024fa869efddd5358308f3d9a7',fileLocation: mehindisg,songName: 'Mehendi' ,singer: 'Nil'},
    {img: 'https://i.scdn.co/image/ab67616d00001e0263c750e8bc80c74de4e644d8',fileLocation: LatheyDiChadar,songName: 'Lathey Di Chadar' ,singer: 'Nil'},
    {img: 'https://i.scdn.co/image/ab67616d00001e02941eb533e845e5c2299570b9',fileLocation: yeladkiyan,songName: 'Ye Ladkiyan Hai Allah' ,singer: 'Nil'},

  ]
     const newcollection =[
     {img: 'https://i.scdn.co/image/ab67616d00001e02f10ef7774581590cf480ed5c',fileLocation: GaltiSeMistake, songName: 'Ghalti Se Mistake' ,singer: 'Pritam, Arjeet Singh, Amit Mishra'},
     {img: /*'https://i.scdn.co/image/ab67616d0000b2736791de7e8fc53f8710a8ca17'*/ "",fileLocation: GhalatFehmi,songName: 'Tarasti hai Nigahain' ,singer: 'Asim Azhar,Mahira Khan'}, 
     {img: /*'https://tse1.mm.bing.net/th?id=OIP.5DW1_3hUi9lURqTCmLBI7gHaFj&pid=Api&P=0&h=180'*/ "",fileLocation: HumTeraBina, songName: 'Tum Hi Ho' ,singer: 'Arijit Singh' },  
     {img: /*'https://i.scdn.co/image/ab67616d00001e02662770d782cd8c21dca9edda'*/ "",fileLocation: IkLamha, songName: 'Ik Lamha' ,singer: 'Azaan Sami Khan’s' }, 
     {img: /*'https://i.scdn.co/image/ab67616d00001e02c08202c50371e234d20caf62'*/ "",fileLocation: Kesariya,songName: 'Kesariya' ,singer: 'Arjeet singh'},
     {img: 'https://i.scdn.co/image/ab67616d00001e023f88e73dbf635f308161215f',fileLocation: KyaBoltiCompany, songName: 'Kya Bolti Company' ,singer: 'Emiway Bantai' }, 
     {img: /*'https://i.scdn.co/image/ab67616d00001e028634403946cb8f08b83e4c40'*/ "",fileLocation: LutGaye, songName: 'Lut Gaye' ,singer: 'Jubin Nautiyal'},  
     {img: 'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',fileLocation: Twonintyfive, songName: '295' ,singer: 'Sidhu Moose Wala' }, 
     {img: 'https://tse2.mm.bing.net/th?id=OIP.ae-N_0l39F2RjRjLpSrDKwAAAA&pid=Api&P=0&h=180',fileLocation: Vaaste, songName: 'Vaaste' ,singer: 'Dhvani Bhanushali,Nikhil DSouza' },
     {img: /*'https://i.scdn.co/image/ab67616d00001e0273b0435dbfea11043c2909b8'*/ "",fileLocation: ZihalMuskin, songName: 'Zihal e Muskin' ,singer: 'Vishal Mishra & Shreya Ghoshal' }, 
    ]
     const allSongs =[
      {img: 'https://i.scdn.co/image/ab67616d00001e02d43535f0e59cedeeb44abe9f',fileLocation: AfreenAfreen,songName: 'Afreen Afreen' ,singer: 'Rahat Fateh Ali Khan'},
      {img: 'https://i.scdn.co/image/ab67616d00001e02a954408e456d4d9d410f448b',fileLocation: Arcade,songName: 'Arcade' ,singer: 'Duncan Laurence'}, 
      {img: 'https://i.scdn.co/image/ab67616d00001e02d9a129c4a656a55afff2ca02',fileLocation: BrownMunde,songName: 'Brown Munde' ,singer: 'AP Dillon, Gurinder Gill, Shinder Kalhloon, Gminxr'},   
      {img: 'https://i.scdn.co/image/ab67616d00001e02b5a26cb2c2ef2fa440baffb0',fileLocation: BijleeBijlee,songName: 'Bijlee bijlee' ,singer: 'Harrdy Sandhu'},  
      {img: 'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',fileLocation: Cheques,songName: 'Cheques' ,singer: 'Shubh'}, 
      {img: '	https://i.scdn.co/image/ab67616d00001e026631d6c1af6973fbd055bc58',fileLocation: Childhood,songName: 'Childhood' ,singer: 'Shubh'},       
      {img: 'https://i.scdn.co/image/ab67616d00001e0257b317e7744c2b16c2e51ed9',fileLocation: ColdHours,songName: 'Cold Hours' ,singer: 'aleemrk, Umair'},
      {img: 'https://i.scdn.co/image/ab67616d0000b273024a42387032964bc0d640fb',fileLocation: DeewaneHumNahiHote,songName: 'Dewaney harm nahi hotey' ,singer: 'Ijaz Ahmed'},
      {img: 'https://i.scdn.co/image/ab67616d0000b273024a42387032964bc0d640fb',fileLocation: Excuses,songName: 'Excuses' ,singer: 'AP Dillon, Gurinder Gill'},
      {img: 'https://i.scdn.co/image/ab67616d00001e02f10ef7774581590cf480ed5c',fileLocation: GaltiSeMistake, songName: 'Ghalti Se Mistake' ,singer: 'Pritam, Arjeet Singh, Amit Mishra'},
      {img: /*'https://i.scdn.co/image/ab67616d00001e02662770d782cd8c21dca9edda'*/ "",fileLocation: IkLamha, songName: 'Ik Lamha' ,singer: 'Azaan Sami Khan’s' }, 
      {img: 'https://i.scdn.co/image/ab67616d00001e0274a15231dbc371253d0c00ec',fileLocation: KahaniSuno,songName: 'Kahani Suno' ,singer: 'Nusrat Fateh Ali khan'},
      {img: 'https://i.scdn.co/image/ab67616d00001e0274a15231dbc371253d0c00ec',fileLocation: KaliKaliZulfonKe,songName: 'Kali Kali Zulfoon' ,singer: 'Nusrat Fateh Ali khan'},
      {img: /*'https://i.scdn.co/image/ab67616d00001e02c08202c50371e234d20caf62'*/ "",fileLocation: Kesariya,songName: 'Kesariya' ,singer: 'Arjeet singh'},
      {img: 'https://i.scdn.co/image/ab67616d00001e02eaa6b4bfb5954ee5a5a8ce9e',fileLocation: KhairiyatPucho,songName: 'Khairiyat Pucho' ,singer: 'Arjeet singh'},
      {img: 'https://i.scdn.co/image/ab67616d00001e023f88e73dbf635f308161215f',fileLocation: KyaBoltiCompany, songName: 'Kya Bolti Company' ,singer: 'Emiway Bantai' },
      {img: 'https://i.scdn.co/image/ab67616d00001e02459d675aa0b6f3b211357370',fileLocation: LetMeDown, songName: 'Let Me Down Slowly' ,singer: 'IAMPRANN'}, 
      {img: 'https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c',fileLocation: Lovely, songName: 'lovely' ,singer: 'Billie Eilish, Khalid'},  
      {img: /*'https://i.scdn.co/image/ab67616d00001e028634403946cb8f08b83e4c40'*/ "",fileLocation: LutGaye, songName: 'Lut Gaye' ,singer: 'Jubin Nautiyal'},  
      {img: 'https://i.scdn.co/image/ab67616d00001e023f3d35703bdcd917dad51c4f',fileLocation: Pasoori, songName: 'Pasoori' ,singer: 'Shae Gill,Ali Sethi'},  
      {img: 'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',fileLocation: WeRollin, songName: 'We Rollin' ,singer: 'Shubh' },
      {img: /*'https://i.scdn.co/image/ab67616d00001e02a75c2f26913099a420050f01'*/ "",fileLocation: RaatanLambiyan, songName: 'Raatan Lambiyan' ,singer: 'Jubin Nautiyal, Asees Kaur' },
      {img: 'https://tse4.mm.bing.net/th?id=OIP.nfEbbq3_BrsYR8ssDkngcAHaEK&pid=Api&P=0&h=220',fileLocation: StillRollin, songName: 'Still Rollin' ,singer: 'Shubh' },
      {img: /*'https://i.scdn.co/image/ab67616d0000b2736791de7e8fc53f8710a8ca17'*/ "",fileLocation: GhalatFehmi,songName: 'Tarasti hai Nigahain' ,singer: 'Asim Azhar,Mahira Khan'}, 
      {img: /*'https://tse1.mm.bing.net/th?id=OIP.5DW1_3hUi9lURqTCmLBI7gHaFj&pid=Api&P=0&h=180'*/ "",fileLocation: HumTeraBina, songName: 'Tum Hi Ho' ,singer: 'Arijit Singh' },  
      {img: 'https://i.scdn.co/image/ab67616d00001e02709a2b476833289c2067ec15',fileLocation: TumheDillagi,songName: 'Tumhe Dillagi Bhool Jane' ,singer: 'Nusrat Fateh Ali Khan'}, 
      {img: 'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',fileLocation: Twonintyfive, songName: '295' ,singer: 'Sidhu Moose Wala' }, 
      {img: /*'https://i.scdn.co/image/ab67616d00001e02b5e6c9ce5bb77c1607780315'*/ "",fileLocation: TeraVaaste, songName: 'Tere Vaaste' ,singer: 'Varun Jain, Sachin- Jigar, Shadab Faridi, and Altamash Faridi.'},
      {img: 'https://tse2.mm.bing.net/th?id=OIP.ae-N_0l39F2RjRjLpSrDKwAAAA&pid=Api&P=0&h=180',fileLocation: Vaaste, songName: 'Vaaste' ,singer: 'Dhvani Bhanushali,Nikhil DSouza' },
      {img: /*'https://i.scdn.co/image/ab67616d00001e0273b0435dbfea11043c2909b8'*/ "",fileLocation: ZihalMuskin, songName: 'Zihal e Muskin' ,singer: 'Vishal Mishra & Shreya Ghoshal' }, 
      ]

    const [activeIndex, setActiveIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [homeHeight,setHomeHeight] = useState("95vh")
    const [playlist,setPlaylist] = useState(newcollection)
   
    // function winback() {
    //   history.go(1)
    // }

    // function winforward() {
    //   history.go(-1)
    // }
    const playlistchangera = () =>{
      setPlaylist(newcollection)
  
      if (typeof audioPlayer.current.pause === 'function') {
       audioPlayer.current.pause();
     }
    }

    const playlistchangerb = () =>{
      setPlaylist(allSongs)
      if (typeof audioPlayer.current.pause === 'function') {
        audioPlayer.current.pause();
      }
    }

    const playlistchangerc = () =>{
      setPlaylist(weddingmehindi)
      if (typeof audioPlayer.current.pause === 'function') {
        audioPlayer.current.pause();
      }
    }

    const playlistchanger1 = () =>{
    //  setHomeHeight("95vh")

    }
   
    const playlistchanger2 = () =>{
      // setHomeHeight("95vh")
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
        audio.src = playlist[activeIndex].fileLocation;
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
      const nextIndex = (activeIndex + 1) % playlist.length;
      setActiveIndex(nextIndex);
      setCurrentTime(0);
      setIsPlaying(true);
    };
  
    const playPrev = () => {
      if (activeIndex === null) return;
      const prevIndex = (activeIndex - 1 + playlist.length) % playlist.length;
      setActiveIndex(prevIndex);
      setCurrentTime(0);
      setIsPlaying(true);
    };
  
    const handleSeek = (e) => {
      const newTime = parseFloat(e.target.value);
      setCurrentTime(newTime);
    
      if (audioPlayer.current) {
        const audioRef = audioPlayer.current;
    
        // Store the current playback position before pausing
        const wasPaused = audioRef.paused;
    
        // Pause the audio
        audioRef.pause();
    
        // Set the new playback position
        audioRef.currentTime = newTime;
    
        // If it was originally paused, resume playback
        if (!wasPaused) {
          audioRef.play().catch((error) => {
            console.error("Audio playback error:", error);
          });
        }
      }
    };

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secondsLeft = Math.floor(seconds % 60);
      return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }

    const mehindi = weddingmehindi.map((element, idx) => (
      <div key={idx} className="item" onClick={() => {
        if (idx === activeIndex) {
          togglePlay();
         //  dbactivator();
          heightchanger();
          playlistchangerc()
        } else {
          setActiveIndex(idx);
          setIsPlaying(true);
         //  dbactivator();
          heightchanger();
          playlistchangerc()
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
     
    ))

     const items = newcollection.map((element, idx) => (
         <div key={idx} className="item" onClick={() => {
           if (idx === activeIndex) {
             togglePlay();
            //  dbactivator();
             heightchanger();
             playlistchangera()
           } else {
             setActiveIndex(idx);
             setIsPlaying(true);
            //  dbactivator();
             heightchanger();
             playlistchangera()
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
        
       ))
       const AllSongsitems = allSongs.map((element, idx) => (
        <div key={idx} className="item" onClick={() => {
          if (idx === activeIndex) {
            togglePlay();
            heightchanger();
            playlistchangerb()
          } else {
            setActiveIndex(idx);
            setIsPlaying(true);
            heightchanger();
            playlistchangerb()
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
       
      ))  
      // window.addEventListener('keydown', function key(e) {
      //   let press = "Pressed key is:" + e.key;
      //   console.log(press)
      // if (audioPlayer.current.play()) {
      //   if (e.key == " ") {
      //     togglePlay()
      //   }
      // }})

    return (
        <>
        <Router>
          <div className="responsivent">
            <div className="rsnote">
            <i class="bi bi-laptop"></i>
              <h11>Open in Devices having more than 800px of width</h11>
              <p>This website is not responsive for tablet and mobiles...</p>
            </div>
          </div>
        <SideBar playlistchanger1={playlistchanger1} playlistchanger2={playlistchanger2} playlist={playlist} setPlaylist={setPlaylist} />
        <SongDashboard playlist={playlist} formatTime={formatTime} newcollection={newcollection} activeIndex={activeIndex} duration={duration} handleSeek={handleSeek} isPlaying={isPlaying} currentTime={currentTime} togglePlay={togglePlay} playNext={playNext} playPrev={playPrev} setCurrentTime={setCurrentTime} />
        <div style={{height: homeHeight}} className="homediv">
        <div className="homenav">
        <div className="btn">
        <button className='mr-10'><i className="bi bi-chevron-left"></i></button>
        <button><i className="bi bi-chevron-right"></i></button>
        </div>
        <div className="heading">
            <h2>Sasta Spotify</h2>
        </div>
      </div>
      <div className="newcollection">
      <Routes>
      <Route path="/wedding/mehindi" element={<Wedding mehindi={mehindi} />} />
        <Route path="/" element={<Home items={items} homeHeight={homeHeight} ZihalMuskin={ZihalMuskin} IkLamha={IkLamha} TeraVaaste={TeraVaaste}  />} />
        <Route path="/allsongs" element={<AllSongs mehindi={mehindi} allSongs={allSongs} playlistchangera={playlistchangera} playlistchangerb={playlistchangerb} AllSongsitems={AllSongsitems}/>} />
        </Routes>
      </div>
      </div>
        </Router>
        </>
    )
}

export default App

