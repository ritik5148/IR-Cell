import React from "react";
import PhotoGallery from "./PhotoGallery";
import Nav from "./Nav";
import "./Life.css";
import { useTransition, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import hyd from "./images/photos/char.jpg";
import iit from "./images/photo_gallery/Abhishek Gadi.jpeg";
import one from "./images/photos/4.png";
import two from "./images/photos/6.jpg";
import library from "./images/photos/asdfasdfsdafsdafsd.png";
import cult from "./images/photos/IMG_0142.JPG";
import sports from "./images/photos/volleyball_2.jpg";
import chess from "./images/photos/chess.jpg";
import mess from "./images/IITH Pics/Mess.jpeg";
import host from "./images/IITH Pics/hostel.jpeg";
import fest from "./images/photos/festival.JPG";
import rec from "./images/photos/sports.jpg";
import hospital from "./images/IITH Pics/hospital.jpg";
import shop from "./images/photos/sampoorna.jpg";
import cant from "./images/IITH Pics/canteen.jpg";
import show from "./images/photos/culture.jpeg";
import transport from "./images/IITH Pics/transport.jpg";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function Life() {
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
      <div className="containerLife bg">
        <div className="cardOverlay">
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="itemLife">
                <h1>Life At IITH</h1>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="fade--bottom" />
      <div className="hydTitle title" data-aos="fade-up">
        <h2>Hyderabad and Telangana</h2>
      </div>
      <div className="hyd">
        <div className="hydI" data-aos="zoom-in">
          <img className="hydImage" src={hyd} alt="Char Minar" />
        </div>
        <div className="hydPara">
          <p data-aos="fade-left">
            Telangana, the 29th state of India, is one of the youngest states of
            the country. Carved out of Andhra Pradesh, this state was formed on
            2nd June 2014, with Hyderabad as its capital. The state has an area
            of 1,14,840 sq km and population of 3,52,86,757, which makes it the
            twelfth largest and twelfth most populous state of India. This state
            is known for its distinctive culture, unique cuisine and rich
            History.
            <br />
            <br />
            This Telugu speaking state is situated in the southern part of the
            country with two major rivers Godavari and Krishna passing through.
            The state makes a perfect tourist destination with its diverse and
            unique attractions like Charminar, Birla Mandir, Warangal fort and
            so on. <br />
            <br />
            The state’s economy is majorly driven by agriculture and Farming
            with rice being its major food crop. Alongside that, Telangana is
            also considered as a booming state for IT and startups with 68
            special economic zones. The aspirational foundation of Telangana
            lies on Liberty, Social Justice and Development.
          </p>
        </div>
      </div>
      <hr />
      <div className="iitTitle title" data-aos="fade-up">
        <h2>IIT Hyderabad</h2>
      </div>
      <div className="iit">
        <div className="iitPara">
          <p data-aos="fade-right">
            Indian Institute of technology, Hyderabad (IITH) is a second
            generation IIT started in 2008. Located in Kandi Village of Sanga
            Reddy district, Telangana, IITH is ranked among top 10 institutions
            in India for engineering (NIRF), making it one of the finest schools
            for science and technology in the Country. <br />
            <br />
            The campus is spread across 576 acres (234 ha) and is designed by
            the renowned architects, Prof. Christopher Charles Benninger of Pune
            and ARCOP of New Delhi. IITH’s special relationship with Japan is
            reflective on its campus architecture. <br />
            <br />
            IITH emphasizes on modern and interdisciplinary academia, with
            courses diversifying from engineering, Science to Design and Liberal
            arts to name a few. The foundation of IITH lies on research and
            innovation with vibrant research culture including innovation
            centers and incubators to promote entrepreneurship.
          </p>
          <div className="iit1">
            <div className="iitI1" data-aos="zoom-in">
              <img className="iitImage1" src={one} alt="IITH Main Gate" />
            </div>
            <div className="iitI2" data-aos="zoom-in">
              <img className="iitImage2" src={two} alt="IITH Dawn" />
            </div>
          </div>
        </div>
        <div className="iitI" data-aos="zoom-in">
          <img className="iitImage" src={iit} alt="Academic Block C" />
        </div>
      </div>
      <hr />
      <div className="acadTitle title" data-aos="fade-up">
        <h2>Academic Life</h2>
      </div>
      <div className="head" data-aos="slide-up">
        <h3>Library</h3>
      </div>
      <div className="libContainer">
        <div className="libI" data-aos="zoom-in">
          <img className="libImage" src={library} alt="Library" />
        </div>
        <p className="libPara" data-aos="fade-left">
          The IITHLibrary plays a vital role in supporting the mission of the
          IITH by helping students, faculty, and staff gain the skills and
          knowledge they need to access and create information effectively. To
          achieve this, the library offers a range of resources and services,
          including research support and the creation of new knowledge. As part
          of this commitment, we have launched the PRAGYAAN (PRAUDYOGIKI GYAAN
          NIDHI) one million books project to develop a library collection in
          STEM(Science, technology, engineering, and mathematics) and Humanities
          subjects.
        </p>
      </div>
      <div className="rightHead head" data-aos="fade-up">
        <h3>Cultural Council</h3>
      </div>
      <div className="cultContainer">
        <p className="cultPara" data-aos="fade-right">
          They are a bunch of motivated individuals who believe that a college
          should have its equal share of fun & frolic along with the case
          studies. Our is an attempt to capture the vibrant persona of the
          students by offering them a platform to showcase their inner
          musicians, dancers, actors, painters, writers, photographers, and
          dreamers. They as a cultural team are responsible for keeping the
          spirits alive on the campus by organizing the multitude of cultural
          activities around the year. Be it a celebration of almost every
          festival or frequent open-air jamming sessions they make sure that
          every event lasts in your memory for a lifetime. Clubs under the
          Cultural Council are Infocus, Behind the lens, Vibes, Rang de manch,
          Gesture Shuffle, LitSoc.
        </p>
        <div className="cultI" data-aos="zoom-in">
          <img className="cultImage" src={cult} alt="Holi" />
        </div>
      </div>
      <div className="head" data-aos="fade-up">
        <h3> Sports Council </h3>
      </div>
      <div className="sportsContainer">
        <div className="sportsI" data-aos="zoom-in">
          <img className="sportsImage" src={sports} alt="Sports" />
        </div>
        <p className="sportsPara" data-aos="fade-left">
          IITH's sports is one of the more brilliant facets of this campus life.
          Our fiery enthusiasm and zeal are embodied in our motto, "the name on
          the front of a jersey is more important than the name on the back".
          IITH offers plenty of sports facilities, which include a common
          football and cricket ground, a hockey ground, a well equipped swimming
          pool, floodlit courts for basketball, badminton, tennis, and multiple
          courts for volleyball. Facilities for indoor games like table tennis,
          caroms, and chess are also available.
        </p>
      </div>
      <div className="rightHead head" data-aos="fade-up">
        <h3>Media Council</h3>
      </div>
      <div className="mediaContainer">
        <p className="mediaPara" data-aos="fade-right">
          The media council of IITH was formed in May 2014 and is a student
          council that helps take IITH to every individual in and outside IITH.
          They are involved in publicizing our institute through social media,
          social events, etc. The Media Council is currently engaged in various
          newsletters of IITH like the academic newsletter, placement newsletter
          with the guidance of different faculties, and PR Office of IITH.
        </p>
        <div className="mediaI" data-aos="zoom-in">
          <img className="mediaImage" src={sports} alt="Media" />
        </div>
      </div>
      <div className="head" data-aos="fade-up">
        <h3> Scitech Council </h3>
      </div>
      <div className="sciContainer">
        <div className="sciI" data-aos="zoom-in">
          <img className="sciImage" src={chess} alt="Chess Bot" />
        </div>
        <p className="sciPara" data-aos="fade-left">
          A Science & Technology club to provide a platform to technocrats to
          explore their ideas and bring in new innovations.
        </p>
      </div>
      <div className="rightHead head" data-aos="fade-up">
        <h3>Mess Council</h3>
      </div>
      <div className="messContainer">
        <p className="messPara" data-aos="fade-right">
          Mess monitoring council, also known as MMC, assists in the robust
          functioning of mess in coordination with mess wardens and HCU. Headed
          by the mess secretary, it represents the students' voice. MMC is
          responsible for menu preparation, mess inspection, and the grievance
          cell. It also regularly inspects the operations to look for various
          faults and ensure that the food quality is maintained at IITH. It
          strives to ensure that all the students have enjoyable and healthy
          meals at their second home.
        </p>
        <div className="messI" data-aos="zoom-in">
          <img className="messImage" src={mess} alt="Mess" />
        </div>
      </div>
      <hr />
      <div className="hostelTitle title" data-aos="fade-up">
        <h2>Hostel Life</h2>
      </div>
      <div className="head" data-aos="fade-up">
        <h3> Accomodation </h3>
      </div>
      <div className="accContainer">
        <div className="accI" data-aos="zoom-in">
          <img className="accImage" src={host} alt="Hostels" />
        </div>
        <p className="accPara" data-aos="fade-left">
          Accommodations at IITH are excellently comfortable for students. The
          hostels are designed with radiant cooling technology to combat the
          summertime heat. Every student is given a single room equipped with
          the necessities including a bed, a wardrobe, a study table and a
          chair. Washing machines are available on each floor to be shared among
          the floormates. There are two restrooms and two bathrooms in each pod,
          to be shared among 8 people. The pods are architectured in a society
          like manner to get along well with each other and stay in touch,
          creating a home like environment away from home.
        </p>
      </div>
      <div className="rightHead head" data-aos="fade-up">
        <h3>Dining</h3>
      </div>
      <div className="diningContainer">
        <p className="diningPara" data-aos="fade-right">
          All of the hostels at IITH share two common dining halls namely, UDH
          and LDH, also new mess building is under construction. The dining
          halls serve both north Indian and south Indian cuisine (You can also
          buy extras if you wish to). The Mess secretary and the MMC student
          representatives periodically check the food's quality and hygeine.
          Also we have special dinner every month and the menu is revised every
          month according to the feedback given by the students.
        </p>
        <div className="diningI" data-aos="zoom-in">
          <img className="diningImage" src={mess} alt="Mess" />
        </div>
      </div>
      <div className="head" data-aos="fade-up">
        <h3> Festivals and Celebrations at IITH </h3>
      </div>
      <div className="festContainer">
        <div className="festI" data-aos="zoom-in">
          <img className="festImage" src={fest} alt="Diwali" />
        </div>
        <p className="festPara" data-aos="fade-left">
          Every March, IIT Hyderabad holds Elan &nVision, a techno-cultural
          festival where students can participate and take part in a range of
          events. Milan, The General Championship, mostly held around September,
          is a competition where every hostel pits itself against the others in
          a range of sporting, technological, and cultural events in an effort
          to come out on top. All the festivals are celebrated with equal
          enthusiasm to portray the huge cultural diversity of India yet
          remarking the unity among the students. In addition to this,
          international festivals and important days are also celebrated with
          equal enthusiasm along with our international students respecting all
          cultures worldwide.
        </p>
      </div>
      <div className="rightHead head" data-aos="fade-up">
        <h3>Sports and Recreation</h3>
      </div>
      <div className="recContainer">
        <p className="recPara" data-aos="fade-right">
          You can explore and participate in a variety of sports, including
          football, cricket, squash, volleyball, basketball, badminton and many
          more. The recreational and friendship rooms, which are located between
          hostel buildings, provide a great place to socialize with people other
          than one's batchmates while playing games like chess, carrom, and
          other activities. A new sports complex with more amenities and
          facilities is under construction and is expected to be ready soon.
        </p>
        <div className="recI" data-aos="zoom-in">
          <img className="recImage" src={rec} alt="Badminton Court" />
        </div>
      </div>
      <div className="head" data-aos="fade-up">
        <h3> Hospital and Media Care </h3>
      </div>
      <div className="hospitalContainer">
        <div className="hospitalI" data-aos="zoom-in">
          <img className="hospitalImage" src={hospital} alt="Hospital" />
        </div>
        <p className="hospitalPara" data-aos="fade-left">
          You can visit the hospital 24X7 in campus for any medical care, where
          prescriptions are free and medicines are offered at a discount of 80%
          in the hospital's medical store ( You need to carry a medical booklet
          which you can get from the hostel office). You can also dial +91
          8331036100 to call for an ambulance. In case of some serious issues
          you are referred to the continental hospital, hyderabad, where the
          bill amount is adjusted with the medical insurance provided by the
          institute.
        </p>
      </div>
      <div className="rightHead head" data-aos="fade-up">
        <h3>Grocery Shopping</h3>
      </div>
      <div className="shopContainer">
        <p className="shopPara" data-aos="fade-right">
          Sampoorna, the supermarket of IITH, is located besides the faculty
          towers where you can get all the basic items, including toiletries,
          snacks, stationary, fruits and vegtables. Also, there is a general
          store besides canteen near hostels, which has all the basic items of
          daily use along with printing facilities.
        </p>
        <div className="shopI" data-aos="zoom-in">
          <img className="shopImage" src={shop} alt="Sampoorna" />
        </div>
      </div>
      <div className="head" data-aos="fade-up">
        <h3> Canteen and Eatery</h3>
      </div>
      <div className="cantContainer">
        <div className="cantI" data-aos="zoom-in">
          <img className="cantImage" src={cant} alt="Canteen" />
        </div>
        <p className="cantPara" data-aos="fade-left">
          Vendikins are available on the ground floors of some hostels and on
          different floors of Academic Block, with a variety of drinks and
          snacks. Nescafe and Amul Eatouts are available in the Canteen area,
          along with a wet canteen, bakery shop, juice center and a tea stall.
          Canteens and Eatout places are also there in Academic Blocks Ishthara,
          the food court of IITH has numerous famous Dine in/ Take away stalls
          which also offer delivery till hostels or Academic Blocks, around the
          campus.
        </p>
      </div>
      <div className="rightHead head" data-aos="fade-up">
        <h3>Importance and Showcase of Culture</h3>
      </div>
      <div className="showContainer">
        <p className="showPara" data-aos="fade-right">
          Bus stops, canteen are being beautifully painted by our design
          department students making the campus more eye catching beyond its
          amazing architecture.
        </p>
        <div className="showI" data-aos="zoom-in">
          <img className="showImage" src={show} alt="Rangoli" />
        </div>
      </div>
      <div className="head" data-aos="fade-up">
        <h3> Transport Facilities</h3>
      </div>
      <div className="transportContainer">
        <div className="transportI" data-aos="zoom-in">
          <img className="transportImage" src={transport} alt="Bus" />
        </div>
        <p className="transportPara" data-aos="fade-left">
          EVs and Buses run across the campus through different routes for easy
          travel inside the campus. In addition to it, Sangareddy and Miyapur
          Bus servies are also going to start soon.
        </p>
      </div>
      <hr />
      <div className="photoTitle title" data-aos="fade-up">
        <h2>Photo Gallery</h2>
      </div>
      <PhotoGallery />

      <Footer />
      <GoToTop />
    </div>
  );
}

export default Life;
