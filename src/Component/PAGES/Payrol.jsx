import React from 'react'
import AlignCard from '../AlignCard'

const Payrol = () => {
  return (
   <>
     <div className="row full hr" style={{height:"500px",background:"url('downloadflip.svg')"}}>
<div className="row full rowRev" >
    <div className="col w50 flexAIC flexJCC">
        <img src="1634632258-payroll.avif" width="320px" alt="" />
    </div>
    <div className="col w50 flexAIC flexJCC">
        <div className="col">
            <h2>Payroll Software</h2>
            <p style={{color:"orange",fontSize:"3rem"}}>Faster processing,</p>
            <p style={{color:"orange",fontSize:"3rem"}}>accurate payouts</p>
            <p style={{maxWidth:"400px",marginTop:"20px",lineHeight:"2"}}>Bid farewell to cumbersome Excel sheets and payroll computation errors. Welcome 100% statutory compliance, on-time disbursement of salaries and stress-free month ends.</p>
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

export default Payrol