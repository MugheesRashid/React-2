import React,{useState,useRef,useEffect} from 'react'


export default function AllSongs(props) {
   
  
    return (
     <>
      <h3>All Songs</h3>
      <br/>
      <div className="items">
        {props.AllSongsitems}
      </div>
      <br></br>
      <br/>
      <h3>Wedding</h3>
      <h3>Mehndi</h3>
      <div className="items">
        {props.mehindi}
      </div>
    </>
    )
  }

