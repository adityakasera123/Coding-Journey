import { useState } from 'react'
import './App.css'

function App(){
     let [add,setAdd]=useState(10);
  
  
function Add(){
  if(add < 10){
    setAdd(add + 1);
  }
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
   
<button onClick={remove} disabled={add===0}> Decrease</button> <br/>
 <br />
 
<button onClick={Add} disabled={add >= 10}>Increase</button>
    </>
  )
}



export default App


