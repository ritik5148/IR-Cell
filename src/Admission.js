import React, { useEffect, useState } from "react";
import { animated } from "@react-spring/web";
import { useTransition } from "@react-spring/web";
import { Link } from "react-router-dom";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import "./Admissions.css";
import Nav from "./Nav";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function Admission() {
  const [isVisible, setIsVisible] = useState(false);

  //Admissions
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
      <div className="containerAd bg">
        <div className="cardOverlay">
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="itemAd">
                <h1>Admissions & Collaborations</h1>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="fade--bottom" />
      <div className="adTitle title" data-aos="fade-up">
        <h2>International Admission</h2>
      </div>
      {/* <div className="fade--up" />
      <div className="fade--bottom1" /> */}
      <div class="adLinks" data-aos="fade-right">
        <Link className="linkTag" to="/first">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            Fellowship for International Research Scholars in Technology at IIT
            Hyderabad (FIRST@IITH)
          </h4>
        </Link>
        <Link className="linkTag" to="/deakin">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            IITH-DEAKIN JOINT DOCTORAL PROGRAM (JDP)
          </h4>
        </Link>
        <Link className="linkTag" to="/sut">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            IITH-SUT Joint Doctoral Program (JDP) - 2023
          </h4>
        </Link>
        <Link className="linkTag" to="/asean">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            Doctoral fellowship in India for ASEAN
          </h4>
        </Link>
        <Link className="linkTag" to="/iccr">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            Indian Council for Cultural Relations (ICCR)
          </h4>
        </Link>
        <Link className="linkTag" to="/sii">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            Study in India (SII)
          </h4>
        </Link>
        {/* <Link to="/first">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            Fellowship for International Research Scholars in Technology at IIT
            Hyderabad (FIRST@IITH)
          </h4>
        </Link> */}
      </div>
      <hr />
      <div className="adTitle title" data-aos="fade-up">
        <h2>International Collaborations & Mobility</h2>
      </div>
      <div className="adLinks" data-aos="fade-right">
        <Link className="linkTag" to="/internationalStudents">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            International Students
          </h4>
        </Link>
        <Link className="linkTag" to="/iithStudents">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            IITH Students
          </h4>
        </Link>
        <Link className="linkTag" to="/internationalFaculty">
          <h4 className="link">
            <VscDebugBreakpointLogUnverified />
            International Faculty
          </h4>
        </Link>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Admission;
