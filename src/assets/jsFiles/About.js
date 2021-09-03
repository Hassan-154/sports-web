import React from 'react'
import '../cssFiles/about.css'
import AboutTeam from '../jsSections/AboutTeam'
import { motion } from 'framer-motion';
function About() {

    return (
        <div className="page__about">
        <div classNam="about">
          <div className="about__header">
          <div className="about__header__img"></div>
          <div className="about__content">
          <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5}}
        >EVERLASTING PEACE</motion.h1>
            <p>We offer you & your family the personal service, peace of mind & pleasant memories you deserve in your time of need.</p>
            <button>Learn more</button>
          </div>
          </div>
        </div>
        <AboutTeam/>
        </div>
    )
}

export default About
