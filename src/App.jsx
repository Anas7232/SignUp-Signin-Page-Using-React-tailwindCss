import React from 'react'
import './App.css'
import SignUpPage from './components/SignUpPage'
import SignInPage from './components/SignInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
