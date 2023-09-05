import React from 'react'
import './Quote.css'
import { useNavigate } from 'react-router-dom'

const Quote = ({item}) => {
  const navigate = useNavigate();

  function clickHandler(id){
    navigate(`/quotes/${id}`)
  }

  return (
    <article onClick={()=>clickHandler(item._id)} className='quote-card'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Monroecirca1953.jpg" alt="" />
        <div className='quote-card-body'>
            <h2>❝</h2>
            <p>{item.text}</p>
            <h3>{item.author}</h3>
        </div>
    </article>
  )
}

export default Quote