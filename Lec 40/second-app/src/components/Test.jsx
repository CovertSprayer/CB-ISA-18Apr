import React, { useState } from 'react'

const Test = () => {

//   let naam = 'Yogesh'
  let [naam, setNaam] = useState('Yogesh Dutt');

  function clickHandler(){
    console.log('clicked', naam);
    // naam = 'Priyanshi';
    setNaam('Priyanshi');
    console.log(naam);
  }

  return (
    <div onClick={()=>clickHandler()}>Name: {naam}</div>
  )
}

export default Test