import {useState,useEffect} from 'react';
import Sidebar from "./Sidebar";
import axios from 'axios'
import './Admin.css'
import { Button} from 'semantic-ui-react'


function RegisterData(){
    
  
      const [APIData, setAPIData] = useState([]);
      useEffect(() => {
        axios.get(`http://localhost:4000/read`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])



  const deletereg = (id) => {
    axios.delete(`http://localhost:4000/delete/${id}`)
    window.location.reload();
    
};


    return(
      <div >
      <Sidebar/>
      <div style={{position:'relative',marginLeft:'200px',marginTop:'-700px', fontFamily:'Verdana'}}>
          <h2 style={{color:'#008080',marginLeft:'500px',fontSize:'30px', position:'relative', bottom:'50px'}}>Register Data</h2>
         <div className='view-container' style={{color:'black',width:'70%',marginLeft:'200px'}}>  
         <>
            <div className='table-responsive'>
            <table className='table' style={{  border: '1px solid black'}}>
                <thead>
                  <tr>                  
                    <th ><b>USERID</b></th>
                    <th><b>Email</b></th>
                    <th><b>PASS</b></th>
                    <th><b>CPASS</b></th>
                    <th><b>Delete</b></th>
                  </tr>
                </thead>
                
  {APIData.map((data) => {
     return (
      <tbody>
       <tr >
          <td >{data.user}</td>
           <td >{data.email}</td>
           <td >{data.pass}</td>
           <td >{data.cpass}</td>
           <td><Button className='delete' style={{color:'red'}} onClick={() => deletereg(data._id)}>Delete</Button></td>
        </tr>
        </tbody>
   )
  })
   }

              </table>
            </div>
          </>
       </div>
</div>
        </div>
    )
}

export default RegisterData