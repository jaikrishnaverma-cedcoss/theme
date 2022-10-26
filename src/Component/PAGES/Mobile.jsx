import React from 'react'
import AlignCard from '../AlignCard'

const Mobile = () => {
  return (
   <>
     <div className="row full hr" style={{height:"500px",background:"url('downloadflip.svg')"}}>
<div className="row full rowRev" >
    <div className="col w50 flexAIC flexJCC">
        <img src="1634632774-mobile-app.avif" width="320px" alt="" />
    </div>
    <div className="col w50 flexAIC flexJCC">
        <div className="col">
            <h2>Mobile App</h2>
            <p style={{color:"orange",fontSize:"3rem"}}>Get, set, go</p>
            <p style={{maxWidth:"400px",marginTop:"20px",lineHeight:"2"}}>greytHR puts access in the employee’s pocket via a cool mobile app. Payroll information, leave applications, geo-attendance marking and a 24/7 help desk for queries, are all just a screen tap away.</p>
        </div>
    </div>
</div>
    </div>
    <div className='col full flexAIC' style={{ margin: "50px 0px" }}>
          <AlignCard data={{ class: "", img: "1611073628-employees-and-managers-ghr.avif", headl1: "Mobile app for employees and", headl2: "managers", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1611073495-salarymobile-ghr.avif", headl1: "Payroll-related information", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1611073681-leavemobile-ghr.avif", headl1: "Leave Management", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1611073775-attendancemobile-ghr.avif", headl1: "Geo Mark Attendance Marking", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1611073728-helpdeskmobile-ghr.avif", headl1: "Help Desk", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
        </div>
   </>
  )
}

export default Mobile;