import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-section container">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Message</label>
        <textarea rows="4" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;