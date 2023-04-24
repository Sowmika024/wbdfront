import React from "react";
import { Field, reduxForm } from "redux-form";
import Navbar from './Navbar'
import './style.css'



const Contact = props => {
  const { handleSubmit} = props;
  
  return (
    <div className="contact">
         <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>FAQ'S</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="icon" type="text/css" href="icon.png"></link>

<Navbar></Navbar>
<div className="cont2" style={{}}>
    <form onSubmit={handleSubmit} data-testid="simple-form">
      <div className="redux" >
        <h1 style={{fontSize:'30px',position:'relative',top:'20px',marginLeft:'100px'}}>Feel free to write to Us</h1>
        <label style={{fontSize:'20px',marginLeft:'50px',marginTop:'30px',color:'white'}}>Email:</label>
        <div>
          <Field style={{fontSize:'18px',marginLeft:'50px'}}
            name="email"
            component="input"
            type="email"
            placeholder="enter email"
            data-testid="email"
          />
        </div>
      </div>
      <div>
        <label style={{fontSize:'20px',marginLeft:'50px',marginTop:'15px',color:'white'}}>Message:</label>
        <div>
          <textarea rows="4" cols="40" style={{fontSize:'18px',marginLeft:'50px',backgroundColor:'white'}}
            name="message"
            component="input"
            type="text"
            placeholder="enter message"
            data-testid="message"
          ></textarea>
        </div>
      </div>
      <div>
        <button style={{marginTop:'30px',marginLeft:'204px'}}
          data-testid="submitButton"
          type="submit" onClick={()=>alert('message sent!!')}   
        >
          Submit 
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default reduxForm({
  form: "simple"
})(Contact);