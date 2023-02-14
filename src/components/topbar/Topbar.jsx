import "./topbar.scss"
import {Person,Mail} from "@mui/icons-material"

export default function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
       <div className="left">
         <a href="#intro" className="logo">Portfolio.</a>
          <div className="itemcontainer">
           <Person className="icon"/>
           <span>+919399622367</span>
          </div>
          <div className="itemcontainer">
           <Mail className="icon"/>
            <span>amit.snamdeo73@gmail.com</span>
          </div>
        
       </div>
      
      <div className="right">
        <div className="humbulger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
     </div> 
    </div>
  )
}
