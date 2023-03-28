import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
import one from "./images/testinomials/khinChoWin.jpg";
import two from "./images/testinomials/toniRegis.jpg";

function Asean() {
  return (
    <div>
      <div className="fade--bottom" />
      <div className="firstTitle title" data-aos="fade-up">
        <h2>Doctoral Fellowship in India for AEAN</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>About the Program</h3>
        <p className="libPara" data-aos="fade-right">
          The internationally renowned Institutions in technical education, the
          Indian Institutes of Technology (IITs) are inviting scholars from
          ASEAN countries to apply for PhD fellowships to strengthen the deep
          and historical relations between India and ASEAN.
          <br />
          <br />
          The institution thrives for its quality education and strict selection
          criteria. When selected, you will be able to complete your Ph.D. with
          funding from the Government of India. The funding includes a monthly
          stipend and an annual research grant for up to 5 years of their Ph.D.
          program.
          <br />
          <br />
          Website:
          <a className="nav_link" href=" https://asean-iit.in/">
            https://asean-iit.in/
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
          required to apply through the ICCR A2A portal through the link below
          <br />
          <a
            className="nav_link"
            href=" https://ecampus.iitd.ac.in/ASEAN/login"
          >
            https://ecampus.iitd.ac.in/ASEAN/login
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
            <a
              className="nav_link"
              href=" https://ecampus.iitd.ac.in/ASEAN/login"
            >
              https://ecampus.iitd.ac.in/ASEAN/login
            </a>
          </li>
        </ul>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>FAQ</h3>
        <ul className="vList">
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            <a
              className="nav_link"
              href=" https://ecampus.iitd.ac.in/ASEAN/login"
            >
              https://ecampus.iitd.ac.in/ASEAN/login
            </a>
          </li>
        </ul>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Testimonials</h3>
        <div style={{ textAlign: "center" }}>
          <img
            src={one}
            style={{ borderRadius: "100%", height: "200px", width: "200px" }}
          />
          <p className="paragraphs">
            Ms. Khin Cho win (ai20resch16001), ASEAN Fellowship scholar
          </p>
        </div>

        <p className="libPara" data-aos="fade-right">
          Hi, I am Khin cho win from Myanmar, PhD scholar at IITH. I realize
          that IITH is not only a good research environment but also a good
          learning environment that can be explored. Since the faculty, staff,
          and friends are very understanding and supportive of me all the time,
          I did not feel the culture shock and enjoyed the diversity of the
          Indian culture. In addition, the learning resources are very helpful
          to me. I am very lucky to have a chance for studying at IITH.
        </p>
        <div style={{ textAlign: "center" }}>
          <img src={two} style={{ borderRadius: "100%" }} />
          <p className="paragraphs">
            Mr. Toni Regis (cc21resch16001), ASEAN Fellowship scholar
          </p>
        </div>

        <p className="libPara" data-aos="fade-right">
          Hi, Toni Regis from Philppines, PhD scholar at IITH. IITH has been my
          home away from home, providing a diverse experience of education,
          culture, and opportunities to further my profession and career. The
          institution has also provided a safe and healthy environment for
          learning, innovating, and networking.{" "}
        </p>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Asean;
