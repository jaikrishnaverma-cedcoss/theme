import React from 'react'
import AlignCard from './AlignCard'
import Fifty from './Fifty'
import Reviews from './Reviews'
import Testomonial from './Testomonial'

const Header = () => {
    return (
        <>
            <nav className="row full flexJCC p1 " style={{ backgroundColor: "#002d2d", marginTop: "80px" }} >
                <div className="w100 row flexAIC flexSB">
                    <div className="row full">
                        <div className="col w50  flexJCC" style={{ padding: "0 0 0 8%" }}>
                            <h1 className=' m2' style={{ color: "white", fontSize: "2.9rem", lineHeight: "2.9rem", marginLeft: "0px", letterSpacing: "1.3remx" }}>Essential HR Business Tools To Survive And Thrive</h1>
                            <p style={{ color: "white", fontSize: "1.2rem", lineHeight: "1.35", marginLeft: "0px" }}>Build your business here. Take it anywhere.
                            </p>
                            <div className="row"><input type="text" className='inputfree' placeholder="Enter your email address" /><button className="dbtn p2" style={{ marginTop: "25px", fontWeight: 700, fontSize: "1rem" }} >Start free trial</button></div>
                        </div>
                        <div className="row w50 flexEnd" style={{}}>
                            <img src="hero-small.webp" className="w99" style={{}} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w85 col flexAIC flexJCC flexSB" style={{ marginTop: "60px", color: "#3e3434", fontSize: "1.23rem" }}>
                <p style={{ fontSize: "67px" }}>Discover why millions of entrepreneurs choose Shopify to build their business—from Hello World to IPO.</p>
                <p className='m1'>TRUSTED BY</p>
                <p><span className='highlited'>15,000+</span> BUSINESSES  <span className='highlited'>&15 LAKH+</span> USERS IN <span className='highlited'>150+</span> CITIES</p>
                <img className="w99 m1" style={{ marginTop: "100px" }} src="logos-lg.webp" alt="" />
            </div>
            <div className='col full flexAIC' style={{ margin: "50px 0px" }}>
                <AlignCard data={{ class: "rowRev", img: "dg.webp", headl1: "LEAVE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} bg1="#fff8f6" />
                <AlignCard data={{ class: "", img: "dsmnj.webp", headl1: "PAYROLL PROCESSING + STATUTORY", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} bg1="#c6f0fc" />
                {/* <AlignCard data={{ class: "", img: "editions-small-8c5edf8a36e7580131901fc99fc46c5d9729311e9a764c201cc7ce5f3df2db61.webp", headl1: "ATTENDANCE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "ghr_employee_management.svg", headl1: "EMPLOYEE LIFECYCLE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "ghr_mobile.svg", headl1: "MOBILE APP FOR EMPLOYEES", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} /> */}
            </div>
            <div className="col flexAIC">
                <p style={{ fontSize: "62px" }}>Empowering</p>
                <p style={{ fontSize: "62px" }}>Entrepreneurs everywhere</p>
            </div>

            <img src="Screenshot_at_2022-10-21_17-45-40-removebg-preview.png" style={{ width: "85%" }} alt="" />
            <div className="row flexSB w90" style={{ margin: "50px 0px" }}>
                <div className="col">
                    <p className='dfont' style={{ color: "#004c3f", fontSize: "4em", lineHeight: "4rem", marginBottom: "1.0625rem" }}>Millions</p>
                    <p className='' style={{ fontSize: "1.125em", lineHeight: "1.5rem", marginBottom: "1.0625rem" }}>of merchants worldwide</p>
                </div>
                <div className="col">
                    <p className='dfont' style={{ color: "#004c3f", fontSize: "4em", lineHeight: "4rem", marginBottom: "1.0625rem" }}>175</p>
                    <p className='' style={{ fontSize: "1.125em", lineHeight: "1.5rem", marginBottom: "1.0625rem" }}>countries on Shopify</p>
                </div>
                <div className="col">
                    <p className='dfont' style={{ color: "#004c3f", fontSize: "4em", lineHeight: "4rem", marginBottom: "1.0625rem" }}>5M</p>
                    <p className='' style={{ fontSize: "1.125em", lineHeight: "1.5rem", marginBottom: "1.0625rem" }}>jobs supported in 2021</p>
                </div>
                <div className="col">
                    <p className='dfont' style={{ color: "#004c3f", fontSize: "4em", lineHeight: "4rem", marginBottom: "1.0625rem" }}>$444B+</p>
                    <p className='' style={{ fontSize: "1.125em", lineHeight: "1.5rem", marginBottom: "1.0625rem" }}>global economic activity</p>
                </div>
            </div>
            <AlignCard data={{ class: "", img: "editions-small-8c5edf8a36e7580131901fc99fc46c5d9729311e9a764c201cc7ce5f3df2db61.webp", headl1: "ATTENDANCE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} bg1="sign" />
            <div className="row full flexSB" style={{backgroundColor:"#fbf7ed"}}>
                <div className="col w50 p5">
                    <p style={{fontWeight: "500",fontSize: "3em",lineHeight: "3.75rem",letterSpacing: "-0.0625rem"}}>The help you need,</p>
                    <p style={{fontWeight: "500",fontSize: "3em",lineHeight: "3.75rem",letterSpacing: "-0.0625rem"}}>when you need it</p>
                    <div className="row" style={{ flexWrap: "wrap"}}>
                        <Fifty data={{ class: "", img: "dsmnj.webp", headl1: "Shopify Blog", headl2: "", pl1: "Get all the marketing and business strategy tips you need to help you run an online business.", pl2: "", pl3: "" }} bg1="#c6f0fc" />
                        <Fifty data={{ class: "", img: "dsmnj.webp", headl1: "Online Courses", headl2: "", pl1: "Learn from the best with instant access to lessons from successful entrepreneurs around the world.", pl2: "", pl3: "" }} bg1="#c6f0fc" />
                        <Fifty data={{ class: "", img: "dsmnj.webp", headl1: "Our Community", headl2: "", pl1: "Connect with a community of brands, partners, fellow merchants who understand Shopify.", pl2: "", pl3: "" }} bg1="#c6f0fc" />
                        <Fifty data={{ class: "", img: "dsmnj.webp", headl1: "Help Center", headl2: "", pl1: "Find answers in a flash with your dedicated resource for articles and videos from our Support team.", pl2: "", pl3: "" }} bg1="#c6f0fc" />
                    </div>
                </div>
                <img src="vxxvv.webp" alt="" className="col w50" />
            </div>
            <Testomonial />
            <Reviews />
            <img src="Screenshot at 2022-10-21 16-34-00.png" className="full" alt="" />
        </>
    )
}

export default Header