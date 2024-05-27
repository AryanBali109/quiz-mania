import React, { useState, useRef } from "react";
// import htmllqyestionjson from "../Services/Htmlquestion.json";
// import Separator from "./Separator";
// import "./HTMLquestion.css";

export default function HTMLquestion(props) {
  // QUESTION JSON FILE
  const langquestion = props.questionlanguage;
  // state
  let [index, setindex] = useState(0);
  const [question, setquestion] = useState(langquestion[index]);
  const [lock, setlock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  // creating reference to the component
  let option1 = useRef();
  let option2 = useRef();
  let option3 = useRef();
  let option4 = useRef();

  // let option = document.getElementsByClassName("options");
  let options = [option1, option2, option3, option4];
  // function for removing class
  const removingclass = () => {
    // console.log(options)
    options.filter((elem)=>{
      return elem.current !== null
    }).map((element) => {
      if(element.current.classList.contains("wrong")){
        return element.current.classList.remove("wrong")
      }else{
        return element.current.classList.remove("correct")
      }
    });
  };

  const nextquestion = () => {
    if (lock === false) {
      alert("please select answer");
    }
    if (lock === true) {
      if (index === langquestion.length - 1) {
        setResult(true);
        setlock(false);
      } else {
        setindex(++index );
        setlock(false);
        setquestion(langquestion[index]);
        // console.log(mathquestion[index])
        removingclass();
      }
    }
  };
  

  const checkanswer = (e, ans) => {
    if (lock === false) {
      if (question.answer === ans) {
        e.target.classList.add("correct");
        setlock(true);
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
        setlock(true);
        options[question.answer - 1].current.classList.add("correct");
      }
    }

  };
  // function for resetting
  const handlereset = () =>{
    setindex(0)
    setquestion(langquestion[0]);
    setResult(false)
  }
  return (
    <>
      <main id="HTML">
        <div className="HTMLquestion">
          <h1 className="questionboxheading">Quiz Question</h1>
          {result ? (
            <>
              <div className="resultBox">
                <p className="resultPara noofQuestion">
                  You Scored {score} Out Of {langquestion.length}
                </p>
                <button onClick={handlereset} className="btnss">Reset</button>
              </div>
            </>
          ) : (
            <>
              <p className="HTMLq-p1">
                {1 + index}. {question.question}
              </p>
              <div className="option-box">
                <ul>
                {question.option1 &&<li
                    ref={option1}
                    onClick={(e) => {
                      checkanswer(e, 1);
                    }}
                    className="options"
                  >
                    {question.option1}
                  </li>}
                  {question.option2 &&<li
                    ref={option2}
                    onClick={(e) => {
                      checkanswer(e, 2);
                    }}
                    className="options"
                  >
                    {question.option2}
                  </li>}
                  {question.option3 && <li
                    ref={option3}
                    onClick={(e) => {
                      checkanswer(e, 3);
                    }}
                    className="options"
                  >
                    {question.option3}
                  </li>}
                  {question.option4 &&<li
                    ref={option4}
                    onClick={(e) => {
                      checkanswer(e, 4);
                    }}
                    className="options"
                  >
                    {question.option4}
                  </li>}
                </ul>
              </div>
              <div className="updating-button">
                {/* <button disabled={index === 0} onClick={prevquestion} className="btnss">Previous</button> */}
                {/* <button disabled={index === mathquestion.length - 1} onClick={(e) => {   nextquestion(e); }} */}
                <button
                  onClick={(e) => {
                    nextquestion(e);
                  }}
                  className="btnss"
                >
                  {index === langquestion.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
              <p className="noofQuestion">
                {index + 1} of {langquestion.length} questions
              </p>
            </>
          )}
        </div>
      </main>
    </>
  );
}
