import React from 'react'
import AlignCard from '../AlignCard'
import ThemePaletts from './ThemePaletts'

const Theme = () => {
  return (
   <>
     <div className="row full " style={{height:"500px",background:"#f8f7f7"}}>
<div className="row full rowRev" >
    <div className="col w50 flexAIC flexJCC">
        <img src="clothing-b83257cbc7ebfa871cf7962818a6f407f634ca6322b29fbf1ad9a28c885f39be.webp" width="550px" alt="" />
    </div>
    <div className="col w50 flexAIC flexJCC">
        <div className="col">
            <h2></h2>
            <p style={{color:"#212326",fontSize:"3rem"}}>Shopify themes—</p>
            <p style={{color:"#212326",fontSize:"3rem"}}>built for commerce</p>
            <p style={{maxWidth:"400px",marginTop:"20px",fontSize:"1.5rem",lineHeight:"2rem"}}>Take your store from launch to scale with themes that make selling easy.</p>
       <button className='blackbtn'>Explore themes</button>
       <img src="Screenshot at 2022-10-31 15-31-31.png" alt="" width="170px" />
        </div>
    </div>
</div>
    </div>
    <div className='col full flexAIC' style={{ margin: "50px 0px" }}>
         <ThemePaletts title="All Themes"/>
        </div>
   </>
  )
}

export default Theme