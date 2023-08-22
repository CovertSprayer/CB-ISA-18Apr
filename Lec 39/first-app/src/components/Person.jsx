//rafce
import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Role: {props.role}</p>
        <p>Status: {props.status}</p>
    </div>
  )
}

export default Person