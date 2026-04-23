import "./About.css";
import { FaUserGraduate, FaCogs, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-card">

        <h2>About Me</h2>

        <p className="about-text">
          I am Ankit, a frontend developer focused on building responsive and user-friendly web interfaces. I am currently learning React and improving my skills by working on real-world projects.
        </p>

        <div className="about-grid">

          <div className="about-item">
            <FaCogs />
            <span>Focus on clean and responsive UI design</span>
          </div>

          <div className="about-item">
            <FaLaptopCode />
            <span>Building projects using HTML, CSS, and JavaScript</span>
          </div>

          <div className="about-item">
            <FaChalkboardTeacher />
            <span>Learning React and modern frontend tools  </span>
          </div>

          <div className="about-item">
            <FaUserGraduate />
            <span>Improving problem-solving through practice</span>
          </div>

        </div>

        <div className="about-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React (learning)</span>
          
        </div>

      </div>

    </section>
  );
}

export default About;