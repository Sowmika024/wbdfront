import React from 'react';
import './style.css'
// import {useState } from 'react';
import {useState,useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const history= useNavigate();
  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {setPasswordShown(!passwordShown);};
   
    

  const handleAddBookSubmit = async (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/read2', {
      user: user,
      pass:pass
    })
  
  e.preventDefault();
  try {
    const res = await Axios.post('http://localhost:4000/read2', { user, pass });
    alert(res.data);
    history("/Track");
  } catch (err) {
    alert("invalid");
    console.log(err)
  }

 

}

useEffect(()=>{
  Axios.get('http://localhost:4000/read2').then((response)=>{
    console.log(response)
  })
},[])


    
return (
  
  <div className='pp1'>
  <div style={{height:'630px',paddingTop:'120px',color:'black'}}>
  <div id="div1" style={{paddingTop:'10px',paddingbottom:'200px'}}>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
  <div className='log'>
 
 <form onSubmit={handleAddBookSubmit}>
    <h2 style={{color:'white'}}>Login</h2>
    
     <label style={{color:'white',fontSize:'17px'}}> User : </label><br />
     <input type="text" name="user" onChange={(e)=>setuser(e.target.value)} value={user} id ="user" placeholder="enter your user name" required/><br/>
    
     <label style={{color:'white',fontSize:'17px'}}> Password : </label><br />
     <input type={passwordShown ? "text" : "password"} name="pass"  onChange={(e)=>setpass(e.target.value)} value={pass} id ="pass" placeholder="enter your password" required /><br/>

     <label for="cb" style={{color:'white'}}> <b>Show Password   </b>    
     <i style={{ marginLeft: '10px',color:'white'}} class="bi bi-eye-slash" onClick={togglePassword}></i>
     </label>  <br/>
     <input type="submit" className='submit'  />
     <Link to="/Register" style={{color:'white',fontSize:'16px',marginTop:'20px'}}>Not registered yet? Sign up</Link>
  </form>
    </div>
       </div>
       </div> </div>
)}

export default Login