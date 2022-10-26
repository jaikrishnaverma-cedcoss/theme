import React, { useState } from 'react'
import Captch from './Captch'

const Signup = (props) => {
 
    if(!props.set.status)
    {
    return (
        <>
            <div className="col full flexAIC" style={{ background: "linear-gradient(240deg, #1e97fa, #39befa)",minHeight:"90vh"}}>
                <p className="heading lfont m1" style={{fontSize:"30px",marginTop:"20px"}}>Try greytHR free for 7 days</p>
                <p className='lfont '>Simplify your everyday HR tasks and increase productivity.</p>

                <form onSubmit={props.submitted} className="row flexJCC w80 " style={{marginTop:"50px"}}>
                    <div className="col w30 flexAIC lbg p2 flexSB">
                        <input type="email" name="email" className='borderbox' placeholder="Enter your work email" style={{ marginTop: "4%",fontSize:"14px",height: "30px",padding:"1% 3%",width:"89%" }} />               
                             <Captch   recaptchaRef={props.recaptchaRef}/>
                             <div className="col full flexAIC">
                        <button className='dbtn full' type="submit" style={{width:"93%"}}>CREATE FREE TRIAL ACCOUNT</button>
                        <p className='w80 m1' style={{fontSize:"13px",color:"grey"}}>(No credit card details required at sign up)</p> 
                        </div>

                    </div>
                    {/* </form> */}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <div className="col w40" style={{marginLeft:"30px"}}>
                        <div className="row w100" >
                            <div className="col w20">
                                <img className="img" src="1614675502-sunil-stellar-innovations.avif" style={{ width: "75px", height: "75px", borderRadius: "50%", border: "2px solid grey" }}></img>
                            </div>
                            <div className="col w80">
                                <p className='lfont' style={{ marginTop: "20px", marginLeft: "20px" }}>"Payroll processing has never been so easy. greytHR’s employee self service module truly empowers all our employees."</p>
                                <p className='lfont' style={{ marginTop: "20px", marginLeft: "20px" }}><span style={{ fontWeight: "600" }}>Mr.Sunil Kumar</span>, Assistant Vice President
                                   </p>
                                    <p className='lfont' style={{ marginLeft: "20px" }}> Stellar Innovations</p>
                            </div>
                        </div>
                        <div className="row w100" style={{ marginTop: "40px" }}>
                            <div className="col w20">
                                <img className="img" src="1614675506-tausif-cp-seeds.avif" style={{ width: "75px", height: "75px", borderRadius: "50%", border: "2px solid grey" }}></img>
                            </div>
                            <div className="col w80">
                                <p className='lfont' style={{ marginTop: "20px", marginLeft: "20px" }}>"Our HR operations have become so much easier, accurate & simple after using greytHR."</p>
                                <p className='lfont' style={{ marginTop: "20px", marginLeft: "20px" }}><span style={{ fontWeight: "600" }}>Mr. Tausif</span>, HR Manager</p>
<p className='lfont' style={{ marginLeft: "20px" }}>CP Seeds</p>
                            </div>
                        </div>
                    </div>
                </form>

                <p className='heading lfont m3' style={{marginTop:"6%"}}>India’s No 1 <span className=" highlited" style={{color:"white"}}>payroll</span> & <span className=" highlited" style={{color:"white"}}>HR software</span> | Trusted by companies like</p>
                <img src="signup-customer-logo-lg.webp" alt="" />
            </div>
        </>
    )
                    }
                    else{
return (
    <>
    <div className="col full flexAIC flexJCC" style={{ background: "linear-gradient(240deg, #1e97fa, #39befa)",minHeight:"90vh"}}>

<p className="heading lfont">Click on the verification link</p>
        <div className="col w30 flexAIC lbg p2 clr" style={{fontSize:"15px"}}>
        <img className="m3" src="mail-sent.png" width="100px" alt="" />
        <p>We’ve sent you a verification email to</p>
        <p className='m3'>{props.set.email}</p>
        <p>Please click on the verification link.</p>
        <p> in the email to begin your trial.</p>
        </div>
    </div>
    </>
)

                    }
}

export default Signup


