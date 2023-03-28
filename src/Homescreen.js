import React from "react";
import Nav from "./Nav";
import "./Homescreen.css";
import { useTransition, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import director from "./images/IITH Pics/director_murty.jpg";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
import video from "./images/IITH Pics/2 split.mp4";

function Homescreen() {
  const [isVisible, setIsVisible] = useState(false);

  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 50, opacity: 1 },
  });
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="homescreen">
      <Nav />
      <div className="containerVideo bg">
        <video className="video" loop autoPlay muted id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="fade--bottom" />
      <div className="messageTitle title" data-aos="slide-up">
        <h2>Director's Message</h2>
      </div>
      <div className="dean">
        <div className="deanImg" data-aos="fade-right">
          <img className="image" src={director} alt="Prof BS Murty" />
          <p className="deanName">Prof B S Murty</p>
        </div>
        <div className="deanMessage" data-aos="fade-left">
          <p>
            Founded in 2008, the Indian Institute of Technology Hyderabad (IITH)
            has established a rich tradition of excellence across a broad range
            of academic disciplines. IITH is one of India's fastest-growing,
            forward-thinking institutions among the Higher Education and
            Research institutions with an international presence. IITH is
            committed to providing high-quality education without geographical
            boundaries, bringing diversity to its student body and research
            activities. IITH creates a unique holistic ecosystem for education
            that offers interactive learning, a very flexible academic
            structure, cutting-edge research, strong industry collaboration, and
            entrepreneurship. IITH has a very vibrant innovation eco-system and
            passionately follows its philosophy, Inventing and Innovating in
            Technology for Humanity (IITH). Our vision finds us in an academic
            and professional world without boundaries. We are forming strategic
            partnerships around the world to attain our goals of
            Internationalisation.
            <br />
            <br />
            IITH enjoys a very special relationship with Japanese universities
            and industries that goes beyond academics and research
            collaborations. We are also interested to initiate bilateral
            partnerships with Universities and Research organisations of repute,
            which will benefit both students and the faculty community.
          </p>
        </div>
      </div>
      <hr />
      <div className="messageTitle title" data-aos="slide-up">
        <h2>IITH Campus Tour Video</h2>
      </div>
      <div className="video1" data-aos="fade-up">
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/HuVWObq1WK8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Homescreen;
