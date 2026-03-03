import "../styles/Home.css";
import useScrollReveal from "../hooks/useScrollReveal";
import { FaBullhorn, FaCode, FaChartLine } from "react-icons/fa";
import heroBg from "../assets/hero-bg1.png";

function Home() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
  <section
  className="hero reveal"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
>
  <div className="hero-overlay"></div>

  <div className="container hero-content">
    <div className="hero-text">
      <h1 className="reveal-item">
        Digital Growth Powered by
        <span> Creative Intelligence</span>
      </h1>

      <p className="reveal-item">
        We craft data-driven strategies, innovative design,
        and scalable technology solutions that elevate brands.
      </p>

      <div className="hero-buttons reveal-item">
        <button className="primary-btn">Call Us</button>
        <button className="secondary-btn">View Work</button>
      </div>
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section className="about reveal">
        <div className="container">
          <h2 className="reveal-item">About Us</h2>

          <p className="reveal-item about-text">
            We are a bold creative digital studio combining strategy,
            marketing and technology to build unforgettable brands.
          </p>

          <div className="about-stats">
            <div className="stat reveal-item">
              <h3>120+</h3>
              <p>Projects</p>
            </div>
            <div className="stat reveal-item">
              <h3>80+</h3>
              <p>Clients</p>
            </div>
            <div className="stat reveal-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services reveal">
        <div className="container">
          <h2 className="reveal-item">Our Services</h2>

          <div className="services-grid">
            <div className="service-card reveal-item">
              <FaBullhorn className="service-icon" />
              <h4>Digital Marketing</h4>
              <p>Performance campaigns that drive measurable growth.</p>
            </div>

            <div className="service-card reveal-item">
              <FaCode className="service-icon" />
              <h4>Web Development</h4>
              <p>Modern, scalable and conversion-focused websites.</p>
            </div>

            <div className="service-card reveal-item">
              <FaChartLine className="service-icon" />
              <h4>Brand Strategy</h4>
              <p>Strong positioning that makes brands unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact reveal">
        <div className="container">
          <h2 className="reveal-item">Let’s Work Together</h2>

          <p className="reveal-item contact-text">
            Have a project in mind? Let’s create something extraordinary.
          </p>

          <div className="reveal-item">
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;