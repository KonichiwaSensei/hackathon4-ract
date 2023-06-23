import { useContext, useState } from 'react'

import './App.css'
import API from './API'
import { BrowserRouter } from 'react-router-dom'
import { ImageContextProvider } from './ImageContextProvider'
import { ImageContext } from './ImageContext'

function App() {

  const iThinkThisWillNotWork = useContext(ImageContext)

  console.log(iThinkThisWillNotWork);

  return (
    <BrowserRouter >
      <ImageContextProvider>
        <API />
      </ImageContextProvider>
    </BrowserRouter>
  )
}

export default App
