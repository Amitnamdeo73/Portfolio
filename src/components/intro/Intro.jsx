/* eslint-disable no-undef */
import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, {  useEffect,useRef } from 'react'
import { init } from 'ityped'

export default function Intro() {

  const textRef= useRef();
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: false,
      backSpeed:  70,
      backDelay:  1500,

      strings: ["Full Stack Developer","Database Administrator","Web Developer","Software Developer" ] });
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/pngmen (2).png" alt=""  />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Amit Namdeo</h1>
          <h3><span ref={textRef}></span></h3>
         
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrow"/>
        </a>
      </div>
    </div>
  )
}
