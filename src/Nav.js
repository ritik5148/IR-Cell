import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import logo from "./images/IITH Pics/output-onlinepngtools (1).png";

function Nav() {
  const [show, handleShow] = useState(false);
  const navRef = useRef();

  //transition
  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  //responsiveness
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className={`nav ${show && "nav_white"}`}>
      <div className="nav_contents">
        <img className="nav_logo" src={logo} alt="ircell logo" />
        <div>
          <ul className="nav_links" ref={navRef}>
            <li>
              <Link className="nav_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/life">
                Life At IITH
              </Link>
            </li>
            {/* <li>
              <Link classname="nav_link" to="/photo">
                Photo Gallery
              </Link>
            </li> */}
            <li>
              <Link className="nav_link" to="/admission">
                Admissions & Collaborations
              </Link>
            </li>
            {/* <li>
              <Link classname="nav_link" to="/collab">
                International Collaborations & Mobility
              </Link>
            </li> */}
            <li>
              <Link className="nav_link" to="/jica">
                JICA
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/partners">
                Our Partners
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/visa">
                Visa & Immigration
              </Link>
            </li>
            {/* <li>
              <Link classname="nav_link" to="/visit">
                Visits
              </Link>
            </li> */}
            <li>
              <Link className="nav_link" to="/download">
                Downloads
              </Link>
            </li>
            {/* <li>
              <Link classname="nav_link" to="/contact">
                Contacts
              </Link>
            </li> */}

            <li>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button className="nav-btn bars" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Nav;
