import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditQuote = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const inputAuthorRef = useRef();
  const inputTextRef = useRef();


  async function submitHandler(e){
    e.preventDefault();
    const author = inputAuthorRef.current.value;
    const text = inputTextRef.current.value;

    const res = await axios.patch(`http://localhost:4444/quotes/${params.id}`, {author, text});
    console.log(res);
    navigate('/')
  }

  async function getQuote(){
    const res = await axios.get(`http://localhost:4444/quotes/${params.id}`);
    console.log(res);
    setAuthor(res.data.quote.author);
    setText(res.data.quote.text);
  }

  useEffect(()=>{
    getQuote()
  }, [])

  return (
    <div className='form-div'>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id='author' ref={inputAuthorRef} value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author's Name" />
            </div>

            <div>
                <label htmlFor="text">Quote:</label>
                <textarea id="text" cols="30" rows="5" ref={inputTextRef} value={text} onChange={e => setText(e.target.value)} placeholder='Write here...'></textarea>
            </div>

            <button>Save</button>
        </form>
    </div>
  )
}

export default EditQuote