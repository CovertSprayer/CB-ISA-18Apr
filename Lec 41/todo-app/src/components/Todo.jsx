import React from 'react'
import {GoTrash} from 'react-icons/go'

const Todo = (props) => {
  return (
    <li>
      <input onClick={()=>props.checkTodo(props.item.id)} type="checkbox" defaultChecked={props.item.check} />
      <span style={{textDecoration: props.item.check && 'line-through'}}>{props.item.task} </span>
      <span onClick={()=>props.deleteTodo(props.item.id)}> <GoTrash/> </span> 
    </li>
  )
}

export default Todo