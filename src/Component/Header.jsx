import React, { useRef, useState } from 'react'
import AlignCard from './AlignCard'
import Fifty from './Fifty'
import Reviews from './Reviews'
import Testomonial from './Testomonial'
import './header.css'

const Header = (props) => {
    const ref = useRef()
    const [suggestions, setSuggestions] = useState({ available: [], notAvailable: [], input: "" })
    const Finder = (e) => {
        e.preventDefault();
        let pivote = e.target.domain.value
        if (pivote === "")
            return alert("Cant Search with Empty Name..!")
        let data = props.domains.domain.map(x => pivote + x)
        suggestions.input = pivote
        suggestions.available = data.filter((obj) => props.domains.list.indexOf(obj) === -1);
        suggestions.notAvailable = data.filter((obj) => props.domains.list.indexOf(obj) !== -1);
        setSuggestions({ ...suggestions })
    }

    if (suggestions.available.length === 0 && suggestions.notAvailable.length === 0)
        return (
            <>
                <nav className="row full flexJCC p1 " style={{ backgroundColor: "#faf9f8", color: "#212326" }} >
                    <div className="w90 col flexAIC flexSB p5">
                        {/* <div className="row full">
                        <div className="col w50  flexJCC" style={{ padding: "0 0 0 8%" }}>
                            <h1 className=' m2' style={{ color: "white", fontSize: "2.9rem", lineHeight: "2.9rem", marginLeft: "0px", letterSpacing: "1.3remx" }}>Essential HR Business Tools To Survive And Thrive</h1>
                            <p style={{ color: "white", fontSize: "1.2rem", lineHeight: "1.35", marginLeft: "0px" }}>Build your business here. Take it anywhere.
                            </p>
                            <div className="row"><input type="text" className='inputfree' placeholder="Enter your email address" /><button className="dbtn p2" style={{ marginTop: "25px", fontWeight: 700, fontSize: "1rem" }} >Start free trial</button></div>
                        </div>
                        <div className="row w50 flexEnd" style={{}}>
                            <img src="hero-small.webp" className="w99" style={{}} alt="" />
                        </div>
                    </div> */}
                        <p style={{ fontSize: "3.5em", letterSpacing: "-4px", marginBottom: "0.4em", color: "#212326", fontWeight: "800" }}>Find the perfect domain</p>
                        <p style={{ fontSize: "3.5em", letterSpacing: "-4px", marginBottom: "0.4em", color: "#212326", fontWeight: "800" }}>name</p>
                        <form className="row w80 flexJCC" onSubmit={Finder}>
                            <input name="domain" type="text" className='inputfree w60 sinput' placeholder="Enter your domain name idea (e.g. shopify.com)" />
                            <button className="dbtn p2  ssbtn" style={{ marginTop: "25px", fontWeight: 700, fontSize: "1rem" }}
                                type="submit">Search available domains</button>
                        </form>
                        <img src="Screenshot at 2022-10-26 12-54-50.png" alt="" className="full" />
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
                <div className="row full flexSB" style={{ backgroundColor: "#fbf7ed" }}>
                    <div className="col w50 p5">
                        <p style={{ fontWeight: "500", fontSize: "3em", lineHeight: "3.75rem", letterSpacing: "-0.0625rem" }}>The help you need,</p>
                        <p style={{ fontWeight: "500", fontSize: "3em", lineHeight: "3.75rem", letterSpacing: "-0.0625rem" }}>when you need it</p>
                        <div className="row" style={{ flexWrap: "wrap" }}>
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

            </>
        )
    else {
        window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });
        return (
            <>
                <div className="row  full hr" style={{ height: "480px", background: "#004c3f" }}>
                    <div className="row full rowRev" >
                        <div className="col w50 flexAIC flexJCC">
                            <img src="downloadsfd.svg" width="420px" alt="" />
                        </div>
                        <div className="col w50 flexAIC flexJCC  newer">
                            <div className="col">
                                <p style={{ color: "white", fontSize: "3rem", fontWeight: "700" }}>Domain Name</p>
                                <p style={{ color: "white", fontSize: "3rem", fontWeight: "700" }}>generator</p>
                                <p style={{ maxWidth: "450px", marginTop: "20px", lineHeight: "2", color: "#d2d5d9", fontSize: "1.5em" }}>Search for the best domain name ideas and instantly check domain availability</p>
                                <button className="dbtn p3" style={{ maxWidth: "210px", marginTop: "25px", fontWeight: 700, fontSize: "1rem" }}
                                    type="submit">Search for a domain</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col full flexAIC' ref={ref} style={{ margin: "50px 0px" }}>
                    <form className="row w60 flexJCC" onSubmit={Finder} style={{ marginTop: "40px" }}>
                        <input name="domain" defaultValue={suggestions.input} type="text" className='inputfree w50 sinput' placeholder="Enter your domain name idea (e.g. shopify.com)" />
                        <button className="dbtn ssbtn" style={{ marginTop: "25px", padding: "2% 3%", fontWeight: 700, fontSize: "1rem" }}
                            type="submit">Search</button>
                    </form>
                    <p className="row flexAIC" style={{fontSize:"2.8em",marginTop:"30px"}}>Search results for&nbsp;<h3>{suggestions.input}</h3></p>
                    <p style={{ marginTop: "20px", lineHeight: "2", color: "grey", fontSize: "1.5em" }}>Choose a domain and follow the steps to create your store</p>
                  <div className="col" style={{marginTop:"50px",width:"70%"}}>
<div className="full">
<h3>MOST POPULAR DOMAIN NAME</h3>
<table className="full" style={{borderBottom:"1px solid grey"}}>
    <tr>
        <td className='row flexAIC flexSB' >
        <p className="row flexAIC" style={{fontSize:"1em"}}>{suggestions.available[0].split(".")[0]}.<h3>{suggestions.available[0].split(".")[1]}</h3></p>
       <div className="row flexAIC w20 flexSB"><p className='m3'> $14 USD/year</p>  <button style={{fontSize:"40px",background:"transparent",color:"#008060"}}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button></div>
        </td>
    </tr>
</table>
</div>
<div className="full" style={{marginTop:"40px"}}>
<h3>OTHER DOMAINS NAME</h3>
<table className="full" >
    {
suggestions.available.map(x=> <tr >
    <td className='row flexAIC flexSB'>
    <p className="row flexAIC" style={{fontSize:"1em"}}>{x.split(".")[0]}.<h3>{x.split(".")[1]}</h3></p>
   <div className="row flexAIC w20 flexSB"><p className='m3'> $14 USD/year</p>  <button style={{fontSize:"40px",background:"transparent",color:"#008060"}}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button></div>
    </td>
</tr>)
    }
    {
        suggestions.notAvailable.map(x=> <tr>
            <td className='row flexAIC flexSB'>
            <p className="row flexAIC" style={{fontSize:"1em"}}>{x.split(".")[0]}.<h3>{x.split(".")[1]}</h3></p>
           <div className="row flexAIC w20 flexSB"><p className='m3'> UNAVAILABLE</p> </div>
            </td>
        </tr>)
    }
   
</table>
</div>
<div className="full" style={{marginTop:"40px"}}>
<h3>ALTERNATIVE DOMAIN NAMES</h3>
<table className="full" >
    {
        ["cafe.com","agency.com","express.com","vip.com","factory.com"].map(x=> <tr>
            <td className='row flexAIC flexSB'>
            <p className="row flexAIC" style={{fontSize:"1em"}}>{suggestions.input}.<h3>{x}</h3></p>
            <div className="row flexAIC w20 flexSB"><p className='m3'> $11 USD/year</p>  <button style={{fontSize:"40px",background:"transparent",color:"#008060"}}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button></div>
            </td>
        </tr>)
    }
   
</table>
</div>
   </div>
    
                    <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "PAYROLL PROCESSING + STATUTORY", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
                    <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "LEAVE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
                    <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "ATTENDANCE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
                    <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "EMPLOYEE LIFECYCLE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
                    <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "MOBILE APP FOR EMPLOYEES", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
                </div>
            </>
        )
    }
}

export default Header