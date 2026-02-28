import { useState } from 'react'
import './App.css'

  function App() {
    let[name,setName]=useState("");
      const [submitName, setSubmitName] = useState("");

let handleChange=(dets)=> {
  setName(dets.target.value)
}

let handleSubmit =()=>{
  setSubmitName(name)
}
  return ( 
    <>
      <input 
        type="text" 
        placeholder="Enter your name"
        onChange={handleChange}
      /> <br /> <br />
        <button onClick={handleSubmit}> Submit</button>
      <h1>Hello {submitName}</h1>
    </>
  );
}

export default App


