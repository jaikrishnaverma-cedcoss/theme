
import './App.css';
import Nav from './Component/Nav';
import Header from './Component/Header';
import {Route, Routes } from 'react-router-dom';
import HrSoftware from './Component/PAGES/HrSoftware';
import Payrol from './Component/PAGES/Payrol';
import Leave from './Component/PAGES/LeaveManage';
import Attendance from './Component/PAGES/Attendance';
import Employee from './Component/PAGES/Employee';
import Mobile from './Component/PAGES/Mobile';
import Resources from './Component/PAGES/Resources';
import Pricing from './Component/PAGES/Pricing';
import Signup from './Component/PAGES/ Signup';
import React, { useState } from 'react';
import Login from './Component/PAGES/Login';

function App() {
  const [set,setSet]=useState({status:false,email:"",loginStatus:"hide"})
  const recaptchaRef = React.createRef();
  const loginrecaptchaRef = React.createRef();
  const login=(e)=>{
    e.preventDefault()

    if(!loginrecaptchaRef.current.getValue()==""&& e.target.email.value!==""){

    if( set.email===e.target.email.value)
    {
setSet({...set,loginStatus:true})
    }else{
      setSet({...set,loginStatus:false})
    }
  }
}
  const submitted=(e)=>{
      e.preventDefault()
      // console.log();
      if(!recaptchaRef.current.getValue()==""&& e.target.email.value!==""){
          set.status=true
          set.email=e.target.email.value
setSet({...set})
      }
      // e.preventDefault()
      
  }
  return (
    <>
      <div className='col full flexAIC'>
        <Nav />
       
      <Routes>
        <Route path="/" index element={ <Header />}></Route>
        <Route path='/hrSoftware' element={<HrSoftware />}></Route>
        <Route path='/payroll-software' element={<Payrol />}></Route>
        <Route path='/leave-management-software' element={<Leave />}></Route>
        <Route path='/attendance-management-software' element={<Attendance/>}></Route>
        <Route path='/employee-self-service-portal' element={<Employee />}></Route>
        <Route path='/mobile-app' element={<Mobile />}></Route>
        <Route path='/resources' element={<Resources title="Resource Library" />}></Route>
        <Route path='/blogs' element={<Resources title="Blogs" />}></Route>
        <Route path='/guides' element={<Resources title="Guides" />}></Route>
        <Route path='/template' element={<Resources title="Templates" />}></Route>
        <Route path='/customer' element={<Resources title="Great teams achieve more with greytHR" />}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/signup' element={<Signup submitted={submitted} set={set} recaptchaRef={recaptchaRef}/>}></Route>
        <Route path='/login' element={<Login login={login} set={set} loginrecaptchaRef={loginrecaptchaRef}/>}></Route>
      </Routes>


      </div>
<div className=' flexAIC flexStart btner'>
<button className="xbtn"><i class="fa fa-whatsapp" aria-hidden="true"></i>&nbsp;Feedback</button>
</div>

<div className='flexAIC flexStart mbtner'>
<button className="mbtn"><i class="fa fa-whatsapp" aria-hidden="true"></i></button>
</div>
    </>
  );
}

export default App;
