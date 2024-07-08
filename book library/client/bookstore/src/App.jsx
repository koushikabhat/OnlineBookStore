import React,{ useState, useEffect } from 'react'
import Navbar from './Navbar'
import Container1 from './Container1'
import {BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import BookDetails from './BookDetails'
import Background from './Background'
import BgText from './BgText'


function App() {

  return (
      <Router>
        <Background/>
        <Navbar/>
        <BgText/>
          <Routes>
            <Route path='/' element = {<Container1 />}/>
            <Route path='/book/:bookId' element = {<BookDetails />}/>
          </Routes>
      </Router>
    
  )
}

export default App
