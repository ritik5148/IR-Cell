import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
import one from "./images/testinomials/kamalShrestha.jpg";

function Sii() {
  return (
    <div>
      <div className="fade--bottom" />
      <div className="firstTitle title" data-aos="fade-up">
        <h2>Study In India(SII)</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>About the Program</h3>
        <p className="libPara" data-aos="fade-right">
          The Study In India (SII) programme is a flagship project introduced by
          the Ministry of Education (MoE), Government of India. The Study in
          India portal (www.studyinindia.gov.in) was jointly launched on 18th
          April 2018 by the former Minister of Union External Affairs, Late Smt.
          Sushma Swaraj and former Minister of State for HRD, Dr Satya Pal Singh
          at the India Habitat Centre in New Delhi. The Study in India programme
          seeks to endorse India as a prime education hub for international
          students by inviting them to pursue their higher education in the
          country. With an attractive set of salient features, the programme is
          the perfect platform for international students to experience the best
          of what Indian education has to offer. Therefore, it encourages
          international students to explore valuable educational opportunities
          enabled by the top Indian universities.
          <br />
          <br />
          The added advantage of the Study in India Programme is quality
          assurance wherein it partners up with institutes/universities in
          India.
          <br />
          <br />
          Website:
          <a className="nav_link" href="https://studyinindia.gov.in/">
            https://studyinindia.gov.in/
          </a>
        </p>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Eligibility</h3>
        <ul className="vList">
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            The eligibility criterion and qualification are as per IIT Hyderabad
            rules and regulations.
          </li>
          <li className="list" data-aos="fade-right">
            <VscDebugBreakpointLogUnverified />
            The medium of instruction across all courses would be English. The
            candidates applying for the courses at IIT Hyderabad are supposed to
            have reading, writing and speaking skills of English language.
          </li>
        </ul>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Application Procedure</h3>
        <p className="libPara" data-aos="fade-right">
          Visit the Study in India portal to apply for the programs through the
          link below.
          <br />
          <a
            className="nav_link"
            href="https://www.studyinindia.gov.in/eligibility-requirement-to-study-in-india-"
          >
            https://www.studyinindia.gov.in/eligibility-requirement-to-study-in-india-
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
              href="https://www.studyinindia.gov.in/admission/registrations"
            >
              https://www.studyinindia.gov.in/admission/registrations
            </a>
          </li>
        </ul>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Testimonials</h3>
        <div style={{ textAlign: "center" }}>
          <img src={one} style={{ borderRadius: "100%" }} />
          <p className="paragraphs">
            Mr. Kamal Shrestha (cs21mtech16001), Mtech, SII (Edcil) Fellowship
          </p>
        </div>

        <p className="libPara" data-aos="fade-right">
          Hello, This is Kamal from Nepal, M.Tech student at IITH. IIT Hyderabad
          has been one of the most memorable moments in my academic career. From
          arriving here late on a summer night to spending more than a year, I
          can proudly say that this place oozes ambition, support, happiness,
          and comfort. This place has been the perfect stepping stone to propel
          my academic and professional career to peaks I never imagined. For
          someone traveling outside the country for the first time, I have met
          many wonderful people, made amazing friends, always smiling, and
          always willing to help. IITH, for me, has been an experience of a
          lifetime, which I will always cherish.
          <br />
          Anyone looking into joining this institution doesn't need to think
          twice or look for something else because you won't find anything
          better.
        </p>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Sii;
