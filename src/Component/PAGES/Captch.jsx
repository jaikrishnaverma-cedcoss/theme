import ReCAPTCHA from "react-google-recaptcha";
 import React from 'react'
 
 const Captch = (props) => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
   return (
    <ReCAPTCHA
    ref={props.recaptchaRef}

    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    secretkey="6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
  
  />
   )
 }
 
 export default Captch

