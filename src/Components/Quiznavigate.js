import React,{useReducer, useState} from 'react'
// import './QuizNaviget.css'
import HTMLquestion from './HTMLquestion'
import HTML5 from '../assets/HTML5.png'
import CSS3 from '../assets/CSS3.png'
import JS from '../assets/Java-Script.png'

// importing jsons
import htmllquestionjson from "../Services/Htmlquestion.json";
import jsqyestionjson from '../Services/Jsquesion.json'
import cssquestionjson from '../Services/Cssquestion.json'

export default function Quiznavigate() {
    // state for displaying quiz
    const [display,notdisplay] = useState(false)
    
    // state for updating json
    const [currentjson,updatingjson] = useState(null)
    
    // function for updating json
    function updatingJSON(Quizlanguage){
        if(Quizlanguage === "HTML"){
            updatingjson(htmllquestionjson)
        }
        if(Quizlanguage === "CSS"){
            updatingjson(cssquestionjson)
        }
        if(Quizlanguage === "JS"){
            updatingjson(jsqyestionjson)
        }
    }

    
    // function for displaying quiz
    const displayquiz = (e,Quizlanguage)=>{
        e.preventDefault()
        console.log(display)
        if(display === false){
            notdisplay(true)
            alert(`let's play ${Quizlanguage} Quiz`)
            updatingJSON(Quizlanguage)
        }
        else if(display === true){
            let val = window.confirm("Are you want to change quiz")
            if(val){
                notdisplay(false)
            }
        }
    }
  return (
      <main id="quiznavigate">
        <section className='top-part' id="quiz-navigate-top-part">
        <div className='balls-anime' id="top-part-animation-left-box"></div>
        <h1 id="quiz-navigate-heading">
            Choose the language in which you want to play quiz?
        </h1>
        <div className='balls-anime' id="top-part-animation-right-box"></div>
        </section>
        <section className='bottom-part' id="quiz-navigate-bottom-part">
        <div className="quiz-boxes">
            <div id='quiz-box1' className="quiz-box">
                <img className='quiz-navigate-image' src={HTML5} alt="Error" />
                <button className="quiz-navigate-button" onClick={(e)=>{displayquiz(e,"HTML")}}>
                    <a href="#" className="quiz-navigate-anchor">Start Quiz</a>
                </button>
            </div>
            <div id='quiz-box2' className="quiz-box">
                <img className='quiz-navigate-image' src={CSS3} alt="Error" />
                <button className="quiz-navigate-button">
                    <a href="#" onClick={(e)=>{displayquiz(e,"CSS")}} className="quiz-navigate-anchor">Start Quiz</a>
                </button>
            </div>
            <div id='quiz-box3' className="quiz-box">
                <img className='quiz-navigate-image' src={JS} alt="Error" />
                <button className="quiz-navigate-button">
                    <a href="#" onClick={(e)=>{displayquiz(e,"JS")}} className="quiz-navigate-anchor">Start Quiz</a>
                </button>
            </div>
        </div>
        </section>

        {/* adding quiz part to webpage */}

        {display?<HTMLquestion questionlanguage={currentjson}/>:null}
    </main>
  )
}

