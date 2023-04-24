// import './Navbar.css'
import './Team.css'

import anj from './images/anj.png'
import me from './images/me.png'
import reg from './images/rp3.png'
import team3 from './images/team3.png'
import afreen from './images/afreen2.png'
import Navbar from './Navbar'


function OurTeam(){
   return(
        <div >
<Navbar></Navbar>
  <meta charset="UTF-8"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta name="viewport" content="width=100%, initial-scale=1.0"></meta>
  <title> BMD Website </title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap"
      rel="stylesheet"></link>
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
  <link rel="icon" type="text/css" href="icon.png"></link>
  <body >
  
  <section class="team-section">
     <div class="container" style={{marginTop:'120px',height:'500px'}}>
         <div style={{position:'relative',marginLeft:'0px',marginTop:'-500px'}}>
         <div class="rowpp">
             <div class="team-items">
                  <div class="item">
                      <img src={anj} alt="team" />      
                      <div class="inner">
                          <div class="info">
                               <h5>K. Kusumanjali</h5>
                          </div>
                      </div>
                  </div>
                  
                  <div class="item">
                      <img src={me} alt="team" height="250px"/>      
                      <div class="inner">
                          <div class="info">
                               <h5>G. Sowmika</h5>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <img src={reg} alt="team"  height="250px"/>      
                      <div class="inner">
                          <div class="info">
                               <h5>R. Hemalatha</h5>
                          </div>
                      </div>
                  </div>

                  
             </div>
         </div>
         </div>
      
         <div style={{position:'relative',marginLeft:'-1300px',marginTop:'200px',width:'1400px'}} >
         <div class="rowpp">
             <div class="team-items">   
                  <div class="item" style={{marginLeft:'170px'}}>
                      <img src={team3} alt="team" height="250px"/>      
                      <div class="inner">
                          <div class="info">
                               <h5>G. Samhitha</h5>
                          </div>
                      </div>
                  </div>
                  <div class="item" style={{padding:'0px 0px 0px 0px',marginRight:'170px'}}>
                      <img src={afreen} alt="team"  height="250px"/>      
                      <div class="inner">
                          <div class="info">
                               <h5>S. Afreen</h5>
                          </div>
                      </div>
                  </div>

                  
             </div>
         </div>
         </div>
      
     </div>
  </section>

</body>
</div>
)}

export default OurTeam;