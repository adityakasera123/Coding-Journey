import React from 'react'

const card = (props) => {

  return (
     <div className="card">
       <div>
         <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kkJwcOdJzQY1qwZO9N89pgwRhyHdvI3kFg&s" alt="" />
          <button>Save <i class="ri-bookmark-line"></i></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post} </h2>
          <div className="centerflex">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
      
        </div>
       </div>
        <div className="bottom">
          
            <div className="bottom1">
              <h3>$200-250k</h3>
              <p>Banglore,India</p>
            </div>
          
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default card