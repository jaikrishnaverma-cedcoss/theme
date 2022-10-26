import React from 'react'

const Fifty = (props) => {
  return (


        <div className="col w48 clr p1 flexSB" style={{marginTop:"40px"}}>
          {/* <div className="dbg m1" style={{ marginLeft: "0px", width: "50px", padding: ".5% .4%" }}></div> */}
          <p className="heading clr" style={{fontSize: "1.3rem",fontWeight:"900",letterSpacing: ".05rem", margin: ".4% 0px" }}>{props.data.headl1}</p>
          <p className="heading clr" style={{fontSize: "1rem"  ,margin: ".4% 0px" }}>{props.data.headl2}</p>
          <div className="col" style={{ marginTop: "25px" }}>
            <p style={{ margin: "1% 0%", fontSize: "0.9rem",letterSpacing: ".05rem",lineHeight:"22px" }}>{props.data.pl1}</p>
            <p style={{ margin: "1% 0%", fontSize: "0.9rem",letterSpacing: ".05rem",lineHeight:"22px" }}>{props.data.pl2}</p>
            <p style={{ margin: "1% 0%", fontSize: "0.9rem",letterSpacing: ".05rem",lineHeight:"22px" }}>{props.data.pl3}</p>
            <p style={{ margin: "1% 0%", fontSize: "0.9rem",letterSpacing: ".05rem",lineHeight:"22px" }} className="dfont">LEARN MORE ➝</p>
          </div>
        </div>
    
  )
}

export default Fifty