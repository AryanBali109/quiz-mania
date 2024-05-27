import React from 'react'
// import './Contact.css'

// importing icons
// import HTMLicon from '../assets/HTML5.png'

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "efb31bbf-d231-40ca-9270-e68f992e4526");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        //   console.log("Success", res);
        let formsinput = document.getElementsByClassName('input')
        for(let i=0;i<formsinput.length;i++){
            formsinput[i].value=""
        }
        alert("your data is submit")
        }
      };
  return (
    <section id='section5'>
        <h1 id="section5-heading">Contact</h1>
        <p id="section5heading-para">Submit the form to get in contact with me -</p>
            <form action="" onSubmit={onSubmit} method='post' id='contact-box'>
                <div className="form-group">
                    <label  htmlFor="name">Name: </label>
                    <input type="text" name="name" className='input' id="name" placeholder="Enter your name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" className='input' id="email" placeholder="Enter your email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number: </label>
                    <input type="tel" name="phone no" className='input' pattern="[0-9]{10}" id="phone" placeholder="Enter your phone" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" id="message" className='input' cols="30" placeholder='Enter your message here' rows="10" required></textarea>
                </div>
            <button type='submit'  className='section5-btnss' id="form-button">Let's Talk</button>
            </form>
    </section>
  )
}
