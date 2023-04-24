import React,{useState,useEffect} from "react";
import "./Donor.css"
import Axios from 'axios'

function PatientForm(){
    
  const [image4, setImage] = useState({ preview: '', data: '' })
  const [image5, setImage5] = useState({ preview: '', data: '' })

  const [status, setStatus] = useState('')
    
    
      const [user, setuser]=useState('');
      const [bg, setbg]=useState('');
        const [gender, setgender]=useState('');
        const [ SH, setSH]=useState('');
        const [yod, setyod]=useState('');
        const [file1, setfile1]=useState('');
        const [file2, setfile2]=useState('');
        const [hlav, sethlav]=useState('');

    
      
    const handleAddBookSubmit=async (e)=>{
      e.preventDefault();
    Axios.post('http://localhost:4000/patients', {
      user:user,
      bg:bg,
      gender:gender,
      SH:SH,
      yod:yod,
      file1:file1,
      file2:file2,
      hlav:hlav
    })
    alert("registration successful!!");
  setSH('');
  setbg('');
  setfile1('');
  setfile2('');
  setgender('');
  setuser('');
  setyod('');
  sethlav('');
  
  const formData=new FormData()
  formData.append('file', image4.data)
  const response = await fetch('http://localhost:4000/image4', {
    method: 'POST',
    body: formData,
  })
  const formData2=new FormData()

  formData2.append('file', image5.data)
  const response2 = await fetch('http://localhost:4000/image5', {
    method: 'POST',
    body: formData2,
  })

  if (response) setStatus(response.statusText)
  if (response2) setStatus(response.statusText)



  }
  useEffect(()=>{
    Axios.get('http://localhost:4000/read5').then((response)=>{
      console.log(response)
    })
  },[])

  const handleFileChange = (e) => {
    setfile1(e.target.value);
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img);
  }
  
  const handleFileChange2 = (e) => {
    setfile2(e.target.value);
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage5(img);
  }
      return(
        <div style={{height:'777px',backgroundColor:'#DEB887'}}>
        <div class="ws" id="div1">
        <div class="form-container" >
        <h1>Patient Registration</h1>
        <form onSubmit={handleAddBookSubmit}>
            <div class="flex">
                <div class="flex-item">
                    <div class="field-container">
                        <label for="name">User: <span class="required">*</span></label>
                        <input type="text" name="user"  id="user" placeholder="enter your name" required="required" value={user ||""} onChange={(e)=>setuser(e.target.value)}/>
                        <span class="error-messg"></span>              
                    </div>
                    <div class="field-container">
                        <label for="bg">Blood Group: <span class="required">*</span></label>
                        <input type="bg" name="bg" id="bg" placeholder="Your blood group" required="required" value={bg || ""} onChange={(e)=>setbg(e.target.value)}/>
                        <span class="error-messg"></span>
                    </div>
                    <div class="field-container">
                        <label for="file">Medical Report: <span class="required">*</span></label>
                        <input type="file" name="file1" id="file1" placeholder="Upload file" required="required" value={file1 ||""} onChange={handleFileChange}/>
                        <span class="error-messg"></span>
                    </div>
                    <div class="field-container">
                    <label> Surgical History <span class="required">*</span></label> 
                    <input class="text_field" type="text" name="SH" id="SH"
                        placeholder="Past enounter with any surgeries" required value={SH ||""} onChange={(e)=>setSH(e.target.value)}/> 
                 </div>
                 
                
                </div>
                <div class="flex-item">
                <div class="field-container" style={{color:'black'}}>
                 <label for="file">HLA Report: <span class="required">*</span></label>
                        <input type="file" name="file2" id="file2" placeholder="Upload file" required="required" value={file2 ||""} onChange={handleFileChange2}/>
                        <span class="error-messg"></span>
                 </div>
                     
                    <div class="field-container">
                        <label for="gender">Gender:<span class="required">*</span></label>
                        <input type="text" name="gender" id="gender" placeholder="Enter gender" required="required" value={gender || ""} onChange={(e)=>setgender(e.target.value)}/>
                        <span class="error-messg"></span>
                    </div>  
                    <div class="field-container">
                    <label> Year of diagnosis: <span class="required">*</span></label> 
                    <input  type="text" name="yod" id="yod" placeholder=" Year of diagnosis " value={yod ||""} onChange={(e)=>setyod(e.target.value)}/>
                    </div>
                    <div class="field-container"> 
                    <label for="hla"> HLA value of your bone marrow <span class="required">*</span></label> 
                    <input  type="text" name="hlav" id="hlav" placeholder="hla value " required value={hlav ||""} onChange={(e)=>sethlav(e.target.value)} />
                    
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
export default PatientForm