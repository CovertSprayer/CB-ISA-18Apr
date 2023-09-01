import React from 'react'
import './NewQuote.css'

const NewQuote = () => {
  return (
    <div className='form-div'>
        <form>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id='author' placeholder="Author's Name" />
            </div>

            <div>
                <label htmlFor="text">Quote:</label>
                <textarea id="text" cols="30" rows="5" placeholder='Write here...'></textarea>
            </div>

            <button>Add</button>
        </form>
    </div>
  )
}

export default NewQuote