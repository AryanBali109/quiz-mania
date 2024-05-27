import React from 'react'
// import './Main.css'
import Learning from '../assets/Learning.svg'
export default function Main() {
  return (
    <div id='main'>
        <div className="main-left-part">            
            <h1 className="main-heading">Welcome to quiz mania?</h1>
            <p className="main-para">Have fun and learn something new with our online quiz website.Take our online quiz and find out! how smart are you?</p>
            {/* <p className="main-para"></p> */}
            <div id="buton">

            <button onClick={()=>{document.location="#quiznavigate"}} className='main-btnss' id='main-button1' title="let's play quiz">Play Quiz</button>
            <button onClick={()=>{document.location="#section5"}} className='main-btnss' id='main-button2' title='Send message me for any update'>Let's Talk</button>
            </div>
        </div>
      <div className="main-right-part">
        <img src={Learning} alt="error" id='main-image'/>
      </div>
    </div>
  )
}

{/* <ul>
      <li className="main-item-list">
        <a href="" className="main-item-anchors">HTML</a>
      </li>
      <li className="main-item-list">
        <a href="" className="main-item-anchors">CSS</a>
      </li>
      <li className="main-item-list">
        <a href="" className="main-item-anchors">JAVSCRIPT</a>
      </li>
      <li className="main-item-list">
        <a href="" className="main-item-anchors">C</a>
      </li>
      </ul> */}