import React from 'react'

const Testomonial = () => {
    return (
        <>
            <div className="col full flexAIC" style={{ backgroundColor: "aliceblue", paddingTop: "20px", paddingBottom: "40px " }}>
                <div className="dbg m1" style={{ marginLeft: "0px", width: "35px", padding: ".2% 1px" }}></div>
                <p className="heading clr" style={{ fontSize: "2rem" }}>Exceptional Support</p>

                <div className="row w85 flexAIC">
                    <div className="col w33 flexAIC m1 p1 lbg flexSA " style={{ minHeight: "300px", paddingBottom: "60px" }}>
                        <img src="ghr_implementation.svg" width="100px" alt="" />
                        <div className="col flexAIC  flexSA">
                            <p className='clr' style={{ fontSize: "1.1rem" }}>PROFESSIONAL IMPLEMENTATION</p>
                            <p className='clr' style={{ textAlign: "center", marginTop: "25px" }}>Expert implementation engineers drive your complete end-to-end account setup along with two-month on-boarding support.</p>
                        </div>
                    </div>

                    <div className="col w33 flexAIC m1 p1 lbg flexSA " style={{ minHeight: "300px", paddingBottom: "60px" }}>
                        <img src="ghr_implementation.svg" width="100px" alt="" />
                        <div className="col flexAIC  flexSA">
                            <p className='clr' style={{ fontSize: "1.1rem" }}>COMPLETE CUSTOMER CARE</p>
                            <p className='clr' style={{ textAlign: "center", marginTop: "25px" }}>With a first response time lesser than 2 hours and a resolution time lesser than 6 hours for 85% of customer queries, you’ll love our Customer Care.</p>
                        </div>
                    </div>

                    <div className="col w33 flexAIC m1 p1 lbg flexSA " style={{ minHeight: "300px", paddingBottom: "60px" }}>
                        <img src="ghr_implementation.svg" width="100px" alt="" />
                        <div className="col flexAIC  flexSA">
                            <p className='clr' style={{ fontSize: "1.1rem" }}>GUIDANCE FOR HR AND PAYROLL EXECS</p>
                            <p className='clr' style={{ textAlign: "center", marginTop: "25px" }}>Join our growing list of 3000+ webinar participants to learn the latest HR and payroll best practices. Our free Expert Series Webinars host industry experts, who'll guide you on the latest learning requirements.</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Testomonial