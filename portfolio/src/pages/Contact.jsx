import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-card">

        <h2>Contact Me</h2>

        <div className="contact-item">
          <FaEnvelope />
          <span>ankitmalik4478@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaPhone />
          <span>+91-8569952810</span>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/in/mr-ankit-27b876334/" target="_blank" className="social-btn">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://github.com/ankit-malikk" target="_blank" className="social-btn">
            <FaGithub /> GitHub
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;