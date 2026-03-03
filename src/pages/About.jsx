import "../styles/About.css";

function About() {
  return (
    <div className="about-section container">
      <div className="about-content">

        <div className="about-text">
          <h1>About Our Agency</h1>
          <p>
            We are a results-driven digital marketing agency helping
            startups and businesses increase visibility, traffic,
            and revenue through modern marketing strategies.
          </p>
          <p>
            Our mission is simple — deliver measurable growth and
            maximize ROI for every client we work with.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h2>150+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-box">
            <h2>98%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div className="stat-box">
            <h2>5+ Years</h2>
            <p>Experience</p>
          </div>

          <div className="stat-box">
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;