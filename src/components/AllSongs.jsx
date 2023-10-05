import React,{useState,useRef,useEffect} from 'react'


export default function AllSongs(props) {
   
  
    return (
     <>
      <h3>All Songs</h3>
      <div className="items">
        {props.AllSongsitems}
      </div>

    </>
    )
  }

