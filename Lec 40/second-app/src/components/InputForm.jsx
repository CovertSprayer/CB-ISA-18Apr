import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const InputForm = (props) => {

  let [input, setInput] = useState('');  

  function submitHandler(e){
    e.preventDefault();
    // console.log(input);
    const newTodo = {id:uuid(), task:input}
    props.addTodo(newTodo);
    setInput('');
  }

  function changeHandler(e){
    setInput(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
        <input onChange={changeHandler} type="text" placeholder='Type Here...' value={input} />
        <button>Add</button>
    </form>
  )
}

export default InputForm