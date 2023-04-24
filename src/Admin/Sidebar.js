import '../components/Navbar.css'
import './Admin.css'
import l1 from './l1.jpeg'
import {Link} from 'react-router-dom'


function Sidebar(){
    return(
        <>       
        <div style={{backgroundColor:'white'}}> 
                <nav class="side-bar">
                    <div class="user-p">
                        <img src={l1} alt=" " />
                        <h4>Admin</h4>
                    </div>

                    <ul>
                    <li>
                            <Link to="/RegisterData">
                                <span>RegisterData</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/DonorsData">
                                <span>Donors</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/PatientData">
                                <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/HospitalsData">
                                <span>Hospitals</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/OrdersData">
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ResultsData">
                                <span>Reports</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin">
                                <span>Logout</span>
                            </Link>
                        </li>
                     
                    </ul>
                </nav>
            </div></>


)}

export default Sidebar