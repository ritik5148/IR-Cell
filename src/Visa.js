import React from "react";
import { useTransition, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Visa.css";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function Visa() {
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
      <div className="containerVisa bg">
        <div className="cardOverlay">
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="itemLife">
                <h1>Visa & Immigration</h1>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="fade--bottom" />
      <div className="visTitle title" data-aos="fade-up">
        <h2>Visa Type</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Student Visas</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          S-1 For higher education (including South Asian University and Nalanda
          University), provisional student visa, for a short-term course and for
          those coming under student exchange program.
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          S-2 For school education in India
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          S-3 For studying Yoga, Vedic culture, Indian system of music and dance
          and Buddhist studies
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          S-4 Theological Studies and Missionary students
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          S-5 For Research scholar, visiting research faculty, research scholar
          on bilateral exchange programme, members of botanical scientific,
          anthropological etc. expeditions
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          S-6 For those coming for internship in India (including those coming
          under French VIE programme)
        </li>
      </div>
      <h4 className="note">Dependent Visas under student visa category</h4>
      <div className="vList">
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          S-1X For dependent of student of regular courses in universities
          imparting higher education
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          S-3X For dependent of student studying Yoga, Vedic culture, Indian
          system of music and dance and Buddhist studies
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          S-5X For dependent of student for Research scholar, visiting research
          faculty, research scholar on bilateral exchange programme, members of
          botanical scientific, anthropological etc. expeditions{" "}
        </li>
      </div>
      <h4 className="note">
        <b>
          NOTE: *For dependents of those coming under S-1, S-3 and S-5 Visas
          only. For other category, no dependent visa will be granted.*
        </b>
      </h4>
      <div className="head" data-aos="fade-up">
        <h3>Conference Visas</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          C-1 For participants of conferences organized by Government
          authorities
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          C-2 For participants of conferences organized by non-Government
          authorities
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Employment Visas</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          E-1 All cases of employment (except intra company transferees and
          employment in NGO’s)
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          E-2 Intra company transferees
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          E-3 For employment in NGO’s
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          E-4 For those coming to exclude projects in power and steel sectors
        </li>
      </div>
      <h4 className="note">Dependent Visas under employment visa category:</h4>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          E-1X For dependents of employment visa holders
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          E-2X For dependents of Intra company transferees
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          E-3X For dependents of employees employed in NGO’s
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          E-4X For dependents of those coming to exclude projects in power and
          steel sectors
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Business Visas</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          B-1 For those coming to establish an industrial/business venture,
          those required to travel frequently on long-term business activities
          and for investors
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          B-2 For all other business activities (other than those covered under
          B-1 and sports persons)
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          B-3 For sports persons and coaches including those engaged in
          commercial sports events in India on contract with remuneration
        </li>
      </div>
      <h4 className="note">Dependent Visas under business visa category:</h4>
      <div className="vList">
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          B-1X For dependents of those coming to establish an
          industrial/business venture, those required to travel frequently on
          long-term business activities and for investors
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          B-2 X For dependents of businessperson coming for all other business
          activities (other than those covered under B-1 and sports persons)
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Diplomatic Visas</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          D-1 Diplomat assigned in India (on diplomatic passport only)
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          D-2 Diplomat on a visit to India for official purpose (on diplomatic
          passport only)
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          D-3 Diplomat assigned to non-UN international organization in India
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          UD-1 UN Diplomat assigned to India
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          UD-2 UN Diplomat on a visit to India
        </li>
      </div>
      <h4 className="note">Dependent Visas under diplomatic visa category:</h4>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          D-1X Dependent of diplomat (Diplomat assigned in India (on diplomatic
          passport only))
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          D-2X Dependent of diplomat (Diplomat on a visit to India for official
          purpose (on diplomatic passport only))
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          D-3X Dependent of diplomat (Diplomat assigned to non-UN international
          organization in India)
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          UD-1X Dependent of UN diplomat assigned to India
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          UD-2X Dependent of UN diplomat on a visit to India
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Double Entry Visa (Only for Bangladesh Nationals)</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          X-Double Entry - (Double Entry Visa){" "}
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>e-Emergency X-Misc Visa</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          eXM- e-Emergency X-Misc VISA{" "}
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Entry Visa</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          X-1 - For persons of Indian origin and spouse and children of an
          Indian citizen / Person of Indian origin / OCI card (other than those
          registered as OCI cardholder)
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          X-2 - For those coming to join Auroville Foundation, Aurobindo Ashram,
          Missionaries of Charity,Templates or similar approved organizations
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          X-Misc - For those categories for which X-Misc visa has been specified
          in various chapters of the Visa manual and for purposes which are not
          covered by any other visa category
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>e-Visa</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          e-BV - (e-Business Visa){" "}
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          e-CV - (e-Conference Visa){" "}
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          e-Med V - (e-Medical Visa)
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          e-Med X V - (e-Medical Attendant Visa)
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          e-TV - (e-Tourist Visa)
        </li>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Visa-on-Arrival</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          VoA- Visa on arrival for Japanaese and South Korean nationals{" "}
        </li>
      </div>
      <hr />
      <div className="visTitle title" data-aos="fade-up">
        <h2>Visa Provision/Policies</h2>
      </div>
      <div className="tableContainer" data-aos="fade-up">
        <table>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Type of visa</th>
              <th>Period for which granted</th>
              <th>Entry</th>
              <th>Documents Required with Application</th>
              <th>Etendabel while in India</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Business Visa</td>
              <td>5 years</td>
              <td>Multiple</td>
              <td>Documents to prove bonafide purpose (Company letter etc.)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Employment Visa </td>
              <td>1 year/ period of contract</td>
              <td>Multiple</td>
              <td>
                Proof of employment (appointment document), terms and conditions{" "}
              </td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Student Visa/Research Visa</td>
              <td>Period of course/ 5 years</td>
              <td>Multiple</td>
              <td>Proof of admission in Indian Institution</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Intern</td>
              <td>Duration of the Internship or One year, whichever is less</td>
              <td>Single/ Double/ Multiple</td>
              <td>
                Letter from the Indian company/educational institution/NGO
                concerned sponsoring the foreign national for the internship
                programme clearly indicating the period of internship
              </td>
              <td>Non- extendable</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="visTitle title" data-aos="fade-up">
        <h2>Visa Extension</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Visa-on-Arrival</h3>
      </div>
      <div className="vList">
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          For certain visa types, it is possible to extend your visa while still
          residing in India. Extension of such visas can be done online through
          the e-Foreigners Regional Registration Office (e-FRRO) portal
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          Assistance for Visa extension shall be provided by the International
          Relations office upon request.
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          The visa extension fee shall be borne by the foreigner.
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          Documents to be provided by the institute shall be given by the
          Academic/International Relations office.
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          Visa extension request is to be made 60 days before the visa expiry.
        </li>
        <li className="list" data-aos="fade-left">
          <VscDebugBreakpointLogUnverified />
          The International Relations office is not responsible for any issues
          faced during visa extension if it is done directly by the foreigner
          without the knowledge of the International Relations office.
        </li>
        <li className="list" data-aos="fade-right">
          <VscDebugBreakpointLogUnverified />
          If not informed, the International Relations office is not answerable
          to the e-FRRO in case of any overstay by the foreigner.
        </li>
      </div>
      <hr />
      <div className="visTitle title" data-aos="fade-up">
        <h2>Visits</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Visitor's List</h3>
      </div>
      <div className="tableContainer" data-aos="fade-up">
        <table>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Delegate name </th>
              <th>Designation </th>
              <th>University</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Prof. Benard Chenevier</td>
              <td>
                CNRS Director of Research (France), Professor and Senior
                University Research Administrator (URA){" "}
              </td>
              <td>Okayama University </td>
              <td>Japan</td>
            </tr>

            <tr>
              <td>2.</td>
              <td>Satyajit Dattagupta</td>
              <td>
                Chief Enrollment Officer, Special Advisor to the President,
                Senior Vice Chancellor
              </td>
              <td>Northeastern University </td>
              <td>USA</td>
            </tr>

            <tr>
              <td>3.</td>
              <td>Bradly Booke</td>
              <td>Assistant Vice Chancellor of Enrollment</td>
              <td>Northeastern University</td>
              <td>USA</td>
            </tr>

            <tr>
              <td>4.</td>
              <td>Kirsten Feddersen</td>
              <td>Senior Director of International Enrollment Management</td>
              <td>Northeastern University</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Samol Ork</td>
              <td>Director- Recruitment Operations</td>
              <td>Khoury College of Computer Sciences, San Francisco</td>
              <td>USA</td>
            </tr>

            <tr>
              <td>6.</td>
              <td>Steve Amato</td>
              <td>
                Professor and Department Chair of Regulatory Affairs & Quality
                Assurance
              </td>
              <td>Northeastern University</td>
              <td>USA</td>
            </tr>

            <tr>
              <td>7.</td>
              <td>Frederic Ndiaye </td>
              <td></td>
              <td>Head of Roux Institute </td>
              <td>Portland</td>
            </tr>

            <tr>
              <td>8.</td>
              <td>Justin Repici</td>
              <td>
                Coordinator of International Student Programs & Academic Advisor
                for Asian Studies, and Economics,{" "}
              </td>
              <td>CSSH</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>9.</td>
              <td>Dominik Beckers</td>
              <td>Director of Strategic Partnerships</td>
              <td>Vancouver Campus</td>
              <td>Canada</td>
            </tr>

            <tr>
              <td rowspan="2">10.</td>
              <td rowspan="2">Dr. Sakth Kumar</td>
              <td>Deputy Director</td>
              <td rowspan="2">Tokyo University</td>
              <td rowspan="2">Japan</td>
            </tr>

            <tr>
              <td>Bio Nano Electronics Centre</td>
            </tr>

            <tr>
              <td>11.</td>
              <td>Prof. Tim White</td>
              <td>
                Vice President, International Engagement and President's Chair
                in Materials Science & Engineering
              </td>
              <td>NTU Singapore</td>
              <td> Singapore</td>
            </tr>

            <tr>
              <td>12.</td>
              <td>Prof B.V.R Chowdari</td>
              <td>
                Senior Executive Director, India Strategy (International
                Engagement)
              </td>
              <td>NTU Singapore</td>
              <td>Singapore</td>
            </tr>

            <tr>
              <td>13.</td>
              <td>Ms. Preeti Dawra</td>
              <td>
                Director, Global Marketing, Office of International Engagement
              </td>
              <td>NTU Singapore</td>
              <td>Singapore</td>
            </tr>

            <tr>
              <td>14.</td>
              <td>Prof. Kenzo Fujisue</td>
              <td>Former MP & WEB3 Lab at University of Tokyo</td>
              <td>University of Tokyo</td>
              <td>Japan</td>
            </tr>

            <tr>
              <td>15.</td>
              <td>Prof. Satoshi Shima</td>
              <td></td>
              <td></td>
              <td>Japan</td>
            </tr>

            <tr>
              <td>16.</td>
              <td>Mr. Yosikazu Takasaki</td>
              <td></td>
              <td></td>
              <td>Japan</td>
            </tr>

            <tr>
              <td>17.</td>
              <td>Prof. Masahiro Takasaki</td>
              <td>CEO</td>
              <td>Doreming Ltd.</td>
              <td>Japan</td>
            </tr>

            <tr>
              <td>18.</td>
              <td>Ambassadar Bhaswati Mukherjee</td>
              <td>Former Ambassodar to Netherlands </td>
              <td></td>
              <td>India</td>
            </tr>

            <tr>
              <td>19.</td>
              <td>CHENN L Kuechler Michaela</td>
              <td>German Consul General</td>
              <td></td>
              <td>Germany</td>
            </tr>

            <tr>
              <td>20.</td>
              <td>Dr. Sano Hiroshi</td>
              <td>Mitsubishi Chemical Corporation, Japan</td>
              <td></td>
              <td>Japan</td>
            </tr>

            <tr>
              <td>21.</td>
              <td>Prof. Miki Chitoshi</td>
              <td>President of Tokyo City University, Japan</td>
              <td></td>
              <td>Japan</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Visa;
