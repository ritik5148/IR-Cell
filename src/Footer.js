import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div className="row1">
          <div className="text" data-aos="fade-right">
            <h2 className="font">International Relation Cell</h2>
            <p data-aos="fade-right">
              The International Relations Cell (IRC) is a student body working
              along with the Office of International Relations (OIR). It works
              to promote the exchange of students, faculties, and ideas between
              IIT Hyderabad and her international partners and establishing the
              globalization of IIT Hyderabad.
            </p>
          </div>
          <div className="quickLinks" data-aos="fade-right">
            <h2 className="font">Quick Links</h2>
            <div data-aos="fade-right">
              <h4>
                <a
                  href="https://iith.ac.in/"
                  className="nameLink"
                  data-aos="fade-up"
                >
                  IITH
                </a>
                <h4>
                  <Link className="nameLink" to="/jica">
                    JICA
                  </Link>
                </h4>

                <h4>
                  <Link className="nameLink" to="/admission">
                    International Admission
                  </Link>
                </h4>

                <h4>
                  <Link className="nameLink" to="/download">
                    Downloads
                  </Link>
                </h4>
              </h4>
            </div>
          </div>
          <div className="contact" data-aos="fade-right">
            <h2 className="font">Contact Us</h2>
            <a
              className="nav_link"
              href="mailto:dean.ir@iith.ac.in"
              data-aos="fade-right"
            >
              dean.ir@iith.ac.in
            </a>
          </div>
        </div>
        <div className="row2" data-aos="fade-up">
          <p>
            © 2022 Indian Institute of Technology Hyderabad, Kandi, Sangareddy,
            Telangana, India. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
