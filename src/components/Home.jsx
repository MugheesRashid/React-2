import React from 'react'

export default function Home(props) {

   
    return(
      <>
      <div style={{height: props.homeHeight}} className="homediv">
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
        {props.items}

      </div>
      </div>
      </div>
      </>
    )

}