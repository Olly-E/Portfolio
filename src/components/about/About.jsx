import './about.css'
import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        
        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icons" />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icons" />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icons" />
            <h5>Projects</h5>
            <small>80+ completed Projects</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis vero quibusdam asperiores a beatae earum odio ipsam, placeat soluta facilis, porro ducimus. Vitae laborum delectus nisi similique quis magni fugit!
        </p>

        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About