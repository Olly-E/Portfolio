import './contact.css';
import {MdOutlineMail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>akinsnuel@gmail.com</h5>
            <a href="mailto:akinsnuel@gmail.com">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact
