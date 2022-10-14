import React, { useState } from 'react'
import "./App.css"
const Work = () => {
    
  return (
    <div className="Work_container">
        <input type="text" placeholder='Enter Task '/>
        <button className='SButton' onClick={()=>{console.log("clicked")}}>Add_Task</button>
    </div>
  )
}

export default Work;