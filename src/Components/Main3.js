import React from "react";
// import "./Main3.css";

// importing box
import Box from "./Box";
// importing images
import HTMLinterviewimage from "../assets/HTMIinvQuesImg.jpg";
import CSSinterviewimage from "../assets/CSSinvIMGQ.jpg";
import JSinterviewimage from "../assets/JSIntvQuesImg.jpg";
// importing separator component
import Separator from "./Separator";

// importing initerview question pdf
import HTMLInterviewpdf from '../assets/interview-pdf/HTML-Interview.pdf'
import CSSInterviewpdf from '../assets/interview-pdf/CSS-Interview.pdf'
import JSInterviewpdf from '../assets/interview-pdf/JS-Interview.pdf'

export default function Main3() {
  return (
    <main id="main3">
      <Separator content="Interview Question PDF" />
      <div className="interview-pdf-box">
        <Box
          name="html-interview"
          pdf={HTMLInterviewpdf}
          image={HTMLinterviewimage}
          description="In the realm of web development, mastering HTML is essential. PDF document of 50 interview questions. These questions span various topics, including tags, attributes, semantic elements, and best practices. Whether you’re preparing for an interview or seeking to enhance your HTML knowledge Download it and start learning."
          />

        <Box
          name="css-interview"
          pdf={CSSInterviewpdf}
          image={CSSinterviewimage}
          description="In the dynamic world of web development, CSS proficiency is indispensable. PDF document of 50 interview questions. These questions traverse a spectrum of topics, including selectors, specificity, flexbox, grid, transitions, and responsive design. Whether you’re preparing for a technical interview or seeking to bolster your CSS knowledge."
          />

        <Box
          name="js-interview"
          pdf={JSInterviewpdf}
          image={JSinterviewimage}
          description="In the ever-evolving landscape of web development, JavaScript proficiency is paramount. PDF document of 50 interview questions. These questions span diverse areas, including data types, closures, asynchronous programming, ES6 features. Whether you’re gearing up for technical interviews or aiming to deepen your JavaScript expertise."
        />
      </div>
    </main>
  );
}
