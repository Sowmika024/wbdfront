import './Navbar.css'
import dn from './images/dn.png'
import sw from './images/sw.png'
import ch from './images/ch.png'
import reg from './images/regpat.png'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import Footer from './Footer'

function RegisterAsDonor(){
      const s1={fontSize: '24px', color:'rgb(40, 48, 122)',marginLeft:'230px',textDecoration:'none'}
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
  <link rel="stylesheet" href="style.css"></link>
  <link rel="icon" type="text/css" href="icon.png"></link>

  <div className="sg">
      <img src={dn} alt=""></img>
      <div className='wr'>
   <Link className="btn btn-sm btn-registration" title="register As Donor" to="/DonorForm" >REGISTER AS DONOR</Link>
  </div>
  </div>
  <div className="sg">
 </div>
  <div className="js" style={{marginLeft: '20px'}}>
   <h1>You could be someones <b>second</b> chance at life:</h1> 
   <p>4 out of 10 people looking for an unrelated matching donor worldwide are not able to find a match. But you can help us change this
      Before you can donate your bone morrow get yourselves tested either by ordering swab kits online or through hospitals  </p>
</div>
<div className="wrapper">
    <div className="card">
        <img src={sw} alt=""></img>
        <div className="info">
          <h4>1.Order swab kit online</h4><br /> 
          <p>Answer simple questions to make sure you'll be eligible to donate,If it's a yes, then you'll be directed to a page where you can request your swab kit online.</p> 
        </div>
    </div>

    <div className="card">
        <img src={ch} alt=""></img>
        <div className="info">
          <h4>2.Swab and then return kit</h4> <br />
          <p>Swab inside of your cheeks and send swabs back to us. The swabs will then be analyzed in our lab to know your HLA.this is how we match donors and patients.</p> 
        </div>
    </div>
    <div className="card">
        <img src={reg} alt=""></img>
        <div className="info">
          <h4>3.We'll add you to registry</h4> <br />
          <p>Once your samples are analyzed,you will be added to registry and you will be available for patients all around the world who are searching for a donor</p> 
        </div>
    </div>
</div>
<div className="info" style={{marginLeft: '20px'}}>
    <h3> Want to know more on how bone marrow donation is done and need more information regarding perfect match?!</h3>
    <Link to="/information" style={{textDecoration:'none'}}>Know More...</Link>
  </div>
  <div className="ko" style={{marginLeft: '20px'}}>
  <p>Are you living in any remote areas or is it difficult for you to get tested by ordering a swab kit online.DON'T WORRY you can visit your nearby hospitals and get tested.</p>
</div>
  <div style={s1} >
  <Link to="/HospitalList"style={{textDecoration:'none'}}>click here to know hospitals near your place to go and check your HLA value </Link>  
  </div>

<div style={{marginLeft:'80px'}}>
<div className="fh">
<h2 >Want to get tested by ordering swab kit online,click on here!!</h2>
<Link className="btn btn-sm btn-swab" title="order swab" to="/OrderSwab">ORDER NOW</Link>
</div>


  <div className="jj">
    <h2 >Click on this button to upload your HLA test results</h2>
    <Link className="btn btn-sm btn-test" title="test" to="/ResultsForm">SUBMIT HERE</Link>
  </div><br /><br />
  </div>
  <div className="dd" style={{marginLeft: '20px'}}>
    <p>Eager to know where is your order,Track status of your swab kit here: </p>
    <button className="button button1" style={{position:'relative', right:'75px'}}>
    <Link to="/Login" style={{textDecoration:'none'}}>Track Order</Link>
  </button>
  </div><br />
 <div style={{padding:'8px'}}></div>
 <Footer></Footer>
  </div>
    )
}

export default RegisterAsDonor