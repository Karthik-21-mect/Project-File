import React from 'react'
import './SecondBar.css'
function SecondBar() {
  return (
    <div className='SecondBar'>
        <div className='SecondBarText'>
        <i class="ri-briefcase-fill ri-lg"></i>
        <text className='tex'> Jobs &nbsp; &gt;&nbsp; Full-stack Developer</text>
        <button className='ViewJob'>View Job Details</button>
        <button className='Published'>Published</button>
        <select name="Add"className='drop'>Add Details
            <option value="1">Add Candidate</option>
            <option value="2">Back-End</option>
            <option value="3">Front-End</option>
        </select>
        <div><input type="text" placeholder='Search' id='search1bar'></input></div>

        </div>
    </div>
  )
}

export default SecondBar