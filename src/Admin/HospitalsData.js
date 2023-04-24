// import { Hospital } from "./View"
import {useState,useEffect} from 'react';
import Sidebar from "./Sidebar";
import axios from 'axios'
import './Admin.css'
import { Button} from 'semantic-ui-react'

function HospitalsData(){

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/read4`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])

const deletereg = (id) => {
  axios.delete(`http://localhost:4000/delete/${id}`)
  window.location.reload();

};

    return(
        
      <div>
      <Sidebar/>
      <div style={{position:'relative',marginLeft:'200px',marginTop:'-700px', fontFamily:'Verdana'}}>
          <h2 style={{color:'#008080',marginLeft:'500px',fontSize:'30px', position:'relative', bottom:'50px'}}>Hospital Data</h2>
         <div className='view-container' style={{color:'black',width:'70%',marginLeft:'200px'}}>  
    <>
            <div className='table-responsive'>
              <table className='table' style={{border:'1px solid black'}}>
                <thead>
                  <tr>
                    <th><b>User-id</b></th>
                    <th><b>Hospital Name</b></th>
                    <th><b>Id-Proof</b></th>
                    <th><b>Delete</b></th>
                
                  </tr>
                </thead>
                {APIData.map((data) => {
     return (
      <tbody>
       <tr >
          <td >{data.userid1}</td>
           <td >{data.hospitalname}</td>
           <td >{data.idproof}</td>
           <td><Button className='delete' style={{color:'red'}} onClick={() => deletereg(data._id)}>Delete</Button></td>
        
        </tr>
        </tbody>
   )
  })
   }     
              </table>
            </div> </>
        </div>
</div>
        </div>
    )
}

export default HospitalsData