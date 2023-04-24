import logo from './images/logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
const s1={height: '60px', marginLeft: '20px'}
const s2={position: 'absolute', Bottom: '0px',padding:'0px 20px 20px 20px',height:'2cm'}
const s3={padding: '0px', margin: '0px'}
const s4={height:'2cm'}

    return(
        <div style={s4}>
<section id="nav-bar" style={s2}>
<nav className="navbar navbar-expand-lg fixed-top">
    <Link className="navbar-brand" to="/" style={s3}>
        <img src={logo} alt="" href="/"style={s1}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/OurTeam">Our Team</Link>
                {/* <link to="/Team"  className="nav-link" >Our Team</link> */}
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Faq">FAQ'S</Link>
                </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
                </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Donate">Donate Money</Link>
            </li>
        </ul>
        <Link className="btn-registration " title="register now" to="/Register">REGISTER NOW</Link>
        <Link className="btn-login " title="Login" to="/Login">LOGIN</Link>
    </div>
</nav>
</section>
</div>
)}

export default Navbar