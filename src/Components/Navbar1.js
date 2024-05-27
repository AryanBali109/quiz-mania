import React, { useState } from 'react'
// import menusvg from '../assets/icons8-menu.svg'
import menupng from '../assets/menu1.png'
// import './Navbar1.css'
import crosspng from '../assets/cross1.png'
export default function Navbar() {
    const [mbnotdisplay,mbdisplay] = useState(false)
    const click = ()=>{
        mbdisplay(!mbnotdisplay)
    }
    // menue icon changeness
    // let change = (elem)=>{
    //     return mbnotdisplay?elem.src = menupng:elem.src = "X"
    // }
  return (
    <>
    <div className='navbar'>
      <nav>
        <h1 className='nav-heading'>quiz mainia</h1>
        <div className="menu">
            {/* <button onClick={click} className='m-bar-btn'>X</button> */}
            <button  id='menupngimg' onClick={click}>
            {
                mbnotdisplay? <img className='m-img' alt='error' src={crosspng}/> :<img className='m-img' src={menupng}  alt="error" />
            }
            </button>
        </div>
        <Collapse/>
      </nav>
    </div>
{
    mbnotdisplay? <Notcollapse/>:null
}
    </>
  )
}

function Collapse(props) {
    return (
        <ul className='nav-ul'>
        <li className="li">
            <a className="a"href="#main">Home</a>
        </li>
        <li className="li">
            <a className="a"href="#quiznavigate">Play quiz</a>
        </li>
        <li className="li">
            <a className="a"href="#main3">Interview question</a>
        </li>
        <li className="li">
            <a className="a"href="#main4">Notes</a>
        </li>
        <li className="li">
            <a href="#section5" className="a">Contact us</a>
        </li>
    </ul>
    )
}
function Notcollapse(){
    return(
        <ul className='s-ul'>
            <li className="cl-a">
                <a href="#main" className="cl-1">Home</a>
            </li>
            <li className="cl-a">
            <a href="#quiznavigate" className="cl-1">Play quiz</a>
            </li>
            <li className="cl-a">
            <a href="#main3" className="cl-1">Interview question</a>
            </li>
            <li className="cl-a">
            <a href="#main4" className="cl-1">Notes</a>
            </li>
            <li className="cl-a">
            <a href="#section5" className="cl-1">Contact us</a>
            </li>
        </ul>
    )
}