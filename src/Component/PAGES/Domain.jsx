import React from 'react'
import AlignCard from '../AlignCard'

const Domain = () => {
  return (
   <>
     <div className="row full hr" style={{height:"500px",background:"url('downloadflip.svg')"}}>
<div className="row full rowRev" >
    <div className="col w50 flexAIC flexJCC">
        <img src="1634632531-attendance.avif" width="420px" alt="" />
    </div>
    <div className="col w50 flexAIC flexJCC">
        <div className="col">
            <h2>Attendance Management System</h2>
            <p style={{color:"orange",fontSize:"3rem"}}>Real time is the real,</p>
            <p style={{color:"orange",fontSize:"3rem"}}>deal</p>
            <p style={{maxWidth:"400px",marginTop:"20px",lineHeight:"2"}}>Without real time attendance management, work is challenging and full of compromises. Real time automation of attendance enables smooth operations and improves productivity.</p>
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

export default Domain;