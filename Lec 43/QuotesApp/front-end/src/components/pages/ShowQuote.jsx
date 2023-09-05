import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {FaTrash} from 'react-icons/fa'
import {BiSolidEdit} from 'react-icons/bi'

const ShowQuote = () => {
  const navigate = useNavigate();
  const[quote, setQuote] = useState({});
  const params = useParams();
  
  async function getQuote(){
    const res = await axios.get(`http://localhost:4444/quotes/${params.id}`)
    console.log(res)
    setQuote(res.data.quote);
  }

  useEffect(()=>{
    getQuote();
  }, [])


  async function deleteHandler(id){
    await axios.delete(`http://localhost:4444/quotes/${id}`)
    navigate('/');
  }

  async function editHandler(id){

    navigate(`/quotes/${id}/edit`)
  }

  return (
    <article style={{margin:'20px'}} className='quote-card'>
        <img src={quote.photo} alt="" />
        <div className='quote-card-body'>
            <h2 style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span>❝</span>
                <span className='btns'>
                    <span onClick={()=>editHandler(quote._id)}><BiSolidEdit/></span>
                    <span onClick={()=>deleteHandler(quote._id)}><FaTrash/></span>
                </span>
            </h2>
            <p>{quote.text}</p>
            <h3>{quote.author}</h3>
        </div>
    </article>
  )
}

export default ShowQuote