import React from "react";
import { useTransition, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Partners.css";
import one from "./images/IITH Pics/partners.png";
import two from "./images/partners/partner.jpg";
import three from "./images/partners/partners.jpeg";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function Partners() {
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
      <div className="containerPartners bg">
        <div className="cardOverlay">
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="itemLife">
                <h1>Our Partners</h1>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="fade--bottom" />
      <div className="pImages">
        <div data-aos="fade-right">
          <img src={one} className="one" />
        </div>
        <div className="pImages2">
          <div data-aos="zoom-in">
            <img src={two} className="two" />
          </div>
          <div data-aos="zoom-in">
            <img src={three} className="two" />
          </div>
        </div>
      </div>
      <hr />
      <div className="parTitle title" data-aos="fade-up">
        <h2>List of Active MoUs’ Country wise</h2>
      </div>
      <div className="tableContainer" data-aos="fade-up">
        <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Country</th>
              <th>Partner</th>
              <th>Link MoU Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td rowSpan="2">Australia</td>
              <td>Curtin University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1gVOsfV4EPSxT335Pp8A7tRKLCjvy5eVv/view?usp=share_link"
                  target="_blank"
                >
                  IITH-CU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Swinburne University of Technology</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1SvYzizc2GP8AKw01qTx4LGkmNRIVHxJt/view?usp=share_link"
                  target="_blank"
                >
                  IITH-SUT JDP MoU
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>France</td>
              <td>The University of Lorraine</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1gVOsfV4EPSxT335Pp8A7tRKLCjvy5eVv/view?usp=share_link"
                  target="_blank"
                >
                  IITH-UOL MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Germany</td>
              <td>University of Applied Sciences, CSE Department</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1bPt9n-ds27KPPfayq0ykC3aSIWcFi7Gd/view?usp=share_link"
                  target="_blank"
                >
                  IITH-UAS,CSE MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td rowspan="3">South Korea</td>
              <td>
                Jeju Technopark, Honorary Consulate General of the Republic of
                Korea in Hyderabad
              </td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1-QyXVSNSxCLjMYjrL_mz9Lb_a9lKBSLs/view?usp=share_link"
                  target="_blank"
                >
                  IITH-HCG Korea MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Pharm CADD Co. Ltd, Busan</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/123uRWPIYHURD5NCPNWutcosbJsVTJd0q/view?usp=share_link"
                  target="_blank"
                >
                  IITH-PCADD MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Woosong University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1gGWJ88hX5vBsPFrqkd2RfwnTefzAz6Z2/view?usp=share_link"
                  target="_blank"
                >
                  IITH-WU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td rowspan="3">Taiwan</td>
              <td>National Changhua University of Education</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1g70LLW20NxJoDMjEA7IdPYFDQymg79A3/view?usp=share_link"
                  target="_blank"
                >
                  IITH-NCU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Kaohsiung Medical University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1fqba7SFWLXPhVPrFmalvYMUCTITPj49s/view?usp=share_link"
                  target="_blank"
                >
                  IITH-KMU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>YUAN ZE University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1gB6BkO59tAVvcuahRCSNtw4wad7L-Cvz/view?usp=share_link"
                  target="_blank"
                >
                  IITH-YZU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>United Kingdom</td>
              <td>School of Engineering, The University of Lincoln</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1gGMpcnxIVr0CFS2jB9x68_V3ZEHN7Qdy/view?usp=share_link"
                  target="_blank"
                >
                  IITH-UL MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td rowspan="3">United States of America</td>
              <td>University of Washington</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1er1rVBaf14SMGpvmiO5L9riT2d-Hnom7/view?usp=share_link"
                  target="_blank"
                >
                  IITH-UW MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>University of Pittsburgh</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1fhjoEWn02wdQX4NriZlaF5aK0rNiAM74/view?usp=share_link"
                  target="_blank"
                >
                  IITH-UP MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Hewlett & Packard, Austin</td>
              <td></td>
            </tr>
            <tr>
              <td>15</td>
              <td rowspan="24">Japan</td>
              <td>
                Osaka University (Student and faculty exchange program and Joint
                Research)
              </td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1hmV_6XAYuz1xvME0dvG5UUUlVEnBSW8P/view?usp=share_link"
                  target="_blank"
                >
                  IITH-OU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Osaka University (Research Collaboration)</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1cX06tYZNWjo7AXmE0iWPZFizcfl_mAzp/view?usp=share_link"
                  target="_blank"
                >
                  IITH-OU RC MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Enrission Corporation Limited (Shiru Cafe)</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1eI91Oc48xsIEvgOrWRpvTxW71rTSl1xn/view?usp=share_link"
                  target="_blank"
                >
                  IITH-EC MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>University of Tokyo</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1fDJUodVx5i-KzyQbyuvhnV-k0n1MyB86/view?usp=share_link"
                  target="_blank"
                >
                  IITH-UT MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Shizuoka University (Student Exchange)</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1CrxwDZP1_65FQXVfnMIhTT2O1frQceJ4/view?usp=share_link"
                  target="_blank"
                >
                  IITH-SU (SE) MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Shizuoka University (Academic Exchange)</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1Ij8WXdNFBY0HczoOE4p5U6gAr5FneS77/view?usp=share_link"
                  target="_blank"
                >
                  IITH-SU (AE) MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>OMRON Corporation, Ritsumeikan University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1g03Patb1uO-1tEhx2GNCtFPPUC4weqRf/view?usp=share_link"
                  target="_blank"
                >
                  IITH-OMRON RU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Chaintope Inc.</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1erWP3FmAVjFxspLkPlXB3psAkeQ4XZ3I/view?usp=share_link"
                  target="_blank"
                >
                  IITH-CI MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Hokkaido University (Students Exchange)</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1g8t8mLXkA6pDurPY2HBm5Bo4XFcY8BxS/view?usp=share_link"
                  target="_blank"
                >
                  IITH-HU (SE) MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>CREHIM - Osaka Universsity (Internship)</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1fI7NmdRn_rYpFQClYmUtoE2He2vm1G1f/view?usp=share_link"
                  target="_blank"
                >
                  IITH - CREHIM (OU) MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Ritsumeikan University (Internship)</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1fsJ1SXjEd1mCkqKoaI4_TvK-yd61j1qA/view?usp=share_link"
                  target="_blank"
                >
                  IITH-RU (Internship) MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>
                National Institute of Advanced Industrial Science and Technology
              </td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1gKonUa_8z_0e9pHIZHCgS2ocpAku0KET/view?usp=share_link"
                  target="_blank"
                >
                  IITH-NIAST MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Nihon University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1fucxYJXAMeoO3IDtVkGL9x9Cndr2HChW/view?usp=share_link"
                  target="_blank"
                >
                  IITH-NU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Toshiba Memory Corporation</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1gKfcqbeiJ26gOmB1AaSB6pPg73cxPCHB/view?usp=share_link"
                  target="_blank"
                >
                  IITH-TMC MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Suzuki Motor Corporation</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1k7qv_pQyEDg41riP3oSR_x6SqXPMILyd/view?usp=share_link"
                  target="_blank"
                >
                  IITH-SMC MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>30</td>
              <td>SUKILLS Inc.</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1ai5VUI9kNALMjfeWzDl5MONRyw8371Xx/view?usp=share_link"
                  target="_blank"
                >
                  IITH-SUKILLS MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>31</td>
              <td>
                Earthquake Disaster Mitigation Research Division, National
                Research Institute for Earth Science and Disaster Resilience{" "}
              </td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1zhNYu2JyqQadt6zwoQMSgr4JBnKGq69R/view?usp=share_link"
                  target="_blank"
                >
                  IITH-EDMRD, NRIED MOU{" "}
                </a>
              </td>
            </tr>
            <tr>
              <td>32</td>
              <td>Saitama University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1zdmfw0h5EefUojyoDKJQzlmSy6BG00Bo/view?usp=share_link"
                  target="_blank"
                >
                  IITH-SU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>33</td>
              <td>National Institute for Materials Science</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1znOdoLMJX9UBleAb3HgautXwQH3A5vuq/view?usp=share_link"
                  target="_blank"
                >
                  IITH-NIMS MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>34</td>
              <td>New Frontier Capital Management </td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1KlTcwxIFA2bV2QxihCjFVbsppzBLYEv2/view?usp=share_link"
                  target="_blank"
                >
                  IITH-NFCM MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>35</td>
              <td>DENSO Corporation</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1OBqjbIlKvFdopm5dcNh14QK9-_GrKPYw/view?usp=share_link"
                  target="_blank"
                >
                  IITH-DENSO MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>36</td>
              <td>Seoul National University</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/1J8vLbFCrcs-hadmnzZUps9PS3AQA4KAs/view?usp=share_link"
                  target="_blank"
                >
                  IITH-SNU MOU
                </a>
              </td>
            </tr>
            <tr>
              <td>37</td>
              <td>
                Japan’s National Institute of Advanced Industrial Science and
                Technology (AIST)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>38</td>
              <td>I'm beside you Inc</td>
              <td>
                <a
                  className="nameLink col"
                  href="https://drive.google.com/file/d/123uRWPIYHURD5NCPNWutcosbJsVTJd0q/view?usp=share_link"
                  target="_blank"
                >
                  IITH-IBY MOU
                </a>
              </td>
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

export default Partners;
