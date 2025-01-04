import './about.css'
import React, {useRef} from 'react'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc';
import {motion} from 'framer-motion';
import { cardAnimation1, cardAnimation2, cardAnimation3, cardTextAnimation, cardTextBAnimation, meImgAnimation, nameAnimation1b, nameAnimation2b } from '../Animation';


const About = () => {

  return (
    <section id="about" >
      <motion.h5
        variants={nameAnimation1b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >Get to know</motion.h5>
      <motion.h2
        variants={nameAnimation2b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >About Me</motion.h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <motion.img src={ME} alt="about image" 
              variants={meImgAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            />
          </div>
        </div>
        
        <div className="about__content">
        <div className="about__cards">
          <motion.article className="about__card"
            variants={cardAnimation1}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
          >
            <FaAward className="about__icons" />
            <h5>Experience</h5>
            <small>5+ Years Working</small>
          </motion.article>
          <motion.article className="about__card"
            variants={cardAnimation2}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
          >
            <FiUsers className="about__icons" />
            <h5>Clients</h5>
            <small>40+ Nationwide</small>
          </motion.article>
          <motion.article className="about__card"
            variants={cardAnimation3}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
          >
            <VscFolderLibrary className="about__icons" />
            <h5>Projects</h5>
            <small>45+ completed Projects</small>
          </motion.article>
        </div>
        <motion.p
          variants={cardTextAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
Driven by a genuine passion for design and a knack for solving complex problems, I am a front-end and mobile app engineer dedicated to bringing ideas to life. Over the years, I've specialized in building responsive websites and web applications for businesses of all sizes. I focus on crafting eye-catching user interfaces combined with seamless functionality to create digital experiences that truly engage users. By tackling unique challenges, I strive to deliver solutions that help businesses stand out in a competitive market.        </motion.p>

        <motion.a href="#contact" className='btn btn-primary'
          variants={cardTextBAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >Let's talk</motion.a>
        </div>
      </div>
    </section>
  )
}

export default About