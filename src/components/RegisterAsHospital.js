import './Navbar.css'
import hosp from './images/hosp.png'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import Footer from './Footer'
function RegisterAsHospital(){
const s1={marginLeft: '10cm',marginTop: '1cm',padding:'5px'}

const s3={
  float:'right',
  width:'33%',
  height:'10%',
  marginRight:'0.2cm',
  marginBottom:'1cm',
  marginTop:'1cm'
}

const p={
 textAlign: 'justify',
 fontSize: '26px',
 marginLeft:'1.1cm',
 marginRight:'15cm',
}
const qq={
marginTop:'120px',
paddingRight:'120px'
}

const h1={
  color: '#3B5998',
  marginLeft:'5cm'
}
return(

<div>
<Navbar></Navbar>
  <meta charset="UTF-8"></meta>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta name="viewport" content="width=100%, initial-scale=1.0"></meta>
  <title> BMD Website </title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
  <div style={qq}>
  <div>
    <img src={hosp} style={s3} height="170px" alt="hospitals"></img></div>
    <h1 style={h1}>Register Now As Hospitals</h1> <br/>
    <p style={p}>A bone marrow transplant is a procedure that infuses healthy blood-forming stem cells into your body to replace your damaged or diseased bone marrow. A bone marrow transplant is also called a stem cell transplant.Join us by registering as Hospitals and fund swab kits to donors in needy and also donors who want to get tested can also visit your hospitals  
    </p>
    <Link className="btn-registration" title="register now" to="/HospitalForm" style={s1}>REGISTER</Link>
  </div>  <br/> <br/> <br/>
  <Footer></Footer>
</div>

  
)}

export default RegisterAsHospital