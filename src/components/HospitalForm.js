import React from 'react';
import './style.css'
import { useState,useEffect} from 'react';
import Axios from 'axios';


function HospitalForm() {

  const [image3, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
    
    
    const [userid1, setuserid1]=useState('');
    const [hospitalname, sethospitalname]=useState('');
    const [idproof, setidproof]=useState('');

  const handleAddBookSubmit=async (e)=>{
    e.preventDefault();
    
    Axios.post('http://localhost:4000/hospitals', {
         userid1: userid1,
         hospitalname:hospitalname,
         idproof:idproof

  })
  alert("registration successful!!");
    setuserid1('');
    sethospitalname('');
    setidproof('');

    const formData=new FormData()
    formData.append('file', image3.data)
    const response = await fetch('http://localhost:4000/image3', {
      method: 'POST',
      body: formData,
    })
  
    if (response) setStatus(response.statusText)
  
  }
  useEffect(()=>{
    Axios.get('http://localhost:4000/read4').then((response)=>{
      console.log(response)
    })
  },[])

  const handleFileChange = (e) => {
    setidproof(e.target.value);
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img);
  }

return (
  <div className='reg2' style={{padding: '120px 20px 10px 20px', color:'black',height:'750px'}}>
 <form onSubmit={handleAddBookSubmit} style={{padding: '30px'}}>
    <h1 style={{fontFamily:'Arial',textAlign:'center',fontSize:'23px'}}>Hospital  Registration</h1>
     
     <label style={{fontFamily: 'sans-serif',fontSize: '15px',fontWeight: '360'}}>Userid : </label><br />
     <input type="text" name="userid1"  id ="userid1" onChange={(e)=>setuserid1(e.target.value)} value={userid1} placeholder="please enter the userid" required/><br/>
      
      <label style={{fontFamily: 'sans-serif',fontSize: '15px',fontWeight: '360'}}>Name of the organisation: </label><br />
        <input type="text" name="hospitalname" onChange={(e)=>sethospitalname(e.target.value)} value={hospitalname} id ="hospitalname" placeholder="enter the name of the hospital" required/><br/>
        
        <label style={{fontFamily: 'sans-serif',fontSize: '15px',fontWeight: '360', color:'black'}}>ID Proof: </label><br />
        <input type="file" name="idproof"  id ="idproof" onChange={handleFileChange} value={idproof}  placeholder="submit the file acquired from the government" required/><br/>
         
         <input type="submit" className='submit'/>  
    </form>
    {status && <h4>{status}</h4>}
    </div>

)}

export default HospitalForm