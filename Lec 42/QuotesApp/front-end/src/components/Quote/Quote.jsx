import React from 'react'
import './Quote.css'

const Quote = ({item}) => {
  return (
    <article className='quote-card'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Monroecirca1953.jpg" alt="" />
        <div className='quote-card-body'>
            <p>
                <h2>❝</h2>
                {item.text}
            </p>
            <h3>{item.author}</h3>
        </div>
    </article>
  )
}

export default Quote