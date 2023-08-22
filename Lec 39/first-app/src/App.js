import React from 'react'
import Person from './components/Person'
import Random from './components/Random'

const App = () => {


  return (
    <>
      <Random/>
      <Person name='Yogesh' age='23' role='Student' status='Married' />
      <Person name='Avinash' age='24' role='Developer' status='Single' />
      <Person name='RadhaKrishan' age='25' role='Manager' status='Single' />
    </>
  )
}

export default App