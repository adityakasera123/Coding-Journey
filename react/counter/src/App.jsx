import { useState } from 'react'
import './App.css'

function App(){
     let [add,setAdd]=useState(6);
  
  

    function Add(){
      setAdd(add+1)
    }
    
function remove(){
  if(add>0){
  setAdd(add-1)
}
}
  
  return (
    <>
    <h1> Counter in React </h1>
    <button onClick={Add}> Add Count : {add}</button> <br /> <br />
    <button onClick={remove}> Remove count :{add}</button>
    </>
  )
}



export default App


