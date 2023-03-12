import React from "react";
import "./Footer.css";
import insta from "./components/insta.png"
import facebook from "./components/facebook.png"
import twitter from "./components/twitter.png"

function Footer() {
  return (
    <section id="footer">
    <div className="main-footer">
        <div className="footer_contents">
          {/* Column1 */}
          <div className="col_one">
            <h1 className="footer_title">PustakHub</h1>
          </div>
          {/* Column2 */}
          <div className="col_two">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>+977-9811112390</li>
              <li>contact@pustakhub.com</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col_three">
            <h4>Follow Us</h4>
              <div className="footer_img">
              <img className="fot_img" src={insta}></img>
              <img className="fot_img" src={facebook}></img>
              <img className="fot_img"src={twitter}></img>
              </div>
          </div>
          </div>
    <hr/>
        <div className="footer_end">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PustakHub | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
      </section>
  );
}

export default Footer;