import React from "react";
import { useTransition, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import "./Jica.css";
import Nav from "./Nav";
import first from "./images/jica/2.jpg";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import one from "./images/jica_project.png";
import two from "./images/jica/3.jpeg";
import three from "./images/jica/4.jpeg";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function Jica() {
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
      <div className="containerJica bg">
        <div className="cardOverlay">
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="itemLife">
                <h1>Jica</h1>
                <p>Japan International Cooperation Agency</p>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="fade--bottom" />
      <div className="proTitle title" data-aos="fade-up">
        <h2>About the Program</h2>
      </div>
      <div className="paragraphs">
        <p data-aos="fade-right">
          IITH has a very unique collaboration with Japanese universities and
          industries. The FRIENDSHIP (Future Researchers at Indian Institute of
          Technology Hyderabad to Enhance Network Development with Scholarship)
          FRIENDSHIP Project aims to contribute to the further development in
          the educational and research activities of IITH through the
          world-class research network between IITH and higher education
          institutions & industrial clusters of Japan, whereby both can
          establish educational and research excellence in the field of science,
          technology and engineering in the future.
        </p>
      </div>
      <div className="projectTitle title" data-aos="fade-up">
        <h2>Project Overview</h2>
      </div>
      <div className="paragraphs">
        <p data-aos="fade-left">
          Japan International Cooperation Agency (JICA) started the “The Project
          for Future Researchers at IITH to Enhance Network Development with
          Scholarship of Japan” (FRIENDSHIP Project) on 2nd January 2011 for a
          period of 8 years till 31st March 2020 . Under this first phase 116
          IITH graduates received postgraduate scholarships in Japan and 33 of
          them already worked in Japanese universities and industries. IITH
          applied overall 51 numbers of patents under the project It resulted in
          the signing of 56 MOUs, 72 joint publications (often at high impact
          journals), the attainment of research funds including large scale
          ones, and the increased number of students who obtained internship
          and/or employment opportunities at Japanese companies. In sum, the
          Project produced a number of excellent achievements in 8 years.
          <br />
          After the success of phase 1 to sustain the momentum built by the
          Project, the FRIENDSHIP 2.0 project was launched in December 2021
        </p>
      </div>
      <div className="purposeTitle title" data-aos="fade-up">
        <h2>Purpose & Activities</h2>
      </div>
      <div className="purposeContainer">
        <div className="purposeImage" data-aos="fade-right">
          <img className="purposeImg" src={first} alt="Director" />
        </div>
        <div className="paragraphs" data-aos="fade-left">
          The purpose of the FRIENDSHIP 2 project is to establish a sustainable
          platform for academic and industrial collaborations between India and
          Japan at IITH, expecting that human resources produced through the
          platform will continuously contribute to academic and industrial
          development both in India and Japan. <br /> <br />
          The FRIENDSHIP 2.0 project now offers IITH-Japan FRIENDSHIP
          Scholarship 2.0 for doctoral study at Japanese universities,
          exclusively for graduates from master’s programs of IITH in science
          and technology. The scholarship aims to establish sustainable academic
          and industrial research collaborations between India and Japan through
          promoting joint research, joint supervision, and other joint
          activities during grantees’ doctoral study in Japan as trainees of
          “the JICA long-term training program”. <br /> <br />
          A program that provides trainees with opportunities to pursue higher
          degrees at Japanese universities. FRIENDSHIP Scholarship 2.0 has its
          purpose and activities, following the regulations of the JICA
          long-term training program.
          <br /> <br />
          A final 10 students were selected in 2022. Nine of the successful
          applicants were enrolled in October 2022, and one in April 2023. Some
          students will enroll in the doctoral course after six months as
          research students, while others will directly enrol in the doctoral
          course to begin their research FRIENDSHIP 2.0 also offers Research
          Grant. The FRIENDSHIP 2.0 Research Grant aims to enhance sustainable
          collaboration between IIT Hyderabad (IITH) and academic institutions
          and/or industries in Japan in association with the FRIENDSHIP 2.0
          Scholarship. Establishing academic collaboration including
          collaborative degree programs through a combination of research grants
          and long-term training programs is also one of the purposes of this
          grant.
          <br /> <br />
          FRIENDSHIP 2.0 Research Grant offers two kinds of grants in science
          and technology, namely (AC) academic collaboration and (IC)
          industry-university collaboration.
        </div>
      </div>
      <hr />
      <div className="listTitle title" data-aos="fade-up">
        <h2>The list of Joint Research Granted in 2022</h2>
      </div>
      <div className="tableContainer" data-aos="fade-up">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>PI Name</th>
              <th>PI Department</th>
              <th>Research topic</th>
              <th>Co-PI Name</th>
              <th>Co-PI University</th>
              <th>Co-PI Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <p>1</p>
                </div>
              </td>
              <td>Bhargava Anamika</td>
              <td>Biotechnology</td>
              <td>
                <div>
                  <p className="tdPara">
                    Challenging the paradigm: activating T-type calcium channel
                    isoform Cav3.1 for breast cancer therapeutics
                  </p>
                </div>
              </td>
              <td>Maturana Andres Daniel</td>
              <td>Nagoya University</td>
              <td>
                Laboratory of Animal Cell Physiology, Graduate School of
                Bioagricultural Sciences
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>PANDA TARUN KANTI </td>
              <td>Chemistry</td>
              <td>
                Atom Economic Hydroboration of C X Unsaturated Bonds as Green
                Method for Organic Synthesis
              </td>
              <td>Tsurugi Hayato</td>
              <td>Osaka University</td>
              <td>Graduate School of Engineering Science</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ganesan Prabu Sankar</td>
              <td>Chemistry</td>
              <td>Organo Gold(I) Molecules to Materials</td>
              <td>Tsutsumi Osamu</td>
              <td>Ritsumeikan University</td>
              <td>Applied Chemistry</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Chatterjee Pritha</td>
              <td>Civil Engineering/Adjunct faculty of Climate Change</td>
              <td>
                Microalgae-microbial fuel cell (mMFC): an integrated process for
                removal of xenobiotics in sewage and simultaneous electricity
                generation
              </td>
              <td>Matsuura Norihisa</td>
              <td>Kanazawa University</td>
              <td>Faculty of Geosciences and Civil Engineering</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Abhinav Kumar</td>
              <td>Electrical Engineering</td>
              <td>
                Enhancing User Mobility in Cellular networks through Machine
                Learning
              </td>
              <td>Yamaguchi (Shigetomi) Rie</td>
              <td>University of Tokyo</td>
              <td>
                Social ICT Research Center, Graduate School of Information
                Science and Technology (Sakai-Goshima Lab, Information and
                Communication Engineering)
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Subrahmanyam Challapalli</td>
              <td>Chemistry</td>
              <td>Plasmon enhanced photoelectrochemical water splitting</td>
              <td>BIJU Vasudevan Pillai</td>
              <td>Hokkaido University</td>
              <td>Research Institute for Electronic Science</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Bhattacharjee Pinaki Prasad</td>
              <td>Materials Science and Metallurgical Engineering</td>
              <td>
                Development of novel cost-effective eutectic high entropy alloys
                with superior mechanical properties
              </td>
              <td>Tsuji Nobuhiro</td>
              <td>Kyoto University</td>
              <td>Materials Science and Engineering</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Desarkar Maunendra Sankar</td>
              <td>CSE</td>
              <td>
                Generating natural language descriptions/summaries of data
                tables
              </td>
              <td>Aizawa Akiko</td>
              <td>National Institute of Informatics</td>
              <td>Digital Content and Media Sciences Research Division</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Shanmugam Suriya Prakash</td>
              <td>Civil Engineering</td>
              <td>
                Experimental Investigation on Fracture Behavior of High Strength
                Steel Reinforced Concrete using Acoustic Emission
              </td>
              <td>KAWASAKI Yuma</td>
              <td>Ritsumeikan University</td>
              <td>Civil Engineering</td>
            </tr>
            <tr>
              <td>10</td>
              <td>BHATTACHARYYA DEBRAJ</td>
              <td>Civil Engineering</td>
              <td>
                Understanding the Fate and Effects of Pharmaceutically Active
                Compounds, Per- and Polyfluoroalkyl Substances in Contaminated
                Water Bodies and in Treatment Plants
              </td>
              <td>FUTAMATA Hiroyuki</td>
              <td>Shizuoka University</td>
              <td>Institution of Green Science and Technology</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Dutta Gupta Shourya</td>
              <td>Materials Science and Metallurgical Engineering</td>
              <td>
                Colloidal Crystal Materials Group, Research Center for
                Functional Materials
              </td>
              <td>Fudouzi Hiroshi</td>
              <td>NIMS, Japan</td>
              <td>
                Colloidal Crystal Materials Group, Research Center for
                Functional Materials
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Selvaraj Ambika</td>
              <td>Civil Engineering</td>
              <td>
                Application and Life Cycle Analysis of Waste-based Biochar for
                Water Treatment
              </td>
              <td>Yoshikawa Naoki</td>
              <td>Ritsumeikan University</td>
              <td>
                Department of Civil and Environmental Engineering, College of
                Science and Engineering
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>
          Various activities to promote India-Japan collaboration, including
          Japan Desk events, are carried out with the support of the JICA
          project team. The main activities are as follows
        </h3>
      </div>
      <ul className="vList">
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          Baseline Study Survey & Report Preparation
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          FRIENDSHIP2.0 Scholarship 2nd batch promotion activities
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified /> Japan Desk Logo Contest
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          Orientation for 1st batch FRIENDSHIP 2.0 Scholarship participants
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          Detailed planning survey & study and report (November 2022)
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          Japan Desk Collaboration events with Japanese companies
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          Participation in CEATEC International Exhibition (from 18th to 21st
          October at Makuhari Messe for on-site exhibition and from 1st to 31st
          October for online exhibition)
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          Online seminar to introduce IITH at CEATEC International Exhibition
          (19th October, 13:30-14:30)
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          2nd Joint Coordinating Committee (JCC) meeting (1 st December @ IITH+
          online)
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          Recruitment and selection of the second batch of FRIENDSHIP 2.0
          Scholarship Scholars (about 20 Scholars) --Application deadline: 16th
          December
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          FRIENDSHIP2.0 Joint Research Grant Program Batch 2 Call for
          Applications and Selection (about 10) -- Application deadline November
          2
        </li>
      </ul>
      <hr />
      <div className="deskTitle title" data-aos="fade-up">
        <h2>Japan Desk</h2>
      </div>
      <div className="head">
        <h3 data-aos="fade-up">Purpose</h3>
        <p className="libPara" data-aos="fade-left">
          Japan Desk to become a sustainable platform for academic and
          industry-university collaboration between India and Japan by providing
          a one-stop service in academic and industry-university collaboration
          at IITH.
        </p>
      </div>
      <div className="head">
        <h3 className="rightHead" data-aos="fade-up">
          Japan Desk Steering Committee
        </h3>
        <p className="cultPara" data-aos="fade-right">
          A Japan Desk Steering Committee and Japan Desk Partners will be
          established as a mechanism for the Japan Desk to develop and expand
          the India-Japan partnership sustainably and autonomously. The Steering
          Committee will consist of Deans who are in charge of facilitating
          Japan Desk activities and will support planning, decision-making, and
          implementation of activities. Regular meetings of the Steering
          Committee will be held to review the progress raised by the task
          forces and provide feedback to the task forces on the measures to be
          taken, and receive approval from the Director of IITH, who is also the
          Project Director.
        </p>
      </div>
      <div className="head">
        <h3 data-aos="fade-up">Task Force</h3>
        <p className="libPara" data-aos="fade-left">
          Task Forces are formed for Japan Desk activities by faculty and staff
          members from IITH to serve as working members for the various
          activities of the Japan Desk.
        </p>
      </div>
      <div className="head">
        <h3 className="rightHead" data-aos="fade-up">
          Japan Desk Partners
        </h3>
        <p className="cultPara" data-aos="fade-right">
          The Japan Desk Partners will be composed of external members from
          India-Japan partnership promotion organizations, the JICA Friendship
          Scholars’ Associations and IITH start-up companies, etc., and
          collaborates with the Steering Committee as necessary in providing
          expert advice and introducing relevant personnel through personal
          connections.
        </p>
      </div>
      <hr />
      <div className="head" data-aos="fade-up">
        <h3>
          Various activities to promote India-Japan collaboration, including
          Japan Desk events, are carried out with the support of the JICA
          project team. The main activities are as follows
        </h3>
      </div>

      <div className="jdImages" data-aos="zoom-in">
        <img src={one} className="jdImg" />
        <img src={two} className="jdImg" />
        <img src={three} className="jdImg" />
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Jica;
