import React from "react";

function Footer() {
  return (
    <footer className="netflix-footer">
      <p>
        Read about Netflix TV shows and movies and watch bonus videos on
        Tudum.com.
      </p>
      <p>Questions Contact us.</p>
      <div className="footer-links">
        <div className="footer-column">
          <a href="#faq">FAQ</a>
          <a href="#investor-relations">Investor Relations</a>
          <a href="#privacy">Privacy</a>
          <a href="#speed-test">Speed Test</a>
        </div>
        <div className="footer-column">
          <a href="#help-centre">Help Centre</a>
          <a href="#jobs">Jobs</a>
          <a href="#cookie-preferences">Cookie Preferences</a>
          <a href="#legal-notices">Legal Notices</a>
        </div>
        <div className="footer-column">
          <a href="#account">Account</a>
          <a href="#ways-to-watch">Ways to Watch</a>
          <a href="#corporate-information">Corporate Information</a>
          <a href="#only-on-netflix">Only on Netflix</a>
        </div>
        <div className="footer-column">
          <a href="#media-centre">Media Centre</a>
          <a href="#terms-of-use">Terms of Use</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
      <div className="language-selector">
        <select>
          <option value="en">English</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
