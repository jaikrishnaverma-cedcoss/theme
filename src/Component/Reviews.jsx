import React from 'react'

const Reviews = () => {
  return (
   <>
   <div className="col full flexAIC"  style={{paddingTop: "30px", paddingBottom: "40px " }}>
   <div className="dbg m1" style={{ marginLeft: "0px", width: "35px", padding: ".2% 1px" }}></div>
   <p className="heading clr">Rated 'Leader' on G2.</p>
   <div className="row flexAIC">
    <i class="fa fa-star" style={{color:"#EE7928",fontSize:"22px"}} aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:"#EE7928",fontSize:"22px"}} aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:"#EE7928",fontSize:"22px"}} aria-hidden="true"></i>
    <i class="fa fa-star" style={{color:"#EE7928",fontSize:"22px"}} aria-hidden="true"></i>
    <i class="fa fa-star-half-o" style={{color:"#EE7928",fontSize:"22px"}} aria-hidden="true"></i>
   <p className="heading clr">4.4 out of 5</p></div>
   <p className="heading clr">Check out our reviews.</p>
   <img src="g2-crowd-badges.webp" style={{marginTop:"50px"}} alt="" />
   </div>
   </>
  )
}

export default Reviews