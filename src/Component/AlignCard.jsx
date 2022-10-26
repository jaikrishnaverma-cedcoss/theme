import React from 'react'

const AlignCard = (props) => {
  return (
    <>
      <div className={`row w85 ${props.data.class}`} style={{ margin: "20px 0px"}}>
        <div className="col w50 flexAIC flexJCC" style={{padding:"5%",background:props.bg1,borderRadius:"30px"}}>
          <img src={props.data.img} style={{borderRadius:"10px"}} width={`${(props.bg1==="sign")?"130%":"80%"}`} alt="" />
        </div>
        <div className="col w50 clr p5 flexJCC" style={{}}>
          <div className="dbg m1" style={{ marginLeft: "0px", width: "50px", padding: ".5% .4%" }}></div>
          <p className="heading clr" style={{ margin: ".4% 0px" }}>{props.data.headl1}</p>
          <p className="heading clr" style={{ margin: ".4% 0px" }}>{props.data.headl2}</p>
          <div className="col" style={{ marginTop: "25px" }}>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }}>{props.data.pl1}</p>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }}>{props.data.pl2}</p>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }}>{props.data.pl3}</p>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }} className="dfont">LEARN MORE ➝</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlignCard