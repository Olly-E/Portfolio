import React from 'react';
import './portfolio.css';
import street_business from '../../assets/street_business.png';
import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';
import rebrand from '../../assets/rebrand.png';
import s4j from '../../assets/s4j.png'
import street_demo from '../../assets/street_demo.png';
import beuaty_parlor from '../../assets/beuaty_parlor.jpg'
import neurms from '../../assets/neurms.png'

const data = [
  {
    id: 1,
    image: s4j,
    title: "Scout4Job",
    github: "https://github.com/Olly-E/PaybuymaxTemp",
    demo: "http://www.scout4job.com/",
  },
  {
    id: 2,
    image: street_demo,
    title: "Street Demo web",
    github: "https://github.com/Olly-E/PaybuymaxTemp",
    demo: "https://streetapp-market-git-homepage-fashmuyhee-gmailcom.vercel.app/",
  },
  {
    id: 3,
    image: beuaty_parlor,
    title: "Blossom beauty site for all beauty services",
    github: "https://github.com/Olly-E/Beauty-site",
    demo: "https://nuelbeautysite.netlify.app/",
  },
  {
    id: 4,
    image: street_business,
    title: "Street Business",
    github: "https://github.com/Olly-E/Akinlola_portfolio",
    demo: "https://street-business.vercel.app/",
  },
  {
    id: 5,
    image: rebrand,
    title: "Rebrand",
    github: "https://github.com/Olly-E/Twitter-clone",
    demo: "https://rebrand-theta.vercel.app/",
  },
  {
    id: 6,
    image: IMG3,
    title: "Paybuymax - Fintech and Crypto web app",
    github: "https://github.com/OFUZORCHUKWUEMEKE/paybuymaxV2",
    demo: "https://paybuymaxtesting.netlify.app/",
  },
  {
    id: 6,
    image: neurms,
    title: "Neurms",
    github: "https://github.com/OFUZORCHUKWUEMEKE/paybuymaxV2",
    demo: "https://neurms.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio