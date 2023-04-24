import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Navbar.css';
import donate from './images/donate.png'
import hp from './images/hp.png'
import pat from './images/pat.png'
import pic from './images/pic.png'
import about from './images/about.jpeg'
import Navbar from './Navbar';
import Footer from './Footer'
import {Link} from 'react-router-dom'


function Index() {
    const s1={ marginBottom: '1cm',margintop:'1.1cm'}
    const s4={backgroundColor: 'white' , height:'450px',padding:'100px 30px 25px 20px',position: 'relative'}
    const s5={position: 'relative', bottom: '50px'}
    const s7={font: 'Sans-serif', paddingleft:'20px'}
    const s8={position: 'relative', left: '130px', margin:'5px',padding:'8px 15px'}
    const s9={position: 'relative', bottom: '50px'}
    const s11={font: 'Sans-serif', paddingleft:'20px'}
    const s12={position: 'relative', left: '130px',margin:'5px', padding:'8px 15px'}
    const s13={position: 'relative', bottom: '50px'}
    const s14={fontsize:'25px',fontweight:'bold',color:'#ca4a59', textAlign: 'center'}
    const s15={font: 'Sans-serif', paddingleft:'20px'}
    const s16={position: 'relative', left: '130px',margin:'5px',padding:'8px 15px'}

    return(
    <div style={{ overflow: 'hidden'}}>
      <Navbar></Navbar>
      <metatag charset="UTF-8"></metatag>
      <metatag http-equiv="X-UA-Compatible" content="IE=edge"></metatag>
      <metatag name="viewport" content="width=device-width, initial-scale=1.0"></metatag>
      <title>CONTACT US</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://stackpaths/bootstrap.min.css" rel="stylesheet"></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist.bootstrapcdn.com/bootstrap/4.1.2/cs/js/bootstrap.bundle.min.js"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      {/* <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap"
        rel="stylesheet"></link> */}
      <link rel="icon" type="text/css" href="icon.png"></link>

      <div className="xy">
        <img src={pic} alt="" width="100%" height="700px" style={s1}></img>
        <h1 className="bottom-left" style={{color:'white', fontFamily:'sans-sarif'}}>We help in saving lives!</h1>
      </div>
    

      <div className="xyz" style={s4}>
        <div className="container" style={{paddingtop: '0cm'}}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card" style={s5}>
                <div className="inner">
                  <img src={donate} className="card-img-top" height="170px" alt=""></img>
                </div><br />
                <h1 className="card-title" style={s14}>Register as donor</h1>
                <div className="card-body">
                  <p className="card-text" style={s7}>Help the ones
                    in need by donating bone marrow</p>
                  <Link className="btn btn-sm btn-success" to="/RegisterAsDonor"
                    style={s8}>Register</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={s9}>
                <div className="inner">
                  <img src={hp} className="card-img-top" height="170px" alt="hospitals"></img>
                </div> <br />
                <h1 className='card-title'style={s14}>Register as
                  hospitals</h1>
                <div className="card-body">
                  <p className="card-text" style={s11}>Help patients by
                    funding swab kits and many more</p>
                  <Link className="btn btn-sm btn-success" to="/RegisterAsHospital"
                    style={s12}>Register</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={s13}>
                <div className="inner">
                  <img src={pat} className="card-img-top" height="170px" alt="patient"></img>
                </div> <br />
                <h1 className="card-title" style={s14}>Register as
                  patients</h1>
                <div className="card-body">
                  <p className="card-text" style={s15}>Find your match
                    from donors and get awareness</p>
                  <Link className="btn btn-sm btn-success" to="/RegisterAsPatient"
                    style={s16}>Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
   
		<div class="section" style={{marginTop:'100px',marginBottom:'50px'}}>
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>We provide blood cancer patients with a second chance at life.</h3>
					<p>The vision of BMD is to fight blood cancer and blood disorders. Our aim is to <br/> improve the situation of patients suffering from blood cancer and other blood  <br/> disorders in India and throughout the world, by raising awareness about blood <br/> stem cell transplantation and registering potential blood stem donors.Therefore,<br/>we are constantly working towards registering potential blood stem cell donors..</p>
					<div class="button" style={{paddingLeft:'50px'}}>
						<a href="/Readmore" style={{padding:'10px 25px 10px 28px',textAlign:'center'}}> Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=" " ><i class="fa fa-facebook-f"></i></a>
					<a href=" "><i class="fa fa-twitter"></i></a>
					<a href=" "><i class="fa fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section" style={{width:'40%',marginLeft:'60px'}}>
				<img src={about} alt=''/>
			</div>
		</div>
	</div>
        <Footer></Footer>
    </div>
    )
}

export default Index