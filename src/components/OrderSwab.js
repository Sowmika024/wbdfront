import './style.css'
import Navbar from './Navbar'
import { useState ,useEffect} from 'react';
import Axios from 'axios'; 
function Orderswab() {

    

  
    const [name, setname]=useState('');
    const [contact, setcontact]=useState('');
    const [email, setemail]=useState('');
    const [address, setaddress]=useState('');
    const [city, setcity]=useState('');
    const [pincode, setpincode]=useState('');
    const [state, setstate]=useState('');
  
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    Axios.post('http://localhost:4000/orders', {
      name: name,
    contact:contact,
    email:email,
    address:address,
    city:city,
    pincode:pincode,
    state:state
    })
    alert("ordered successful!!");
    setaddress('');
    setcity('');
    setcontact('');
    setname('');
    setstate('');
    setname('');
    setemail('');
    setpincode('');
  }

  useEffect(()=>{
    Axios.get('http://localhost:4000/read6').then((response)=>{
      console.log(response)
    })
  },[])


return (<div>
<Navbar></Navbar>
<metatag charset="UTF-8"></metatag>
      <metatag http-equiv="X-UA-Compatible" content="IE=edge"></metatag>
      <metatag name="viewport" content="width=device-width, initial-scale=1.0"></metatag>
      <title>CONTACT US</title>
      <link href="https://stackpaths/bootstrap.min.css" rel="stylesheet"></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist.bootstrapcdn.com/bootstrap/4.1.2/cs/js/bootstrap.bundle.min.js"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap"
        rel="stylesheet"></link>
      <link rel="icon" type="text/css" href="icon.png"></link>
<div className='orderpp'>
<div  className="orderpp2" >
   <br/> <p class="pswab" > Order Swab Kit  </p>
   <div class="swabform">
    <form  onSubmit={handleAddBookSubmit} style={{width: '200px',height:'550px'}} >
     
      <label>Name : </label>
      <input type="text" name="name" id ="name" onChange={(e)=>setname(e.target.value)} value={name} placeholder="enter your user name" size="50" width="100"  /><br /><br />
      
      <label>Contact No. : </label>
      <input type="tel" name="contact" id ="contact" onChange={(e)=>setcontact(e.target.value)} value={contact} placeholder="enter your contact" size="50" required pattern="[0-9]{10}" />
      <small style={{color:'black'}}>Format: (10 numbers )</small> <br /><br />
      
      <label>Email. : </label>
      <input type="email" name="email" id ="email" onChange={(e)=>setemail(e.target.value)} value={email} placeholder="enter your emial" size="50" required /> <br /><br />
      
      <label>Address  : </label>
      <input type="text" name="address" id ="address" onChange={(e)=>setaddress(e.target.value)} value={address} placeholder="enter your address" size="50" required /> <br /><br />
      
      <label>City : </label>
      <input type="text" name="city" id ="city" onChange={(e)=>setcity(e.target.value)} value={city} placeholder="enter your city" size="50" required /> <br /><br />
      
      <label>Pincode : </label>
      <input type="text" name="pincode" id ="pincode" onChange={(e)=>setpincode(e.target.value)} value={pincode} placeholder="enter your pincode" size="50" required /> <br /><br />
      
      <label>State : </label>
      <input type="text" name="state" id ="state" onChange={(e)=>setstate(e.target.value)} value={state} placeholder="enter your state" size="50" required /> <br /><br />

   <br /><input type="submit" value="submit" name="submit" id="submit"  className="ll" />
</form>
</div>
</div>
</div>
</div>
)
}

export default Orderswab