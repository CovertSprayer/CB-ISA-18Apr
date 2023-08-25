import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

  const todos = props.todoData.map((item, index)=>{
    return <Todo key={item.id} item={item} deleteTodo={props.deleteTodo}/>
  })

  return (
    <div>{todos}</div>
  )
}

export default TodoList