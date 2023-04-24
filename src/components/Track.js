import './order.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
function Track() {

    var [APIData, setAPIData] = useState([]);
    var [APIDatar, setAPIDatar] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:4000/read2`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:4000/read`)
        .then(
            (response) => {
            setAPIDatar(response.data);
        }
        )
}, [])
  var length = APIData.length;
  console.log(APIDatar)
 

  
  
    return(
        <div>
   <div class="modal fade" id="myModal" style={{marginBottom:'20px'}}>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style={{height:'150px'}}>
                <div class="modal-header">
                  
   <h4>{APIDatar.map((data2,i) => {
         if(data2.user===APIData[length-1].user){
     return (   
       <h2 ><br/>
          Welcome, {data2.user}<br/><br/>
        Email:  {data2.email}<br/><br/>
               </h2>
   )}
   else{return(null)}
  })
   }   </h4>
     {/* <button>View details</button> */}
                </div> 
            
            </div>
        </div>
    </div>
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title mx-auto">Order Status<br/>AWB Number-5335T5S</h4>
                </div> 
                <div class="modal-body">
                    <div class="progress-track">
                        <ul id="progressbar">
                            <li class="step0 active " id="step1">Order placed</li>
                            <li class="step0 active text-center" id="step2">In Transit</li>
                            <li class="step0 active text-right" id="step3"><span id="three">Out for Delivery</span></li>
                            <li class="step0 text-right" id="step4">Delivered</li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <div class="details d-table">
                                <div class="d-table-row">
                                    <div class="d-table-cell"> Estimated Delivery </div>
                                    <div class="d-table-cell"> 07/04/2023 </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <link rel="stylesheet"
                                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <div class="d-table-column"> <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div class="d-table-column"> <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   
            </div>
    )
}

export default Track