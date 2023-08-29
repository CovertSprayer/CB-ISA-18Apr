import React from 'react'
import {useNavigate} from 'react-router-dom'

const Dog = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dog</h1>
      <button onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}

export default Dog