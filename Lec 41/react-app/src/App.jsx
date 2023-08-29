import React from 'react'
import AllProducts from './components/AllProducts'
import { Link, Route, Routes } from 'react-router-dom'
import Cat from './components/Cat'
import Dog from './components/Dog'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/cat">Cat</Link></li>
          <li><Link to="/dog">Dog</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/cat' element={<Cat/>}/>
        <Route path='/dog' element={<Dog/>}/>
        <Route path='/products' element={<AllProducts/>} />
      </Routes>
      
    </div>
  )
}

export default App