import React from 'react'
import './App.css'
import MainNavigation from './components/MainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes'
import NewQuote from './components/pages/NewQuote'

const App = () => {
  return (
    <>
      <MainNavigation/>

      <Routes>
        <Route path='/' element={<AllQuotes/>}></Route>
        <Route path='/new' element={<NewQuote/>}></Route>
      </Routes>
    </>
  )
}

export default App