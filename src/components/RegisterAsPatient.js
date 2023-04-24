import './Navbar'
import Navbar from './Navbar'
import regpat from './images/regpat.png'
import rp1 from './images/rp1.png'
import rp2 from './images/rp2.png'
import rp3 from './images/rp3.png'
import rp4 from './images/rp4.png'
import {Link} from 'react-router-dom'
import Footer from './Footer'

function RegisterAsPatient() {
    const s1={maxWidth: '600px',height: '400px'}
    const s2={fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',marginLeft: '200px'}
    const s3={fontSize:'25px',textAlign: 'center',marginTop:'15px'}
    const s5={textAlign: 'center',fontSize:'30px'}
    return(
        <div>
            <Navbar></Navbar>
         
  <meta charset="UTF-8"></meta>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta name="viewport" content="width=100%, initial-scale=1.0"></meta>
  <title> Register As Patient </title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
  <link rel="stylesheet" href="style.css"></link>
  <link rel="icon" type="text/css" href="icon.png"></link>

  <div  style={{backgroundColor: '#f5f5f5'}}>
  <div class="container">
      <img src={regpat} style={s1} alt=""></img>
    <div class="text" style={s2}>
      <h1>Click here to register as patient...</h1><br /><br />
      <Link className="btn btn-sm" style={{ position:'relative', bottom:'50px', padding:'10px',backgroundColor:'lightblue'}} to="/PatientForm">REGISTER AS PATIENT</Link>
    </div>
  </div>
</div>
  <div class="xyz" style={{height:'500px',marginTop:'8px'}}>
    <div class="container" style={{paddingTop: '2cm'}}>
      <div class="row justify-content-center" >
        <div class="col-sm-3 d-flex align-items-stretch" >
          <div class="card" >
            <div class="inner">
              <img src={rp1}  class="card-img-top" height="170px" alt="donate"></img>
            </div>
            <h3 class="card-title" style={s3}><b>Register to website</b></h3>
            <div class="card-body">
              <p class="card-text" style={{fontFamily:'	Times New Roman'}}>First Register to the website by giving username and password which is used when you
                login again to the website.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 d-flex align-items-stretch" >
          <div class="card">
            <div class="inner">
              <img src={rp2}  class="card-img-top" height="170px" alt="patient"></img>
            </div>
            <h3 class="card-title" style={s3}><b>Register as patients</b></h3>
            <div class="card-body">
              <p class="card-text">Register as patient by clicking the above link and fill in all the required details.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 d-flex align-items-stretch">
          <div class="card">
            <div class="inner">
              <img src={rp3}  class="card-img-top" height="170px" alt="patient"></img>
            </div>
            <h3 class="card-title" style={s3}><b>Details</b></h3>
            <div class="card-body">
              <p class="card-text">Provide correct medical details with medical certifinate in registration with HLA
                value which is more importan to find a match. </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 d-flex align-items-stretch">
          <div class="card">
            <div class="inner">
              <img src={rp4} class="card-img-top" height="170px" alt="patient"></img>
            </div>
            <h3 class="card-title" style={s3}><b>Contact</b></h3>
            <div class="card-body">
              <p class="card-text">You can contact us when ever you can for any details and once we found a match we
                will contact you and proceed further. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="rpp" style={{marginTop:'4cm'}}>
   <br /> <h3 style={s5}> SOME INFORMATION ABOUT THE TRANSPLANTATION PROCESS</h3><br />
    <ul style={{fontSize: '20px'}}><li>A bone marrow transplant is a procedure that infuses healthy blood-forming stem cells into your body to replace your damaged or diseased bone marrow.</li>
      <li> A bone marrow transplant is also called a stem cell transplant.</li>
      <li>You might need a bone marrow transplant if your bone marrow stops working and does not produce enough healthy blood cells.      
      Bone marrow transplants may use cells from your own body (autologous transplant) or from a donor (allogeneic transplant)</li>
    <Link to="/Readmore">Read More...</Link>
    </ul>
  </div><br/><br/>
<Footer/>
</div>
       
    )
}

export default RegisterAsPatient