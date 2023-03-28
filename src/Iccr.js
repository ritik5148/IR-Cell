import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function Iccr() {
  return (
    <div>
      <div className="fade--bottom" />
      <div className="firstTitle title" data-aos="fade-up">
        <h2>Indian Coucil for Cultural Relations(ICCR)</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>About the Program</h3>
        <p className="libPara" data-aos="fade-right">
          India is well known as an education hub attracting international
          students from all over the world. India’s robust education system, in
          the backdrop of its rich diversity and vibrant culture & history,
          affords a broad range of options for students. And as a rapidly
          growing country with a leading technological edge, studying in India
          has much to offer, whether it is Engineering, Computers, Arts,
          Philosophy, Political Sciences or Classics etc. Indian Council for
          Cultural Relations administers various scholarship programs annually
          and awards about 3000+ scholarships under 21 different schemes to
          foreign students from about 180 countries. Amongst these 21 schemes,
          six are funded by ICCR from its grant and others are administered on
          behalf of MEA and Ministry of Ayush. The courses offered for studies
          are for Under-graduation, Post-graduation and Ph.D. levels. Each
          academic year, ICCR has about 6000+ of its foreign scholars who are
          studying at various Central/State Universities, Institutes, NITs, and
          Agricultural Institutions etc.
          <br />
          <br />
          In a step forward towards “Digital India” ICCR developed the
          “Admissions to Alumni (A2A) Portal" to streamline the enrolment
          process. The portal was launched on January 17, 2018 by then Honorable
          External Affairs Minister Late Smt. Sushma Swaraj. With the
          introduction of the portal from the academic year 2018-19 onwards,
          ICCR Scholarship programs are not only digitized but also have become
          an effortless exercise. The portal contains all relevant information
          regarding ICCR sponsored scholarship schemes and other information
          like names of the Indian Universities, courses offered by them and
          guidelines of scholarship schemes etc.
          <br />
          <br />
          Website:
          <a className="nav_link" href="http://a2ascholarships.iccr.gov.in">
            http://a2ascholarships.iccr.gov.in
          </a>
        </p>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Eligibility</h3>
        <ul className="vList">
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            Students from ASEAN countries can apply online through the ASEAN DIA
            portal for PhD programs.
          </li>
          <li className="list" data-aos="fade-right">
            <VscDebugBreakpointLogUnverified />
            Admission into IIT Hyderabad is as per IITH rules and regulations.
          </li>
        </ul>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Application Procedure</h3>
        <p className="libPara" data-aos="fade-right">
          Candidates desirous of admission under this Fellowship Programme are
          required to apply through the ICCR A2A portal through the link below{" "}
          <br />
          <a className="nav_link" href="http://a2ascholarships.iccr.gov.in">
            http://a2ascholarships.iccr.gov.in
          </a>
        </p>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Funding Details</h3>
        <ul className="vList">
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            Selected applicants are required to pay the fee as per Institute
            norms.
          </li>
        </ul>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Application Deadline</h3>
        <ul className="vList">
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            <a className="nav_link" href="http://a2ascholarships.iccr.gov.in">
              http://a2ascholarships.iccr.gov.in
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Iccr;
