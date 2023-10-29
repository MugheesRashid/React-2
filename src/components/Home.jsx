import React from 'react'

export default function Home(props) {

   
    return(
      <>
        <h3>New Collection</h3>
        <div className="items" id='list'>
        {props.items}
        </div>
        <h4 style={{fontSize : "2.5rem",display : "block",margin : "10px 20px"}}>Playists</h4>
        <div className="playlistoptions">
          <div className="playlistwrapper">
           
          </div>
        </div>
        </>
    )

}