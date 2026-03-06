import { useState } from 'react'
import './App.css'

function App(){
  return <Child name ="Aditya"/>
}

function Child({name}){
  return (
    <h1>Hello {name}</h1>
  )
}

export default App


