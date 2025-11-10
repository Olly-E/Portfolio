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
import rebootmonkey from '../../assets/rebootmonkey.png'
import gamified from '../../assets/gamified.png'
import nutrition4gainz from '../../assets/nutrition4gainz.png'

const data = [
  {
    id: 8,
    image: rebootmonkey,
    title: "Reboot Monkey",
    github: "",
    demo: "https://www.rebootmonkey.com/",
    description:
          "Reboot Monkey is the official website for a global data center company. It was built to improve their SEO, digital presence, and online credibility. The platform includes content management tools for blogs and location-based services.",
  },
  {
    id: 7,
    image: neurms,
    title: "Neurms",
    github: "https://github.com/OFUZORCHUKWUEMEKE/paybuymaxV2",
    demo: "https://neurms.com/",
    description:
      "Neurms is a full-featured e-commerce platform for modern businesses. It supports product listings, secure payments, and customer management. Built for scalability, it streamlines online sales with an intuitive shopping experience.",
  },
  {
    id: 1,
    image: s4j,
    title: "Scout4Job",
    github: "https://github.com/Olly-E/PaybuymaxTemp",
    demo: "http://scout4job.vercel.app",
    description:
    "Scout4Job is a recruitment platform connecting employers with qualified candidates. It uses advanced filtering and matching tools to speed up hiring. Both recruiters and job seekers benefit from its user-friendly design.",
  },
  {
    id: 10,
    image: nutrition4gainz,
    title: "Nutrition4gainz",
    github: "",
    demo: "https://nutrition4gainz.com/",
    description:
    "",
  },
  {
    id: 9,
    image: gamified,
    title: "Gamified",
    github: "https://github.com/Olly-E/Gamify",
    demo: "https://gamify-initial-setup.vercel.app",
    description:
      "Gamified is an enterprise tool for running quizzes, exams, and assessments. Admins can create, manage, and track tests across teams. It makes learning and evaluation engaging with real-time scoring and analytics.",
  },
  {
    id: 2,
    image: street_demo,
    title: "Street Demo Web",
    github: "https://github.com/Olly-E/PaybuymaxTemp",
    demo: "https://streetapp-market-git-homepage-fashmuyhee-gmailcom.vercel.app/",
    description:
      "Street Demo Web showcases how a digital marketplace can function in real-time. It demonstrates product listings, navigation flows, and checkout simulations. Perfect as a prototype for testing commerce features.",
  },
  {
    id: 3,
    image: beuaty_parlor,
    title: "Blossom Beauty",
    github: "https://github.com/Olly-E/Beauty-site",
    demo: "https://nuelbeautysite.netlify.app/",
    description:
      "Blossom Beauty is a web app for booking beauty and wellness services. It highlights offerings with elegant layouts and simple scheduling tools. Designed to help beauty businesses attract and retain clients online.",
  },
  {
    id: 4,
    image: street_business,
    title: "Street Business",
    github: "https://github.com/Olly-E/Akinlola_portfolio",
    demo: "https://street-business.vercel.app/",
    description:
      "Street Business is a platform for entrepreneurs to showcase their ventures. It provides a clean, professional space to display services and projects. Built for credibility, networking, and brand visibility.",
  },
  {
    id: 5,
    image: rebrand,
    title: "Rebrand",
    github: "https://github.com/Olly-E/Twitter-clone",
    demo: "https://rebrand-theta.vercel.app/",
    description:
      "Rebrand is a sleek corporate site for a branding and identity agency. It emphasizes clarity, style, and storytelling to attract clients. The platform demonstrates how businesses can reinvent their digital presence.",
  },
  {
    id: 6,
    image: IMG3,
    title: "Paybuymax - Fintech & Crypto",
    github: "https://github.com/OFUZORCHUKWUEMEKE/paybuymaxV2",
    demo: "https://paybuymaxtesting.netlify.app/",
    description:
      "Paybuymax is a fintech and crypto platform offering secure payments and trading. It features wallet integration, transaction management, and real-time data. Built for speed and security, it supports both traditional and digital finance.",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        {data.map(({id, image, title, github, demo,description}) => {
          return (
            <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
      </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio