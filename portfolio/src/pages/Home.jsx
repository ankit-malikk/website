import "./Home.css";
import { FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode,
  FaBrain,
  FaCogs,
  FaTrophy } from "react-icons/fa";
import profile from "../assets/images/ankit.jpeg";

function Home() {
  return (
    <section className="home">

      {/* HERO CARD */}
      <div className="home-card">
        <img className="profile-img" src={profile} alt="Profile" />

        <h1>Ankit</h1>
        <h3>Frontend Developer</h3>

        <p className="tagline">
          Learning frontend development and building responsive web projects using HTML, CSS, JavaScript, and React.
        </p>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="experience-section">

        <h2 className="section-title">Teaching & Training Experience</h2>

        <div className="cards-grid">

          <div className="exp-card">
            <h3>
              <FaChalkboardTeacher style={{ marginRight: "8px" }} />
              Role
            </h3>
            <p>Aspiring Frontend Developer | B.Tech Student</p>
          </div>

          <div className="exp-card">
            <h3>
              <FaLaptopCode style={{ marginRight: "8px" }} />
              Practical Training
            </h3>
            <ul>
              <li>HTML, CSS, JavaScript fundamentals  </li>
              <li>Responsive Web Design  </li>
              <li>React basics (components, props, state) </li>
              <li>Git & GitHub version control  </li>
              <li>Basic API integration (fetch/axios)</li>
            </ul>
          </div>

          <div className="exp-card highlight">
            <h3>
              <FaTrophy style={{ marginRight: "8px" }} />
              Impact
            </h3>
            <br/>
            <p>
             Consistently building projects and improving frontend skills with a focus on writing clean, maintainable code.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;