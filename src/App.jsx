import { useState } from 'react'

import './App.css'
import AddDonor from './components/AddDonor'
import ViewDonor from './components/ViewDonor'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddDonor/>}/>
      <Route path='/view' element={<ViewDonor/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
