import "../styles/Services.css";

function Services() {
  return (
    <div className="services-section container">
      <h1>Our Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>
            Improve your search engine rankings and drive
            consistent organic traffic.
          </p>
        </div>

        <div className="service-card">
          <h3>Social Media Marketing</h3>
          <p>
            Build brand awareness and engage your audience
            across all platforms.
          </p>
        </div>

        <div className="service-card">
          <h3>Paid Advertising</h3>
          <p>
            Maximize ROI with targeted Google and Meta ad campaigns.
          </p>
        </div>

        <div className="service-card">
          <h3>Content Marketing</h3>
          <p>
            High-quality content strategies that convert visitors
            into customers.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;