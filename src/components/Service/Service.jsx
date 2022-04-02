import React from 'react'
import './service.css';
import {BsCheck2} from 'react-icons/bs';

const Service = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <articles className="service">
          <div className="service__head">
            <h3>Web Development</h3>
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
        </articles>
        {/* ui ux */}
        <articles className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
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
        </articles>
        {/*  content creation*/}
        <articles className="service">
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
        </articles>
        </div>
    </section>
  )
}

export default Service