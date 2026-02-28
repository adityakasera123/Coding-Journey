import { useState } from 'react'
import './App.css'

  function App() {
    let[name,setName]=useState("");
      const [submitName, setSubmitName] = useState("");
      const [error,setError] = useState("");

let handleChange=(dets)=> {
  setName(dets.target.value)
}

let handleSubmit =()=>{
 if(name === ""){
  setError("Please Enter The Text");
  setSubmitName("");
 }else{
  setError("");
  setSubmitName(name);
 }
}
  return ( 
    <>
      <input 
        type="text" 
        placeholder="Enter your name"
        onChange={handleChange}
      /> <br /> <br />
        <button onClick={handleSubmit}> Submit</button>
        <h3 style={{color:"red"}}>{error}</h3>
      <h1>Hello {submitName}</h1>
    </>
  );
}

export default App


