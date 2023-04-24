import './Navbar'
import d1 from './images/d1.png'
import d2 from './images/d2.png'
import d4 from './images/d4.png'
import d5 from './images/d5.png'

function Information() {
    const s1={color: 'rgb(20, 58, 163)', fontSize: '30px',marginLeft:'20px'}
    const s2={fontSize: '23px',fontFamily: 'Segoe UI',marginTop: '0.5cm',color:'black',marginLeft:'20px'}
    return(
       <div>
   <div>
<div class="rw">
    <div class="cn2" style={{color:'black'}}>
      <div class="cr">
        <img src={d1} alt=""></img>
        <h4><b>You are a perfect  match</b></h4> 
        <p style={{fontSize:'20px',marginLeft:'20px',marginRight:'20px'}}>If you come up as a potential match for someone, the donation process can begin. Our team will be in touchwith you as soon as possible.</p><br/>
      </div>
    </div>
  
    <div class="cn2" >
      <div class="cr">
        <img src={d2} alt=""></img>
        <h4><b>Health check</b></h4> 
        <p style={{fontSize:'20px',marginLeft:'20px',marginRight:'20px'}}>you will be asked to provide blood samplesIf the results confirm that you are a suitable donor, you will be asked to donate your stem cells.</p> <br/>
      </div>
    </div>
        <div class="cn2">
          <div class="cr">
            <img src={d4} alt=""></img>
            <h4><b>patient receives your blood stem cells</b></h4> 
            <p style={{fontSize:'19px',marginLeft:'20px',marginRight:'20px'}}>The collected blood stem cells are transplanted to the patient, similar to process of a blood transfusion.</p><br/><br/>
          </div>
        </div>
      
        <div class="cn2" >
          <div class="cr">
            <img src={d5} alt=""></img>
            <h4><b>A second chance at life</b></h4> 
            <p style={{fontSize:'20px',marginLeft:'20px',marginRight:'20px'}}>Thank you for the donation!! Your job is done and your incredible donation will help to give someone a second chance at life.</p><br/><br/>
          </div>
        </div>
      </div>

<h1 style={s1}>What makes a Perfect Match??</h1>
<p style={s2}>What makes a perfect match 
HLA characteristics are the most important factor in finding a matching donor. In order for a stem cell transplant to have the highest chance of success, ideally 10 out of 10 relevant HLA characteristics should match between the patient and the donor. If a patient is lucky enough to have several matches, other factors will be analysed to find the best match. This is why we test more than 10 HLA characteristics. 
As part of the initial typing, we also tissue type for further parameters that could prove advantageous, either now or in the future, such as the entire KIR receptor family, MICA/B, CCRS, HLA-DPB1, HLA-E, HLA-DQA1, HLA-DPA1, HLA-DRB3/4/5 and the ABO and Rh blood groups. In addition, our donors are also tested for cytomegalovirus (CMV), a common herpes virus. 
</p>

        </div>
        </div>
    )
}

export default Information