
import "./works.scss"
import WebIcon from '@mui/icons-material/Web';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
export default function Works() {
   const [currentslide,setcurrentslide]=useState(0);
   const data =[
   {
    id: "1",
    icon:<WebIcon/>,
    title:"Portfolio",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod deleniti consequatu  ",
    img:"assets/1stp.webp",
    link:""

   } ,
   {
    id: "2",
    icon:<WebIcon/>,
    title:"Snake-Game",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod deleniti consequatur  ",
    img:"assets/snake.webp",
    link:"https://snakegameplayfree.netlify.app/"
   },
   ];
    
   const handleClick=(way)=>{
    way === "Left" ? setcurrentslide(currentslide > 0 ? currentslide :1):
    setcurrentslide(currentslide<data.length-1 ?currentslide+1 : 0);
   }

  return (
    <div className="works" id="works">
     <div className="slider" style={{transform: `translateX(-${currentslide * 100}vw)`}}>
      {data.map(d=>(
      <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftcontainer">
              <div className="imgcontainer">
                {d.icon}
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc} 
              </p>
              <span><a href={d.link}>Project</a></span>
               
            </div>
          </div>
          <div className="right">
            <img src={d.img} alt="" />
          </div>
        </div>
        
      </div>
      ))}
      </div> 
     
      <ArrowBackIosIcon className="leftarrow" onClick={()=>handleClick("left")} />
      <ArrowForwardIosIcon className="rightarrow" onClick={()=>handleClick()}/>
    </div>
  )
}
