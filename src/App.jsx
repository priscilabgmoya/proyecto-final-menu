import './App.css'
import Login from './components/login'
import { useState } from 'react'
import Register from './components/register'
import { Route, Routes } from 'react-router-dom'


function App() {

return (
    <>
    {/* <Register></Register>
    <Routes>
      <Route path='Login' element = {<Login/>}/>
      
      
      <Routes/> */}
    
    <Login/>
      </>
  )
}

export default App; 
