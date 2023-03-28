import React from "react";
import Nav from "./Nav";
import { useTransition, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import "./Downloads.css";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function Downloads() {
  const [isVisible, setIsVisible] = useState(false);

  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 50, opacity: 1 },
  });
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div>
      <Nav />
      <div className="containerDownload bg">
        <div className="cardOverlay">
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="itemLife">
                <h1>Downloads</h1>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="fade--bottom" />
      <div className="visTitle title" data-aos="fade-up">
        <h2>PDFs</h2>
      </div>
      <div className="adLinks lin">
        <div>
          <h4 className="link">
            <a
              href="/downloads/Flyer IITH.pdf"
              className=" nav_link "
              download="Flyer IITH"
              data-aos="fade-up"
            >
              <VscDebugBreakpointLogUnverified />
              Click here to download IITH Flyer
            </a>
          </h4>
          <h4 className="link">
            <a
              href="/downloads/IITH Factsheet.pdf"
              className="nav_link"
              download="IITH Factsheet"
              data-aos="fade-up"
            >
              <VscDebugBreakpointLogUnverified />
              Click here to download IITH Factsheet
            </a>
          </h4>
          <h4 className="link">
            <a
              href="/downloads/IIT Hyderabad Brochure.pdf"
              className=" nav_link"
              download="IITH Brochure"
              data-aos="fade-up"
            >
              <VscDebugBreakpointLogUnverified />
              Click here to download IITH Brouchure
            </a>
          </h4>
        </div>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Downloads;
