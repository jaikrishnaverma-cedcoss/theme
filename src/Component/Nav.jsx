import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="row  flexJCC p1 shadow" style={{ position: "fixed" }} >
        <div className="w85 row flexAIC flexSB">
          <div className="row w50 flexSB " >
            <Link to="/"><img src="axds.png" width="160px" alt="" /></Link>
            <div className="w80 row flexAIC flexSA">
              <div className="dropdown">

                <p className='dropbtn'>Start <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                <div class="dropdown-content p2 " style={{ borderRadius: "5px", minWidth: "265px" }}>
                  <Link to="/hrSoftware"><p style={{ padding: "5%", paddingLeft: "10%" }}>HR Software</p></Link>
                  <Link to="/payroll-software"> <p style={{ padding: "5%", paddingLeft: "10%" }}>Payroll Software</p></Link>
                  <Link to="/leave-management-software">  <p style={{ padding: "5%", paddingLeft: "10%" }}>Leave Management</p></Link>
                  <Link to="/attendance-management-software"><p style={{ padding: "5%", paddingLeft: "10%" }}>Attendance Management</p></Link>
                  <Link to="/employee-self-service-portal"><p style={{ padding: "5%", paddingLeft: "10%" }}>Employee Self Service</p></Link>
                  <Link to="/mobile-app"><p style={{ padding: "5%", paddingLeft: "10%" }}>Mobile App For Employees</p></Link>
                </div>
              </div>

              <Link to="/customer" style={{ textDecoration: "none " }}> <p className='dropbtn' >Sell</p></Link>

              <Link to="/pricing" style={{ textDecoration: "none " }}><p className='dropbtn'>Market</p> </Link>

              <div className="dropdown">
                <p className='dropbtn'>Manage <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                <div class="dropdown-content p2" style={{ borderRadius: "5px", minWidth: "412px" }}>
                  <div className="row full">
                    <div className="col w50">
                      <div className="row flexAIC m3"><img src="im1.png" width="30px" alt="" />
                        <Link to="/resources"><p className="m1">Resource Librery</p></Link></div>
                      <Link to="/blogs"><p className="sublink">Blogs</p></Link>
                      <Link to="/guides"><p className="sublink">Guides</p></Link>
                      <Link to="/template"><p className="sublink">Templates</p></Link>
                      <div className="row flexAIC m3  limpup"><img src="webinars.png" width="30px" alt="" /> <p className="m1 limp">Webinars</p></div>
                      <div className="row flexAIC m3 limpup"><img src="podcast.png" width="30px" alt="" /> <p className="m1 limp">Podcasts </p></div>
                      <div className="row flexAIC m3 limpup"><img src="partners.png" width="30px" alt="" /> <p className="m1 limp">Partners </p></div>
                      <div className="row flexAIC m3  limpup"><img src="academy.png" width="30px" alt="" /> <p className="m1 limp">Academy </p></div>
                      <div className="row flexAIC m3  limpup"><img src="forums.png" width="30px" alt="" /> <p className="m1 limp">Community </p></div>
                      <div className="row flexAIC m3  limpup"><img src="im1.png" width="30px" alt="" /> <p className="m1 limp">GreytHR Help</p></div>
                    </div>
                    <div className="col w50">

                      <div className="row flexAIC m3 limpup"><img src="Payroll Management.png" width="30px" alt="" /> <p className="m1 limp">Payroll Management </p></div>
                      <div className="row flexAIC m3  limpup"><img src="Leave Management.png" width="30px" alt="" /> <p className="m1 limp">Leave Management </p></div>
                      <div className="row flexAIC m3  limpup"><img src="Attendance Management.png" width="30px" alt="" /> <p className="m1 limp">Attendance Management </p></div>
                      <div className="row flexAIC m3  limpup"><img src="HRMS.png" width="30px" alt="" /> <p className="m1 limp">HRMS </p></div>
                      <div className="row flexAIC m3  limpup"><img src="Statutory Compliances.png" width="30px" alt="" /> <p className="m1 limp">Statutory Compliances </p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row flexAIC w50 flexEnd flexSB">
            <Link to="/pricing" style={{ textDecoration: "none " }}><p className='dropbtn hm'>Pricing</p> </Link>
            <Link to="/pricing" style={{ textDecoration: "none " }}><p className='dropbtn hm'>Learn</p> </Link>
            <Link to="login" style={{ textDecoration: "none " }}><p className="bropbtn hm">Log In</p></Link>
            <Link to="signup" style={{ textDecoration: "none " }}><button className="dbtn hm free">Start free trial</button></Link>
          </div>
        </div>
      </nav>
<div style={{marginTop: "80px"}}></div>
    </>
  )
}

export default Nav