import React from 'react'

export default function Home(props) {

   
    return(
      <>
        <h3>New Collection</h3>
        <div className="items" id='list'>
        {props.items}
        </div>
        </>
    )

}