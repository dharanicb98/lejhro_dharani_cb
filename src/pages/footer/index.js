import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Company</h5>
            <ul>
              <li>Innovations</li>
              <li>Business Services</li>
              <li>Financial Services</li>
              <li>Lejhro Recruiter</li>
              <li>About</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Programs</h5>
            <ul>
              <li>Lejhro Bootcamp</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Support</h5>
            <ul>
              <li>Contact</li>
              <li>Terms of Use</li>
              <li>Privacy Statement</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect with us</h5>
            <ul className="social-icons">
              <li>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>© 2024 LEJHRO. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
