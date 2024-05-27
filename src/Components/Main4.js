import React from "react";
// import "./Main3.css";

// importing separator component
import Separator from "./Separator";
// importing box component
import Box from "./Box";

// importing images
import HTMLnotesimage from "../assets/HTMLNotesIImage.jpg";
import CSSnotesimage from "../assets/CSSNotesImage.jpg";
import JSnotesimage from "../assets/JSNotesImage.jpg";

// importing notes pdf
import HTMLNotespdf from '../assets/notes-pdf/HTML_Complete_Notes.pdf'
import CSSNotespdf from '../assets/notes-pdf/CSS_Complete_Notes.pdf'
import JSNotespdf from '../assets/notes-pdf/JS All in One Notes.pdf'

export default function Main4() {
  return (
    <main id="main4">
      <Separator content="All In One Notes" />
      <div className="interview-pdf-box">
        <Box
          pdf={HTMLNotespdf}
          image={HTMLnotesimage}
          description=" Learn the fundamental building blocks of the Web with this comprehensive PDF. Understand HTML tags, elements, and attributes. Explore topics like creating links, working with images, and using tabular data. Whether you’re a novice or want to refresh your skills, this PDF is a valuable resource."
        />
        <Box
          pdf={CSSNotespdf}
          image={CSSnotesimage}
          description=" This CSS PDF provides comprehensive explanations on how to separate your web content (HTML) from its style. It covers internal and external stylesheet methods, inline styles, and the benefits of using external stylesheets. Whether you’re a novice or want to refresh your skills, this PDF is a valuable resource."
          />
        <Box
          pdf={JSNotespdf}
          image={JSnotesimage}
          description="ThIS JavaScript PDF provides essential concepts for both beginners and seasoned developers.It offering quick reference notes and valuable insights.Whether you’re reinforcing foundational knowledge or diving into advanced topics,this free PDF resource serves as a handy TOOL for mastering JavaScript."
        />
      </div>
    </main>
  );
}
