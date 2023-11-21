import React from 'react'

function clickMe(){
    alert("welcome to React SKCET");
}


export default function button() {
  return (
  
    <button onClick={clickMe}>click Me</button>
  )
}