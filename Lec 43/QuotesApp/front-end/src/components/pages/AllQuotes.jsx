import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote';

const AllQuotes = () => {


  const [quotes, setQuotes] = useState([]);

  async function getQuotes(){
    const res = await axios.get('http://localhost:4444/quotes')
    setQuotes(res.data);
  }

  useEffect(()=>{
    getQuotes();
  }, [])

  return (
    <div style={{display:"flex", flexWrap:"wrap",gap:"25px", justifyContent:"center", marginTop:"25px"}}>
      {quotes.map((item) => {
        return <Quote key={item._id} item={item}/>
      })}
    </div>
  )
}

export default AllQuotes