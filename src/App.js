
import './App.css';
// import Mathbox from './Components/Mathbox';
// import HTMLquestion from './Components/HTMLquestion';
import Navbar1 from './Components/Navbar1';
import Main from './Components/Main';
import Main3 from './Components/Main3';
import Main4 from './Components/Main4';
import Quiznavigate from './Components/Quiznavigate';

import Contact from '../src/Components/Contact.js'
import Footer from './Components/Footer.js';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar1/>
      <Main/>
      {/* <h1 style={{"textAlign:center"}}>Welcome to quiz mania</h1> */}
      {/* <HTMLquestion/> */}
      <Quiznavigate/>
      {/* <HTMLquestion/> */}
      {/* <Mathbox/> */}
      <Main3/>

      <Main4/>

      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
