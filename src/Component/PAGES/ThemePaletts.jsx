import React from 'react'
import { useState } from 'react'

const ThemePaletts = (props) => {
    let arr = [{ img: "Screenshot at 2022-10-31 16-39-38.png", preview: "https://preview.codecanyon.net/item/fruits-grocery-store-and-food-ecommerce-html5-template/full_screen_preview/34571219?_ga=2.167800233.986206968.1667214406-1420780068.1662350825&_gac=1.119598714.1667214406.CjwKCAjw5P2aBhAlEiwAAdY7dGPDWHZHNdfEHuxxfXYEYM45HV5KmvCvLm1JTrDnxw7y47YjuBnDXRoC91IQAvD_BwE" }
        , { img: "x1.png", preview: "https://preview.themeforest.net/item/provpn-multipurpose-vpn-html-template-with-whmcs/full_screen_preview/29814759?_ga=2.176122410.986206968.1667214406-1420780068.1662350825&_gac=1.116673908.1667214406.CjwKCAjw5P2aBhAlEiwAAdY7dGPDWHZHNdfEHuxxfXYEYM45HV5KmvCvLm1JTrDnxw7y47YjuBnDXRoC91IQAvD_BwE" }
        , { img: "Screenshot at 2022-10-31 16-51-54.png", preview: "https://preview.codecanyon.net/item/omnimart-multipurpose-ecommerce-shopping-platform/full_screen_preview/33771074?_ga=2.210257053.986206968.1667214406-1420780068.1662350825&_gac=1.194046687.1667214406.CjwKCAjw5P2aBhAlEiwAAdY7dGPDWHZHNdfEHuxxfXYEYM45HV5KmvCvLm1JTrDnxw7y47YjuBnDXRoC91IQAvD_BwE" }
        , { img: "Screenshot at 2022-10-31 16-39-38.png", preview: "https://preview.codecanyon.net/item/fruits-grocery-store-and-food-ecommerce-html5-template/full_screen_preview/34571219?_ga=2.167800233.986206968.1667214406-1420780068.1662350825&_gac=1.119598714.1667214406.CjwKCAjw5P2aBhAlEiwAAdY7dGPDWHZHNdfEHuxxfXYEYM45HV5KmvCvLm1JTrDnxw7y47YjuBnDXRoC91IQAvD_BwE" }
        , { img: "x1.png", preview: "https://preview.themeforest.net/item/provpn-multipurpose-vpn-html-template-with-whmcs/full_screen_preview/29814759?_ga=2.176122410.986206968.1667214406-1420780068.1662350825&_gac=1.116673908.1667214406.CjwKCAjw5P2aBhAlEiwAAdY7dGPDWHZHNdfEHuxxfXYEYM45HV5KmvCvLm1JTrDnxw7y47YjuBnDXRoC91IQAvD_BwE" }
        , { img: "Screenshot at 2022-10-31 16-51-54.png", preview: "https://preview.codecanyon.net/item/omnimart-multipurpose-ecommerce-shopping-platform/full_screen_preview/33771074?_ga=2.210257053.986206968.1667214406-1420780068.1662350825&_gac=1.194046687.1667214406.CjwKCAjw5P2aBhAlEiwAAdY7dGPDWHZHNdfEHuxxfXYEYM45HV5KmvCvLm1JTrDnxw7y47YjuBnDXRoC91IQAvD_BwE" }
    ].sort(() => Math.random() - 0.5)
    let [current, setCurrent] = useState()
    return (
        <>
         {
            current?(<>
             <div className="row w85 p3" style={{ marginTop: "100px",borderRadius:"10px 10px 0px 0px",background:"#e5e7eb"}}>

<div className="w40 col flexSB">
    <h1>Reformation</h1>
    <p>by Fuel Themes</p>
    <p>Feature-packed, high-performant Shopify theme</p>
    <h3>INCLUDES SUPPORT FOR:</h3>
    <div className="col">
        <span>EU translations (EN, FR, IT, DE, ES)</span>
        <span>Store locator</span>
        <span>Countdown timer</span>
        <span>Color swatches</span>
        <span>Quick view</span>
        <span>See all features <a href={current.preview}>here</a></span>
    </div>
    <p className="doller">$300 USD</p>
    <div className="row w80">
        <a href={current.preview} className="w50 dbtn hm free" style={{marginLeft:"0px"}}>Try theme</a>
        <a href={current.preview} className="w50 outliner row flexAIC flexJCC">View demo store</a>
    </div>
</div>
<img className="w60 col" src={current.img}></img>

            </div>
            </>)
            :( <> <div className="row flexAIC flexJCC dbg p3" style={{ width: "94%" }}>
            <p className="heading  lfont" style={{ fontSize: "2rem" }}>{props.title}</p>
        </div>
        <div className="row w85" style={{ marginTop: "100px", flexDirection: "row-reverse" }}>
            <div className="w80 col data flexAIC">
                <h2 className='clr full'>Premium Templates </h2>
                <div className="row flexAIC full" style={{ marginTop: "10px", flexWrap: "wrap" }}>
                    {
                        arr.map((x, i) => {
                            return <div onClick={() => setCurrent(x)} className="card col w30 flexSB" style={{ textDecoration: "none", minHeight: "380px", marginLeft: "0px" }}>
                                <img src={x.img} className="full dbg" style={{ height: "160px", borderRadius: "3px" }} />
                                <div className="col full p2 flexSB">
                                    <p className="heading dfont" style={{ fontSize: "20px", marginLeft: "0px" }} >Template {i}</p>
                                    <p className="clr" style={{ fontSize: "15px", margin: "20px", marginLeft: "0px" }}>Complete payroll year end tasks efficiently.</p>
                                    <div className="row" style={{ marginTop: "40px" }}><i className="fa fa-tags dfont" aria-hidden="true"></i>&nbsp;<p className="clr" style={{ fontSize: "12px" }}>New</p> </div>
                                </div>
                            </div>
                        })

                    }
                </div>
                <div className="row flexEnd full"><button className="btn dbg" style={{ fontSize: "18px", padding: "1% 2%" }}>More...</button></div>
            </div>
            <div className="w20 col p3 upper" style={{ paddingTop: "0px" }}>
                <div className="searchbox row flexSB flexAIC p3"><input type="text" placeholder='Search' /><i class="fa fa-search" aria-hidden="true"></i></div>
                <p className="heading dfont" style={{ marginLeft: "0px", fontSize: "18px" }}>Resource Types</p>
                <p className="heading clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Blog</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Data Capture Template</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Guide</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Letter Template</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Policy Template</p>

                <p className="heading dfont" style={{ marginLeft: "0px", marginTop: "30px", fontSize: "18px" }}>Topics</p>
                <p className="heading clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Attendance</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Attendance Manegment</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Covid Vaccination</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Covid-19</p>
                <p className="heading  clr" style={{ marginLeft: "0px", fontSize: "15px" }}>Certification</p>
            </div>
        </div></>)
         }
        </>
    )
}

export default ThemePaletts