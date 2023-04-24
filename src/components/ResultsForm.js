import React from 'react';
import './style.css'
import { useState,useEffect } from 'react';
import Axios from 'axios';

function ResultsForm() {

  const [image2, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
    
    const [user2, setuser]=useState('');
    const [phn, setphn]=useState('');
    const [certificate, setcertificate]=useState('');

  
    
  const handleAddBookSubmit=async (e)=>{
    e.preventDefault();
    Axios.post('http://localhost:4000/read7', {
      user2: user2,
      phn:phn,
      certificate:certificate

    })
    alert("uploaded successful!!");
  setcertificate('');
  setphn('');
  setuser('');  

  const formData=new FormData()
  formData.append('file', image2.data)
  const response = await fetch('http://localhost:4000/image2', {
    method: 'POST',
    body: formData,
  })

  if (response) setStatus(response.statusText)

  }
  const handleFileChange = (e) => {
    setcertificate(e.target.value);
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img);
  }

  useEffect(()=>{
    Axios.get('http://localhost:4000/read7').then((response)=>{
      console.log(response)
    })
  },[])


return (
  <div style={{backgroundColor: '#BC8F8F',marginTop:'-150px',height:'760px' ,position: 'relative'}}>
<div className="lpmain">
<br/>
<p class="pswabo"  > Test Yourself  </p>
<div className='swabfo'  >
<form  onSubmit={handleAddBookSubmit} className="lp" style={{marginLeft: '40px',color:'black'}} >
      <label> UserName : </label><br/><br/>
      <input type="text" name="user2" onChange={(e)=>setuser(e.target.value)} value={user2} id ="user2" size="50" style={{padding:'8px'}} placeholder="enter your user name" required/><br/><br/>
      
       <label>Contact No: </label><br/><br/>  
         <input type="text" size="50" width="200" name="phn"   style={{padding:'8px'}}  onChange={(e)=>setphn(e.target.value)} value={phn} id ="phn" placeholder="enter your contact" required pattern='[0-9]{10}'/><br/><br />
         
         <label>Certificate : </label><br/><br/>   
         <input type="file" id="certificate" name="certificate" required onChange={handleFileChange} value={certificate}/> <br /><br /> 
  <br /><input type="submit" value="submit" name="submit" id="submit" style={{backgroundColor: 'rgb(56, 56, 58)',marginLeft:'4cm',padding:'12px',color:'white'}}  />

</form>
        {status && <h4>{status}</h4>}

</div>
</div>
</div>
)
}

export default ResultsForm