import React from 'react'

export default function Wedding(props){

    return(
        <>
      <h3>Wedding</h3><br></br><br></br>
      <h3>Mehndi</h3>
      <div className="items">
        {props.mehindi}
      </div>
        </>
    )
}

