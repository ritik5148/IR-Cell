import React, { useEffect, useState } from "react";
import { animated } from "@react-spring/web";
import { useTransition } from "@react-spring/web";
import Nav from "./Nav";
import "./About.css";
import deanImage from "./images/faculty/tarun_kanti_panda.png";
import a from "./images/faculty/vineeth_v_balasubramanian.jpg";
import b from "./images/faculty/nagarjan_ganapathy.jpg";
import c from "./images/faculty/gunjan_mehta.jpeg";
import d from "./images/faculty/lopamudra_giri.jpg";
import e from "./images/faculty/abhijit_sau.jpg";
import f from "./images/faculty/suvin_venthuruthiyil.jpg";
import g from "./images/faculty/srikar.png";
import h from "./images/faculty/ashudeb_dutta.jpg";
import i from "./images/faculty/prakhar_gupta.jpg";
import j from "./images/faculty/kausik_sarathy_sridharan.jpg";
import k from "./images/faculty/suhita_bhattacharjee.jpg";
import l from "./images/faculty/mayur_vaidya.jpg";
import m from "./images/faculty/mrinmoy_dutta.png";
import n from "./images/faculty/saurabh_sandilya.jpg";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import ajay from "./images/student/OverallHead1.jpg";
import tejas from "./images/student/OverallHead2.jpg";
import rushi from "./images/student/Convener.jpg";
import sankalp from "./images/student/outboundHead1.jpg";
import pritee from "./images/student/outboundHead2.jpg";
import shantanu from "./images/student/InboundHead.jpg";
import katke from "./images/student/ManagementHead1.jpg";
import vidushi from "./images/student/ManagementHead2.jpg";
import nandini from "./images/student/ManagementHead3.png";
import reegan from "./images/contact/reegan.jpg";
import ali from "./images/contact/azmath.jpg";
import pranitha from "./images/contact/pranitha.jpg";
import kavitha from "./images/contact/kavitha.png";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  //About Us
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
      <div className="container bg">
        <div className="cardOverlay">
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="item">
                <h1>About Us</h1>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="fade--bottom" />
      <div className="messageTitle title" data-aos="slide-up">
        <h2>Message From Dean International Relations</h2>
      </div>
      <div className="dean">
        <div className="deanImg" data-aos="fade-right">
          <img className="image" src={deanImage} alt="Prof Tarun Kanti Panda" />
          <p className="deanName">Professor Tarun Kanti Panda</p>
        </div>
        <div className="deanMessage" data-aos="fade-left">
          <p>
            Welcome to IIT Hyderabad and Hyderabad city, often known as the
            “city of pearls” has a vibrant historical legacy and is rich in
            unique cultures, foods, and iconic architectural structures.
            International cooperation is growing in significance more than ever
            before and working together is the most beautiful way to achieve
            success. IIT Hyderabad welcomes international students to study and
            perform cutting-edge research, undertake research internships,
            project studies, study tours and semester exchange programs. IIT
            Hyderabad though very young has proved its excellence in various
            grounds such as science and engineering, Research & Development,
            innovation, and is committed to being one of the globally recognized
            educational institutes in the world. Building strong research and
            academic collaborations with international partners has been at the
            forefront of our international relations strategy. The Office of
            International Relations at IITH reflect the institute’s vision and
            commitment to providing high-quality education without geographical
            boundaries, enhancing the diversity of its student body and forming
            strategic partnerships around the world. This website of the Office
            of International relations is to facilitate our International
            students with the information required for them to apply for our
            postgraduate education or non-degree programs like semester
            exchange, Study abroad, Project work, Thesis work, Internship,
            research exchange and Joint programs.
          </p>
        </div>
      </div>
      <hr />
      <div className="facultyTitle title" data-aos="slide-up">
        <h2>Department Faculty Advisors</h2>
      </div>
      <div className="cards">
        <div className="card" data-aos="zoom-in">
          <img
            className="facultyImage"
            src={a}
            alt="Dr Vineeth N Balasubramanian"
          />
          <h3>
            <a
              className="nameLink"
              href="https://people.iith.ac.in/vineethnb/"
              target="_blank"
            >
              Dr. Vineeth N Balasubramanian
            </a>
          </h3>
          <h2>Artificial Intelligence</h2>
          <p>Associate Professor</p>
          <a
            className="nameLink"
            href="mailto:vineethnb@cse.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={c} alt="Dr. Gunjan Mehta" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/bt/gunjanmehta/"
              target="_blank"
            >
              Dr. Gunjan Mehta
            </a>
          </h3>
          <h2>Biotechnology</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:gunjanmehta@bt.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={d} alt="Dr. Lopamudra Giri" />
          <h3>
            <a
              className="nameLink"
              href="https://www.iith.ac.in/che/giril/"
              target="_blank"
            >
              Dr. Lopamudra Giri
            </a>
          </h3>
          <h2>Chemical Engineering</h2>
          <p>Associate Professor</p>
          <a
            className="nameLink"
            href="mailto:giril@che.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={e} alt="Dr. Abhijit Sau" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/chy/asau/"
              target="_blank"
            >
              Dr. Abhijit Sau
            </a>
          </h3>
          <h2>Chemistry</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:asau@chy.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img
            className="facultyImage"
            src={f}
            alt="Dr. Suvin P Venthuruthiyil"
          />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/ce/pv.suvin/"
              target="_blank"
            >
              Dr. Suvin P Venthuruthiyil
            </a>
          </h3>
          <h2>Civil Engineering</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:pv.suvin@ce.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={g} alt="Srikar AVR" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/des/srikaravr/"
              target="_blank"
            >
              Srikar AVR
            </a>
          </h3>
          <h2>Design</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:srikaravr@des.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={h} alt="Prof. Asudeb Dutta" />
          <h3>
            <a
              className="nameLink"
              href="https://www.iith.ac.in/ee/asudeb_dutta/"
              target="_blank"
            >
              Prof. Asudeb Dutta
            </a>
          </h3>
          <h2>Electrical Engineering</h2>
          <p>Professor</p>
          <a
            className="nameLink"
            href="mailto:asudeb_dutta@ee.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={i} alt="Dr. Prakhar Gupta" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/mae/prakharg/"
              target="_blank"
            >
              Dr. Prakhar Gupta
            </a>
          </h3>
          <h2>Engineering Science</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:prakharg@mae.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img
            className="facultyImage"
            src={j}
            alt="Dr. Kousik Sarathy Sridharan"
          />
          <h3>
            <a
              className="nameLink"
              href="https://www.iith.ac.in/bme/kousiksarathy/"
              target="_blank"
            >
              Dr. Kousik Sarathy Sridharan
            </a>
          </h3>
          <h2>Heritage Science & Technology</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:kousiksarathy@bme.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img
            className="facultyImage"
            src={k}
            alt="Dr Shuhita Bhattacharjee"
          />
          <h3>
            <a
              className="nameLink"
              href="https://www.iith.ac.in/la/shuhita/"
              target="_blank"
            >
              Dr. Shuhita Bhattacharjee
            </a>
          </h3>
          <h2>Liberal Arts</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:shuhita@la.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={l} alt="Dr. Mayur Vaidya" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/msme/vaidyam/"
              target="_blank"
            >
              Dr. Mayur Vaidya
            </a>
          </h3>
          <h2>Materials Science and Metallurgical Engineering</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:vaidyam@msme.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={m} alt="Dr. Mrinmoy Datta" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/math/mrinmoy.datta/"
              target="_blank"
            >
              Dr. Mrinmoy Datta
            </a>
          </h3>
          <h2>Mathematics and Computing</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:mrinmoy.datta@math.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={n} alt="Dr Saurabh Sandilya" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/phy/saurabh/"
              target="_blank"
            >
              Dr Saurabh Sandilya
            </a>
          </h3>
          <h2>Physics</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:saurabh@phy.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={b} alt="Dr. Nagarajan Ganapathy" />
          <h3>
            <a
              className="nameLink"
              href="https://iith.ac.in/bme/gnagarajan/"
              target="_blank"
            >
              Dr. Nagarajan Ganapathy
            </a>
          </h3>
          <h2>Biomedical Engineering</h2>
          <p>Assistant Professor</p>
          <a
            className="nameLink"
            href="mailto:gnagarajan@bme.iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
      </div>
      <hr />
      <div className="studentTitle title" data-aos="slide-up">
        <h2>IR Student Cell</h2>
      </div>
      <div className="cards">
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={ajay} alt="Ajay Patel" />
          <h4>
            <b>Ajay Patel</b>
          </h4>
          <p>Overall Head</p>
          <a
            className="nameLink"
            href="mailto:ch20btech11004@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+918737040766 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/ajay-patel-1b1b4a1a1/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={tejas} alt="Tejash Agrahari" />
          <h4>
            <b>Tejash Agrahari</b>
          </h4>
          <p>Overall Head</p>
          <a
            className="nameLink"
            href="mailto:ep20btech110024@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+919651180408 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/tejash-agrahari-a198a623a/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={rushi} alt="Rushikesh Nilapalle" />
          <h4>
            <b>Rushikesh Nilapalle</b>
          </h4>
          <p>Convener</p>
          <a
            className="nameLink"
            href="mailto:es20btech11022@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+918830323152 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/rushikesh-nilapalle-223a8b22b/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={sankalp} alt="Sankalp Deshmukh" />
          <h4>
            <b>Sankalp Bhagwat Deshmukh</b>
          </h4>
          <p>Outbound Head</p>
          <a
            className="nameLink"
            href="mailto:ce20btech11034@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+917208239329 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/sankalp-deshmukh-31323222a/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={pritee} alt="Pritee Nagamwad" />
          <h4>
            <b>Nagamwad Pritee Shivajirao</b>
          </h4>
          <p>Outbound Head</p>
          <a
            className="nameLink"
            href="mailto:ce20btech11023@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+919096653336" target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/pritee-nagamwad-b56037227"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={shantanu} alt="Shantanu Pandey" />
          <h4>
            <b>Shantanu Pandey</b>
          </h4>
          <p>Inbound Head</p>
          <a
            className="nameLink"
            href="mailto:cs20btech11046@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+919264958736 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/pshantanu/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={katke} alt="Rishikesh Katke" />
          <h4>
            <b>Rishikesh Katke</b>
          </h4>
          <p>Management Head</p>
          <a
            className="nameLink"
            href="mailto:ce20btech11047@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+919021272821 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/rishikesh-katke-382b1a230/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={vidushi} alt="Vidushi Bhardwaj" />
          <h4>
            <b>Vidushi Bhardwaj</b>
          </h4>
          <p>Management Head</p>
          <a
            className="nameLink"
            href="mailto:md21mdes14037@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+919650654773 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/vidushi-bhardwaj-a55414221/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="studentImage" src={nandini} alt="Nandini Choudhary" />
          <h4>
            <b>Nandini Choudhary</b>
          </h4>
          <p>Management Head</p>
          <a
            className="nameLink"
            href="mailto:cs21mtech11009@iith.ac.in"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a className="nameLink" href="tel:+919424648992 " target="_blank">
            <BsTelephone />
          </a>
          <a
            className="nameLink"
            href="https://www.linkedin.com/in/nandini17/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
      <hr />
      <div className="contactTitle title" data-aos="slide-up">
        <h2>Contact Us</h2>
      </div>
      <div className="cards">
        <div className="card" data-aos="zoom-in">
          <img
            className="facultyImage"
            src={deanImage}
            alt="Prof Tarun Kanti Panda"
          />
          <h4>
            <b>Prof Tarun Kanti Panda</b>
          </h4>
          <p>Dean (International Relations) & Professor</p>
          <p>Department of Chemistry</p>
          <a
            className="nameLink"
            href="mailto:dean.ir@iith.ac.in"
            target="_blank"
          >
            dean.ir@iith.ac.in
          </a>
          <br />
          <br />
          <a
            className="nameLink"
            href="mailo:office.ir@iith.ac.in"
            target="_blank"
          >
            office.ir@iith.ac.in
          </a>
          <br />
          <br />
          <a className="nameLink" href="tel:+91-040-2301-6007" target="_blank">
            +91-040-2301-6007
          </a>
          <br />
          <br />
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={kavitha} alt="Ms. Kavitha G R" />
          <h4>
            <b>Ms. Kavitha G R</b>
          </h4>
          <p>Lead</p>
          <p>International Partnerships & Collaborations</p>
          <a
            className="nameLink"
            href="mailto:ic.ir@iith.ac.in"
            target="_blank"
          >
            ic.ir@iith.ac.in
          </a>
          <br />
          <br />
          <a className="nameLink" href="tel:+919444536747" target="_blank">
            +91-9444536747
          </a>
          <br />
          <br />
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={pranitha} alt="Ms. A. Pranitha" />
          <h4>
            <b>Ms. A. Pranitha</b>
          </h4>
          <p>Manager</p>
          <p>Outbound programs & Japan Desk</p>
          <a
            className="nameLink"
            href="mailto:outbound.ir@iith.ac.in"
            target="_blank"
          >
            outbound.ir@iith.ac.in
          </a>
          <br />
          <br />
          <a
            className="nameLink"
            href="mailto:japandesk.ir@iith.ac.in"
            target="_blank"
          >
            japandesk.ir@iith.ac.in
          </a>
          <br />
          <br />
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={ali} alt="Mr. Azmath Ali" />
          <h4>
            <b>Mr. Azmath Ali</b>
          </h4>
          <p>Manager</p>
          <p>Inbound programs & International Admissions</p>
          <a
            className="nameLink"
            href="mailto:inbound.ir@iith.ac.in"
            target="_blank"
          >
            inbound.ir@iith.ac.in
          </a>
          <br />
          <br />
          <a
            className="nameLink"
            href="mailto:ia.ir@iith.ac.in"
            target="_blank"
          >
            ia.ir@iith.ac.in
          </a>
          <br />
          <br />
        </div>
        <div className="card" data-aos="zoom-in">
          <img className="facultyImage" src={reegan} alt="Mr. Reegan" />
          <h4>
            <b>Mr. Reegan</b>
          </h4>
          <p>Office Assistant</p>
        </div>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default About;
