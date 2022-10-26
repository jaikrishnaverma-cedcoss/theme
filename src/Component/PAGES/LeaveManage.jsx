import React from 'react'
import AlignCard from '../AlignCard'

const Leave = () => {
  return (
    <>
    <div className="row full hr" style={{height:"500px"}}>
<div className="row full">
    <div className="col w50 flexAIC flexJCC">
        <img src="1634632462-leave.avif" width="380px" alt="" />
    </div>
    <div className="col w50 flexAIC flexJCC">
        <div className="col">
            <h3>Leave Management System</h3>
            <p style={{color:"orange",fontSize:"3rem"}}>Leave it to greytHR</p>
            <p style={{maxWidth:"400px",marginTop:"20px",lineHeight:"2"}}>Leave types. Leave tracking. Leave applications. Leave policy. And more. If it’s to do with leave management, consider it done with greytHR.</p>
        </div>
    </div>
</div>
    </div>
    <div className='col full flexAIC' style={{ margin: "50px 0px" }}>
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "PAYROLL PROCESSING + STATUTORY", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "LEAVE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "ATTENDANCE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "EMPLOYEE LIFECYCLE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "MOBILE APP FOR EMPLOYEES", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
        </div>
    </>
  )
}

export default Leave;