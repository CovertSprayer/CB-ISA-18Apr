import React, { useState } from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
import {v4 as uuid} from 'uuid'

const TodoApp = () => {
  
  let dummyData = [
    {id:uuid(), task:'Watch Movies'},
    {id:uuid(), task:'Buy Groceries'},
    {id:uuid(), task:'Learn new Tech'},
    {id:uuid(), task:'Drink 10 gl of water'},
  ]

  let [todos, setTodos] = useState(dummyData)

  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  function deleteTodo(id){
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <>
      <InputForm todoData={todos} addTodo={addTodo}/>
      <TodoList todoData={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default TodoApp