import { useState } from 'react'

import './App.css'
import API from './API'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter >
      <API />
    </BrowserRouter>
  )
}

export default App
