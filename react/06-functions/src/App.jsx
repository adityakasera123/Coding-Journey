

const App = () => {

  function pageScrolling(){
    console.log("page is scrolling")
  }
  function btnClick(){
    console.log("button was click")
  }
  return (
    <div onWheel={pageScrolling}>
    <div className='page1'> </div>
    <div className='page2'></div>
    <div className='page3'></div>

    <button className="btn" onClick={btnClick}>Press Here</button>
    </div>
  )
}

export default App