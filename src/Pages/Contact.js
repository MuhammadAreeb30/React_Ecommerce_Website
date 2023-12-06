import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="common-heading">Feel Free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115839.070346581!2d66.9283309!3d24.8648418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1701365598429!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mqkvvwbw"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              placeholder="Message..."
              required
              autoComplete="off"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
