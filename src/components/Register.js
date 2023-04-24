import React, { useEffect } from 'react';
import './style.css'
import { useState } from 'react';
import Axios from 'axios';

function Register() {
  const [user, setuser] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [cpass, setcpass] = useState('')
  var status =0;
  const [APIData, setAPIData] = useState([]);

const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useEffect(() => {
    Axios.get(`http://localhost:4000/read`)
        .then((response) => {
            setAPIData(response.data);
        })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  
const len= APIData.length

for(var i=0;i<len;i++){
  var entry = APIData[i] 
  if(user === entry.user){
      status=1
      break;
  }else{}
    }
  
    if(status===1){ alert("Already registerred"); 
    setuser('');
    setemail('');
    setpass('');
    setcpass('');
  }    
    else { alert("registration seccessful!!");
    
    if(pass===cpass){  
      Axios.post('http://localhost:4000/read', {
      user: user,
      email:email,
      pass:pass,
      cpass:cpass
    })  
    setuser('');
    setemail('');
    setpass('');
    setcpass(''); }
    else{alert("wrong, please enter same password")
    setuser('');
    setemail('');
    setpass('');
    setcpass('');}
  }
  }

   useEffect(()=>{
    Axios.get('http://localhost:4000/read').then((response)=>{
      console.log(response)
    })
  },[])



return (
  <div className='pp2'>
  <div >
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
  <div id="div1" className='reg' style={{color:'white'}}>
 
 <form  onSubmit={(e) => handleSubmit(e)} style={{color:'white'}}>
    <h2> User Registration </h2>
        <label style={{color:'white',fontSize:'17px'}} > User : </label><br />
        <input type="text" name="user" onChange={(e)=>setuser(e.target.value)}  id ="user" placeholder="enter your user name" value={user} required/><br/>
           
        <label style={{color:'white',fontSize:'17px'}}>Email: </label><br />
        <input type="email" name="email" onChange={(e)=>setemail(e.target.value)}  id ="email" placeholder="enter your email" value={email} required/><br/>
        

        <label style={{color:'white',fontSize:'17px'}}>Create Password: </label><br />
        <input type={passwordShown ? "text" : "password"}  name="pass" onChange={(e)=>setpass(e.target.value)}  id ="pass" value={pass}placeholder="enter password" 
        required pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$" /><br />
        
        <label style={{color:'white',fontSize:'17px'}}>Confirm Password: </label><br />
        <input type={passwordShown ? "text" : "password"}  name="cpass" onChange={(e)=>setcpass(e.target.value)}  id ="cpass" value={cpass} placeholder="re-enter cpassword" 
        required pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$" />
        <p>FORMAT : password must contain at least one special character,one uppercase letter,one lower letter,
      one number(0-9),min 8 characters
     </p>
     <label for="cb" style={{color:'white'}}  onClick={togglePassword}> <b>Show Password</b>        
     <i style={{ marginLeft: '10px',color:'white'}} class="bi bi-eye-slash" onClick={togglePassword}></i>
     </label> 

         <input type="submit" className='submit' href="/log" />
    </form>
    </div> 
    </div>
    </div>
    
)}

export default Register