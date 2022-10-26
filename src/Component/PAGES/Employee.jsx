import React from 'react'
import AlignCard from '../AlignCard'

const Employee = () => {
  return (
    <>
    <div className="row full hr" style={{height:"500px"}}>
<div className="row full">
    <div className="col w50 flexAIC flexJCC">
        <img src="1634632611-ess.avif" width="420px" alt="" />
    </div>
    <div className="col w50 flexAIC flexJCC">
        <div className="col">
            <h3>Employee Self Service Portal</h3>
            <p style={{color:"orange",fontSize:"3rem"}}>The power to help</p>
            <p style={{color:"orange",fontSize:"3rem"}}>themselves</p>
            <p style={{maxWidth:"400px",marginTop:"20px",lineHeight:"2"}}>Empower employees with access to personal organisational information. Enable greater transparency, improved communication and engagement. The portal also enables anytime, anywhere access.</p>
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

export default Employee;