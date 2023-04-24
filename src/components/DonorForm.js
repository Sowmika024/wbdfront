import React from 'react';
import {useState,useEffect} from 'react';
import "./Donor.css"
import Axios from 'axios';


function DonorForm(){
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
    
  const [userid, setuserid]=useState('');
      const [bg, setbg]=useState('');
        const [gender, setgender]=useState('');
        const [allergy, setallergy]=useState('');
        const [dob, setdob]=useState('');
        const [file, setfile]=useState('');
    
      
    const handleAddBookSubmit=async(e)=>{
      e.preventDefault();
      
      Axios.post('http://localhost:4000/donors', {
        userid: userid,
            bg:bg,
            gender:gender,
            dob:dob,
            file:file,
            allergy:allergy
    })
    alert("registration successful!!");
      setallergy('');
      setbg('');
      setdob('');
      setfile('');
      setgender('');
      setuserid('');
     
      const formData=new FormData()
      formData.append('file', image.data)
      const response = await fetch('http://localhost:4000/image', {
        method: 'POST',
        body: formData,
      })
  
      if (response) setStatus(response.statusText)
    }

      const handleFileChange = (e) => {
        setfile(e.target.value);
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        setImage(img);
      }
      
      useEffect(()=>{
        Axios.get('http://localhost:4000/read3').then((response)=>{
          console.log(response)
        })
      },[]);
      

      return(
        <div style={{height:'777px',backgroundColor:'#DEB887'}}>
        <div class="ws" id="div1">
        <h1>Donor Registration</h1>
        <div class="form-container" enctype="multipart/form-data">
        <form onSubmit={handleAddBookSubmit}>
            <div class="flex">
                <div class="flex-item">
                    <div class="field-container">
                    <label> Userid:  <span class="required">*</span></label>
                    <input class="text_field" type="text" name="userid" id="userid"  placeholder="Please enter the unique userid " required value={userid ||""} onChange={(e)=>setuserid(e.target.value)} />  
                    </div>
                    <div class="field-container">
                        <label for="bg">Blood Group: <span class="required" >*</span></label>
                        <input type="bg" name="bg" id="bg" placeholder="Your blood group" required="required" value={bg ||""} onChange={(e)=>setbg(e.target.value)} />
                        <span class="error-messg"></span>
                    </div>
                    <div class="field-container">
                        <label for="gender">Gender:<span class="required">*</span></label>
                        <input type="text" name="gender" id="gender" placeholder="Enter gender" required="required" value={gender ||""} onChange={(e)=>setgender(e.target.value)} />
                        <span class="error-messg"></span>
                    </div>            
                </div>
                <div class="flex-item">
                    
                    <div class="field-container">
                    <label> Enter your Date of birth: <span class="required">*</span></label>
                    <input class="text_field" type="date" name="dob" id="dob" placeholder="select date of birth" required value={dob ||""} onChange={(e)=>setdob(e.target.value)} /> 
                    </div>
                     <div class="field-container" style={{color:'black'}}>
                        <label for="file">Upload File: <span class="required">*</span></label>
                        <input type="file" name="file" id="file" placeholder="Upload file" required="required" value={file ||""} onChange={handleFileChange} />
                    </div>  
                    <div class="field-container">
                    <label> Allergy issues <span class="required">*</span></label> 
                    <input class="text_field" type="text" name="allergy" id="allergy"
                        placeholder="Please enter if you have any allergy issues" required value={allergy ||""} onChange={(e)=>setallergy(e.target.value)} /> 

                    </div>              
                </div>
            </div>
            <div class="center"><input type="submit" value="Register"/></div>
        </form>
        {status && <h4>{status}</h4>}
        </div>  
        </div> 
    </div>
      );
}
export default DonorForm