import React, {useState} from 'react'

export default function Home() {
  const [clutter, setClutter] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const arryobj =[
  {img: 'https://tse1.mm.bing.net/th?id=OIP.rVe1NMMmq6CzzbenQM2YkwHaJT&pid=Api&P=0&h=180',songName: 'Tarasti hai Nigahain' ,singer: 'Asim Azhar'},
  {img: 'https://tse4.mm.bing.net/th?id=OIP.7by7DivFD9yl18VnOtpsQAHaHa&pid=Api&P=0&h=180',songName: 'Keyseria' ,singer: 'Arjeet singh'},
  {img: 'https://tse1.mm.bing.net/th?id=OIP.Z6QTlXBfwUWgqpU191J0MwAAAA&pid=Api&P=0&h=180',songName: 'Kali Kali Zulfoon' ,singer: 'Nusrat Fateh Ali khan'},
  {img: 'https://tse4.mm.bing.net/th?id=OIP.NFJuEQlTimIF_AEnjQDuYwHaHa&pid=Api&P=0&h=180',songName: 'Dewaney harm nahi hotey' ,singer: 'Ijaz Ahmed'},
 ]

 const targetbtn = (idx) => {
  setActiveIndex(idx);
};


  const items = arryobj.map((element, idx) => (
    <div key={idx} className="item">
      <img src={element.img} alt={element.songName} />
      <div><i onClick={() => targetbtn(idx)}
        className={`bi ${idx === activeIndex ? 'bi-pause-fill' : 'bi-play-fill'}`}></i></div>
      <h4>{element.songName}</h4>
      <p>{element.singer}</p>
    </div>
  ));

   
    return(
      <>
      <div className="homediv">
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
      <h3>New Collection</h3>
      <div className="items" id='list'>
        {items}

      </div>
      </div>
      </div>
      </>
    )

}