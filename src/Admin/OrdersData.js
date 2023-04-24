// import { Order } from "./View"
import {useState,useEffect} from 'react';
import Sidebar from "./Sidebar";
import axios from "axios";
import { Button} from 'semantic-ui-react'

function OrdersData(){
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/read6`)
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
          <h2 style={{color:'#008080',marginLeft:'500px',fontSize:'30px', position:'relative', bottom:'50px'}}>Orders Data</h2>
         <div className='view-container' style={{color:'black',width:'70%',marginLeft:'200px'}}>  
             <>
            <div className='table-responsive'>
              <table className='table'  style={{border:'1px solid black'}}>
                <thead>
                  <tr>
                    <th><b>NAME</b></th>
                    <th><b>CONTACT</b></th>
                    <th ><b>EMAIL</b></th>
                    <th><b>address</b></th>
                    <th><b>City</b></th>
                    <th><b>PINCODE</b></th>
                    <th><b>STATE</b></th>
                    <th><b>Delete</b></th>
                   
                  </tr>
                </thead>
                {APIData.map((data) => {
     return (
      <tbody>
       <tr >
          <td >{data.name}</td>
           <td >{data.contact}</td>
           <td >{data.email}</td>
           <td >{data.address}</td>
           <td >{data.city}</td>
           <td >{data.pincode}</td>
           <td >{data.state}</td>
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

export default OrdersData