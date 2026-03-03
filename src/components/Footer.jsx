import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container footer-content">
        
        {/* About */}
        <div>
          <h2>YogShiv Agency</h2>
          <p>
            We help brands grow digitally through strategic marketing,
            SEO, paid ads, and content marketing.
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/services")}>Services</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>
          <p>ysamriya4774@gmail.com</p>
          <p>+91 9782792443</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} YogShiv Agency. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;