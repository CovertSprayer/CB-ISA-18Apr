import React from 'react'
import './NewQuote.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewQuote = () => {

  const navigate = useNavigate();

  let userInputRef = useRef();
  let quoteInputRef = useRef();

  async function submitHandler(e){
    e.preventDefault();
    const author = userInputRef.current.value;
    const text = quoteInputRef.current.value;

    await axios.post('http://localhost:4444/quotes', {author, text});
    navigate('/');
  }

  return (
    <div className='form-div'>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id='author' ref={userInputRef} placeholder="Author's Name" />
            </div>

            <div>
                <label htmlFor="text">Quote:</label>
                <textarea id="text" cols="30" rows="5" ref={quoteInputRef} placeholder='Write here...'></textarea>
            </div>

            <button>Add</button>
        </form>
    </div>
  )
}

export default NewQuote