import React from 'react'
import './service.css';
import {BsCheck2} from 'react-icons/bs';
import { ExpTextBAnimation1, ExpTextBAnimation2, ExpTextBAnimation3, ExpTextBAnimation4, ExpTextBAnimation5, ExpTextBAnimation6, nameAnimation1b, nameAnimation2b, serviceAnimation } from '../Animation';
import {motion} from 'framer-motion';

const Service = () => {
  return (
    <section id="services">
      <motion.h5
        variants={nameAnimation1b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >What I offer</motion.h5>
      <motion.h2
        variants={nameAnimation2b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >Services</motion.h2>
      <div className="container services__container">
        <motion.article className="service"
          variants={serviceAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          <div className="service__head">
            <motion.h3
              variants={serviceAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >Web Development</motion.h3>
          </div>

          <ul className="service__list">
            <motion.li
              variants={ExpTextBAnimation1}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Crafts Tailored Solutions: Adept at analyzing unique client challenges and delivering custom, high-performance web applications that meet exact needs.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation2}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Responsive Design: Creates seamless experiences across all devices.
              </p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation3}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Robust Functionality: Combines sleek design with reliable performance.
              </p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation4}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Problem Solver: Excels at debugging and optimizing complex systems.
              </p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Continuous Learner: Stays ahead with the latest tools and technologies.
              </p>
            </motion.li>
            <motion.li
              variants={ExpTextBAnimation6}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Collaborative: Works closely with teams to deliver on creative visions.
              </p>
            </motion.li>
            <motion.li
              variants={ExpTextBAnimation6}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Results-Driven: Aligns development with clear business goals.

              </p>
            </motion.li>
            <motion.li
              variants={ExpTextBAnimation6}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Purposeful Code: Transforms ideas into impactful digital solutions.


              </p>
            </motion.li>
          </ul>
        </motion.article>
        {/* ui ux */}
        <motion.article className="service"
          variants={ExpTextBAnimation1}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          <div className="service__head">
            <motion.h3
              variants={serviceAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >Mobile App Development</motion.h3>
          </div>

          <ul className="service__list">
            <motion.li
              variants={ExpTextBAnimation1}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Intuitive Experiences: Crafts mobile apps with smooth, user-friendly interactions.
              </p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation2}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Performance-Driven: Optimizes apps for speed, stability, and battery efficiency.
              </p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation3}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Platform Expertise: Delivers high-quality solutions for both iOS and Android.
              </p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation4}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Creative Problem Solver: Tackles unique challenges with innovative app features.
              </p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Future-Ready Development: Builds scalable apps that grow with user demands.
              </p>
            </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Native-Like Design: Ensures apps feel seamless and natural on any platform.

              </p>
            </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Continuous Innovation: Integrates the latest trends and technologies in mobile.
              </p>
            </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>User-Centric Approach: Focuses on delivering value and delight to end users.
              </p>
            </motion.li>
          </ul>
        </motion.article>
        {/*  content creation*/}
        {/* <articles className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </articles> */}
        </div>
    </section>
  )
}

export default Service