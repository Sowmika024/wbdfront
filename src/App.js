import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Index from './components/Index';
import Faq from './components/Faq';
import Contact from './components/Contact';
import RegisterAsDonor from './components/RegisterAsDonor';
import RegisterAsPatient from './components/RegisterAsPatient';
import RegisterAsHospital from './components/RegisterAsHospital';
import HospitalList from './components/HospitalList';
import Information from './components/Information';
import Readmore from './components/Readmore'
import Track from './components/Track.js'
import Register from './components/Register'
import Orderswab from './components/OrderSwab';
import Login from './components/Login.js'
import ResultsForm from './components/ResultsForm';
import Donate from './components/Donate';
// import CheckoutForm from './components/Dona';


import HospitalForm from './components/HospitalForm';
import DonorForm from './components/DonorForm.js'
import PatientForm from './components/PatientForm.js'
import HospitalsData from './Admin/HospitalsData';
import ResultsData from './Admin/ResultsData';
import OrdersData from './Admin/OrdersData';
import RegisterData from './Admin/RegisterData';
import DonorsData from './Admin/DonorsData';
import PatientData from './Admin/PatientData';
import Sidebar from './Admin/Sidebar';
import MainAdmin from './Admin/MainAdmin';
import Admin from './Admin/Admin';

import {  Provider } from 'react-redux';
import store from './components/store';
import OurTeam from './components/OurTeam'
import UsersList from "./components/UsersList";

function Apps() {
  return (
  
<Provider store={store}>
<Router>
 <Routes>

  <Route path='/' element={<Index/>} exact/>
  <Route path='/OurTeam' element={<OurTeam/>} exact/>

  <Route path='/Faq' element={<Faq/>} exact/>
  {/* <Route path='/CheckoutForm' element={<CheckoutForm/>} exact/> */}

  <Route path='/Contact' element={<Contact/>} exact/>
  <Route path='/RegisterAsHospital' element={<RegisterAsHospital/>} exact/>
  <Route path='/RegisterAsDonor' element={<RegisterAsDonor/>} exact/>
  <Route path='/RegisterAsPatient' element={<RegisterAsPatient/>} exact/>
  <Route path='/HospitalList' element={<HospitalList/>} exact/>
  <Route path='/Information' element={<Information/>} exact/>
  <Route path='/Readmore' element={<Readmore/>} exact/>
  <Route path='/Track' element={<Track/>} exact/>
  <Route path='/Register' element={<Register/>} exact/>
  <Route path='/Login' element={<Login/>} exact/>
  <Route path='/OrderSwab' element={<Orderswab/>} exact/>
  <Route path='/ResultsForm' element={<ResultsForm/>} exact/>
  <Route path='/HospitalForm' element={<HospitalForm/>} exact/>
  <Route path='/Donate' element={<Donate/>} exact/>
  <Route path='/DonorForm' element={<DonorForm/>} exact/>
  <Route path='/PatientForm' element={<PatientForm/>} exact/>
  <Route path='/HospitalsData' element={<HospitalsData/>} exact/>
  <Route path='/Sidebar' element={<Sidebar/>} exact/>
  <Route path='/MainAdmin' element={<MainAdmin/>} exact/>
  <Route path='/Admin' element={<Admin/>} exact/>

  <Route path='/RegisterData' element={<RegisterData/>} exact/>
  <Route path='/HospitalsData' element={<HospitalsData/>} exact/>
  <Route path='/ResultsData' element={<ResultsData/>} exact/>
  <Route path='/OrdersData' element={<OrdersData/>} exact/> 
  <Route path='/DonorsData' element={<DonorsData/>} exact/> 
  <Route path='/PatientData' element={<PatientData/>} exact/> 
  <Route path='/UsersList' element={<UsersList/>} exact/> 


</Routes>
</Router>
</Provider>
    );
}

export default Apps;
