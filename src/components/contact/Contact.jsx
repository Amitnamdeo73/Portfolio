import { useState } from "react";
import "./contact.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Contact() {
  const [message,setmessage]=useState(false)
  const handlesubmit = (e)=>{
  e.preventDefault();
  setmessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="contain">
      <div className="left">
        <img src="assets/hand.png" alt="" />
      </div>
       <div className="right">
         <h2>Contact.</h2>
         <form onSubmit={handlesubmit}>
           <input type="text" placeholder="Email"/>
           <textarea placeholder="Message" ></textarea>
           <button type="submit">Send</button>
           {message && <span>Thanks, I'll reply ASAP :) </span> }
         </form>
      </div>
      </div>
      <div className="ides">
        <a href="https://github.com/Amitnamdeo73" ><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/amit-namdeo-0494911b1/"><LinkedInIcon/></a>
        <a href="https://twitter.com/AmitSnamdeo73"><TwitterIcon/></a>
        <a href="https://www.instagram.com/mr_amit_namdeo/"><InstagramIcon/></a>
      </div>
     <hr />
     <div className="copyright">
      <span>Copyright 2023 | All Right Reserved.</span>
        
      <span>  This Website is Designed & Developed by AmitNamdeo73 </span>
     
     </div>
    </div>
  )
}
