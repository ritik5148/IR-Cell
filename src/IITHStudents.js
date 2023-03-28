import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function IITHStudents() {
  return (
    <div>
      <div className="fade--bottom" />
      <div className="firstTitle title" data-aos="fade-up">
        <h2>IITH Students</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3>Exchange Program</h3>
        <p className="libPara" data-aos="fade-right">
          A student exchange program is a study program in which students pursue
          education at one of the international partner institutions for a
          period of more than 8 weeks upto a semester or two.
          <br />
          IITH strongly recommends and encourages its students to pursue a
          semester abroad in one of our partner Universities. Study abroad
          programs are typically intended for undergraduates & graduate students
          who would like to spend a semester abroad taking courses/project work.
          Exposure to International academic and cultural life is an important
          aspect of learning for students These experiences play a major role in
          their self-development and awareness leading to enhanced
          self-confidence and self-esteem.
        </p>
        <h4 className="note">PROCEDURE </h4>
        <p className="libPara" data-aos="fade-right">
          The student must apply against information circulated by the
          International Relations office – Outbound Unit with whom IITH has an
          active MOU, which typically offers a tuition fee waiver and other
          facilities.
          <br />
          The student will then have to identify a set of courses to be taken
          during the semester abroad and check the suitability of the semester
          duration as well as the language of instruction.
          <br />
          He / She must then consult with the Faculty Advisor / supervisor
          regarding the suitability of the proposed courses. The approval of the
          Faculty Advisor is an essential step of the process.
          <br />
          The student must obtain the approval of the Head of the Department and
          the supervisor.
          <br />
          The student must then obtain the necessary clearances from the
          Academic section and Dean, Academics approval prior to submitting the
          request to the International Relations Office. Students carrying
          backlogs will not be allowed to participate in “study-abroad”
          programs. The student can submit his application form and other
          necessary documents to the International Relations Office. IR Office
          will then nominate the applicant to the relevant Office at the foreign
          university and facilitate the process of admission.
          <br />* Usually UG students who have completed at least 4 semesters ,
          PG students who have completed at least one semester and Phd Students
          who have completed their course work at IITH are recommended for these
          opportunities.
        </p>
      </div>
      <hr />
      <div className="head" data-aos="fade-up">
        <h3>Joint Doctoral Program (JDP )</h3>
        <p className="libPara" data-aos="fade-right">
          Potential Research scholars (PhD) are admitted into Joint Doctoral
          Program with one of the international partner institutions through
          open advertisement and stringent scrutiny. Through this program he /
          she can pursue their research interests at the partnered university
          for a period of 6 months to 1 year.
          <br />
          When a MS/PhD scholar spends a significant time abroad at a research
          facility for thesis/ project work/research work upto 12 months , there
          is a measurable gain to the scholar and to the Institutes/Universities
          involved.
        </p>
        <h4 className="note">PROCEDURE</h4>
        <p className="libPara" data-aos="fade-right">
          The IITH IR office will roll out the JDP advertisement for PhD
          admission for July admissions with the approval of the Director,
          Dean(Academics) and Dean (IR) on ourIR Office website and inform the
          PRO at IITH for wider publicity.
          <br />
          After the scrutiny and interview the student will be admitted.
          <br />
          Once the course work is completed at IITH he will be enrolled at the
          partnering University and thereafter starts working under the
          supervision of both universities.
        </p>
      </div>
      <hr />
      <div className="head" data-aos="fade-up">
        <h3>INTERNSHIP</h3>
        <p className="libPara" data-aos="fade-right">
          In today’s challenging economy experience counts more than
          qualifications. Semester or summer internships abroad provide
          tremendous opportunity to gain invaluable work experience during
          college.
          <br />
          These internship opportunities differentiate yourself from your peers
          by learning real-world skills, gaining foreign language proficiency,
          and immersing yourself in cultural opportunities. They help make your
          resume second to none.
        </p>
        <h4 className="note">PROCEDURE</h4>
        <p className="libPara" data-aos="fade-right">
          The student should directly apply for the Internship on the
          International University website after obtaining the required
          permissions from the department and supervisor. On the financial
          commitment (for travel, insurance & accommodation) of the concerned
          Supervisor the Dean IR will give the NoC required for application.
          <br />
          <br />
          <br />
          Things to be noted:
        </p>
        <ul className="vList">
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            At IITH Summer / Semester Internship is optional.
          </li>
          <li className="list" data-aos="fade-right">
            <VscDebugBreakpointLogUnverified />
            The Eligibility is UG Students with CGPA {">"} 8.0 at the end of 4th
            semester
          </li>
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            Duration of Internship - 6 months. The semester internship must be
            of minimum six months duration with a single company. The semester
            internship can not be fractalized.
          </li>
          <li className="list" data-aos="fade-right">
            <VscDebugBreakpointLogUnverified />
            Internship Timelines - January to June (i.e. in the 6th semester)
          </li>
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            Credits - 6 credits. Evaluation at the end of internship by faculty
            committee{" "}
          </li>
          <li className="list" data-aos="fade-right">
            <VscDebugBreakpointLogUnverified />
            Internship Report - Students need to submit Internship Report for
            grading by IITH Faculty
          </li>
          <li className="list" data-aos="fade-left">
            <VscDebugBreakpointLogUnverified />
            The students should complete the credits of 6th semester missed out
            due to Semester Internship in any other semesters by end of 8th
            semester for award of B.Tech degree.
          </li>
          <li className="list" data-aos="fade-right">
            <VscDebugBreakpointLogUnverified />
            The students will not be allowed to register for any course credits
            during the semester internship.
          </li>
        </ul>
      </div>
      <hr />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default IITHStudents;
