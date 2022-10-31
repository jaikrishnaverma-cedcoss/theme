import React from 'react'
import { Link } from 'react-router-dom'

const ThemeHead = () => {
  return (
<>
<nav className="col full flexAIC p1 secnav " style={{ color: "#212326" }} >
    <div className="col w90 ">
   <div className="row flexAIC w40 flexSB navv">
   <span>Shopify Online store</span>
   <span>|</span>
    <span>Overview</span>
    <span>Examples</span>
    <span>Themes</span>
   </div>
    </div>

    <p className="diffrent">SHOPIFY ECOMMERCE THEMES</p>
    <p className="headders">Showcase your brand online with free</p>
    <p className="headders">ecommerce themes</p>
    <p className='downstar'>Find the right theme and customize it to fit your brand.</p>
    <img src="Screenshot at 2022-10-31 13-42-10.png" className=' imgr' alt="" />

    <div className="col w90 m1">
        <a href="" style={{fontSize: "1.5em",color:"white"}}>Dawn</a>
        <p style={{lineHeight: "1.5",fontSize: "1em",color:"white"}}>1 Style</p>
        <p className="" style={{margin:"1% 0%",fontSize: "1.25em",color:"white"}}>Tell your story—however you want—with the theme that flexes to meet your brand's needs. Dawn's adaptable layout, site-wide cross-selling, and media-optimized product pages make it uniquely designed to boost sales. Easier to customize than ever, sections and blocks let you add, rearrange, and edit every page without any coding.</p>
        <h3 style={{margin:"2% 0% 5% 0%",color:"#90dfd6"}}>Learn more about Dawn and the latest online store features</h3>
    </div>
    <hr className="w90" style={{backgroundColor:"#90dfd6",border: "1px solid rgb(144, 223, 214)"}}/>
    <div className="col w90 flexAIC m1" style={{marginBottom:"100px"}}>
        <p className='p3' style={{paddingBottom:"2%",fontSize: "1.5em",color:"white"}}>Explore more free themes</p>
        <p className='lh'>Get the look and feel you want for your store with other free</p>
        <p className='lh'>themes. Find the right expression of your brand’s unique style.</p>
    </div>
</nav>

<div className="col full flexAIC p1  " style={{ background: "#fafafa" }} >
    <div className="col flexAIC w90 ">
    <p className='' style={{padding:"6% 0% .4% 0%",fontSize: "1.5em",color:"black"}}>Discover free and paid themes created by world-</p>
    <p className='' style={{paddingBottom:"2%",fontSize: "1.5em",color:"black"}}>class designers in the Shopify Theme Store</p>
  <button className="outliner"><Link to="/Explore-themes" style={{width:"200px",textDecoration:"none",color:"inherit"}}>Explore all themes</Link> </button>
   <img src="theme-store-s.webp" style={{marginTop:"70px"}} alt="" className="imgr" />

   <p className='sp1'>Start your business journey with Shopify</p>
   <p className='sp2'>Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
   <button class="dbtn hm free" style={{marginBottom:"70px"}}>Start free trial</button>
    </div>
</div>

<img src="Screenshot at 2022-10-31 14-56-36.png" className='w95' alt="" />
    </>
  )
}

export default ThemeHead