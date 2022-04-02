import './experience.css';
import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontened">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
              <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Photoshop</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Coreldraw</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
