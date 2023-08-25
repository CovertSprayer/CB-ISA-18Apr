import React from 'react'
import {GoTrash} from 'react-icons/go'

const Todo = (props) => {
  return (
    <li>{props.item.task} <span onClick={()=>props.deleteTodo(props.item.id)}> <GoTrash/> </span> </li>
  )
}

export default Todo