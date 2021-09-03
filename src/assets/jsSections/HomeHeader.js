import React from 'react'
import '../cssSections/homeheader.css'
import video from './video/video2.mp4'
import { motion } from 'framer-motion';
import Typical from 'react-typical'
import { AiFillFacebook,AiFillInstagram,AiFillYoutube,AiFillTwitterCircle } from 'react-icons/ai';
function HomeHeader() {

    return (
        <div className='hero-container'>
        <video src={video} autoPlay loop muted />
        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5}}
        >"One team, <span>one heart"</span></motion.h1>
        <p>( February 2023,
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            ' which is temptative for now',
            1000,
            'which is temptative for now',
            1000
          ]}
        /> 
        )</p>
        <div className="hero-social">
          <ul>
          <li><a className="social-iconss" onClick={()=> window.open("https://www.google.com/", "_blank")}><AiFillFacebook className='fac' size="60"/></a></li>
          <li><a  className="social-iconss" onClick={()=> window.open("https://www.google.com/", "_blank")}><AiFillInstagram className="ins" size="60"/></a></li>
          <li><a  className="social-iconss" onClick={()=> window.open("https://www.google.com/", "_blank")}><AiFillYoutube className="you" size="60"/></a></li>
          <li><a  className="social-iconss" onClick={()=> window.open("https://www.google.com/", "_blank")}><AiFillTwitterCircle className="twi" size="60"/></a></li>
          </ul>
        </div>
      </div>
    )
}

export default HomeHeader
