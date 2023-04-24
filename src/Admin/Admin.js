import React from 'react';
import './login.css'
import {useState } from 'react';
import {useNavigate } from 'react-router-dom';
import girl from "./girl.png"

<><link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet" /><script src="https://kit.fontawesome.com/a81368914c.js"></script></>

function Admin() {
 
  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')

  const history= useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {setPasswordShown(!passwordShown);};
  


  const handleAddBookSubmit = async(e) => {
    e.preventDefault();
    if(user==="BMD"&&pass==="bmd@123"){
      alert("login successfull")
      history('../MainAdmin')
    }
    else{
      alert("login unsuccessfull")

    }
  
  setpass('');
  setuser('');
  
}
return(
<div class="containerpp" style={{backgroundColor:'white'}}>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

<div class="imgpp">
  <img src={girl} alt=" "/>
</div>
<div class="login-content">
  <form onSubmit={handleAddBookSubmit} className="app">
    {/* <img src="images/girl.png" /> */}
    <h2 class="title">Admin Login</h2>
           <div class="input-div one">
              <div class="i">
                  <i class="fas fa-user" className='alp'></i>
              </div>
              <div class="div">
                  <input type="text" name="user" onChange={(e)=>setuser(e.target.value)} value={user} id ="user" placeholder="enter your user name" required/><br/>
              </div>
           </div>
           <div class="input-div pass">
              <div class="i"> 
                 <i class="fas fa-lock" className='alp'></i>
              </div>
              <div class="div">
                 <input  name="pass" type={passwordShown ? "text" : "password"} onChange={(e)=>setpass(e.target.value)} value={pass} id ="pass" placeholder="enter your password " required /><br/>
             </div>
          </div>
          <label for="cb" style={{color:'black'}}> <b>Show Password   </b>    
     <i style={{ marginLeft: '10px',color:'black'}} class="bi bi-eye-slash" onClick={togglePassword}></i>
     </label> 
          <input type="submit" class="btnll" value="Login" />
        </form>
    </div>
</div> 
)}

export default Admin

    