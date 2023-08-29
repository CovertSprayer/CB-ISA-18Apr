import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
// import {v4 as uuid} from 'uuid'

const TodoApp = () => {
  
  // let dummyData = [
  //   {id:uuid(), task:'Watch Movies'},
  //   {id:uuid(), task:'Buy Groceries'},
  //   {id:uuid(), task:'Learn new Tech'},
  //   {id:uuid(), task:'Drink 10 gl of water', check:false},
  // ]

  let data = JSON.parse(localStorage.getItem('todos') || "[]");

  let [todos, setTodos] = useState(data);

  function addTodo(todo){
    // localStorage.setItem('todos', JSON.stringify(todos));
    setTodos([...todos, todo]);
  }

  function deleteTodo(id){
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }

  function checkTodo(id){
    setTodos((prevState)=>{
      return prevState.map(item => item.id === id ? {...item, check: !item.check} : item)
    })
  }

  useEffect(()=>{
    console.log('hello from useEffect');
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <InputForm todoData={todos} addTodo={addTodo}/>
      <TodoList todoData={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </>
  )
}

export default TodoApp