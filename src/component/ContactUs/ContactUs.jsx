import "./ContactUs.scss";
// import CustomerReviews from "../CustomerReviews/CustomerReviews";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const ContactUs = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_up9l9yx', 'template_mymd2ds', form.current, 'C1fDWDuAir25UH4-l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className="contacts" id="contacts">
      <div className="overlay">
        <div className="container">
          {/*<CustomerReviews />*/}
          <div className="contact-info" id="contact-info">
            <div className="contact-title text-center">
              <h3>Contact Us</h3>
            </div>

            <div className="row">
            <div className="col-md-4">
                <ul className="contact-us list-unstyled">
                  <li>
                    <i className="fas fa-phone"></i>
                    01210250215
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>
                    <a href="mailto:aam881011@gmail.com" target="_blank">aam881011@gmail.com</a>
                    {/* aam881011@gmail.com */}
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    address : Cairo
                  </li>
                </ul>
                <hr />
                <ul className="social list-inline">
                  {/* <li className="list-inline-item">
                    <a href="/#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li> */}
                  <li className="list-inline-item">
                    <a href="/#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/profile.php?id=100013633185442"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/mohamed-dahy/"
                      target="_blank"
                    >
                      <i className="fab fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              

              <div className="col-md-8">

                <form className="contact-form row" id="contactForm" ref={form} onSubmit={sendEmail}>
                {/* <form className="contact-form row" id="contactForm" action="https://formspree.io/mohamed.d.azhry@gmail.com" method="POST"> */}
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message text or project details"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Send
                  </button>
                </form>
              </div>

             
            </div>
          </div>
          <div className="copyright">
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
