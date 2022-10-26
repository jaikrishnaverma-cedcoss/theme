import React, { useState } from 'react'
import Captch from './Captch'

const login = (props) => {
 


    if(!props.set.loginStatus||props.set.loginStatus==="hide")
    {
    return (
        <>
            <div className="col full flexAIC" style={{ background: "linear-gradient(240deg, #1e97fa, #39befa)",minHeight:"90vh"}}>
                <p className="heading lfont m1" style={{fontSize:"30px",marginTop:"20px"}}  >Login to greytHR</p>
                <p className='lfont '>Find out the greytHR URL for your company.</p>

                <form onSubmit={props.login} className="row flexJCC w80 " style={{marginTop:"10px"}}>
                    <div className="col w50 flexAIC lbg p1 flexSB">
                        <p className="full clr m1" style={{}}>Official Email or Phone Number:</p>
                        <input type="email" name="email" className='borderbox' placeholder="Enter your work email" style={{ fontSize:"14px",height: "30px",padding:"1% 1%",width:"98%",marginTop:"1%" }} />
                       
                       <div className="row flexAIC flexSB full" style={{margin:"8% 1%"}}>
                             <Captch   recaptchaRef={props.loginrecaptchaRef}/>
                    
                        <button className='dbtn w30 ' type="submit" style={{width:"93%"}}>Search</button>
                    
                        </div>
<div className={`p${props.set.loginStatus} col flexAIC`}>    
<p>Sorry!</p>
<p>We're unable to find this mobile/email in our records.</p>
<p>Contact your HR/admin for domain information.</p></div>
                    </div>
                  
                </form>
            </div>
        </>
    )
                    }
                    else{
return (
    <>
  <div className="col full flexAIC" style={{ background: "linear-gradient(240deg, #1e97fa, #39befa)",minHeight:"90vh"}}>
                <p className="heading lfont m1" style={{fontSize:"25px",marginTop:"65px"}}>Login to greytHR</p>
                <div className="col w33 flexAIC lbg flexSB" style={{padding:"5px"}}>
                   <div className="col full borderbox" style={{margin:"10px 0px"}}>
<div className="row flexAIC flexSB full" >
    <div className="col p5" style={{paddingLeft:"10%"}}>
    <img src="logo.png" width="40px" alt="" />
    </div>
    <div className="" style={{marginRight:"20px"}}>
        <p className="">CEDCOSS TECHNOLOGIES PRIVATE LIMITED</p>
        <a href="https://cedcoss.greythr.com/uas/portal/auth/login?login_challenge=fe0c1a19962145cdb5c7a19292cd2b01" className='dfont'>cedcoss.greythr.com</a>
    </div>
    </div>
   
                   </div>
                   
                    </div>
                    <button className="dbtn m2 sbtn">Find another domain</button>
    </div>
    </>
)

                    }
}

export default login


