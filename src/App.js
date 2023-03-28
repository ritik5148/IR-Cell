import "./App.css";
import Homescreen from "./Homescreen";
import About from "./About";
import Life from "./Life";
// import PhotoGallery from "./PhotoGallery";
import Admission from "./Admission";
// import Collaborations from "./Collaborations";
import Jica from "./Jica";
import Partners from "./Partners";
import Visa from "./Visa";
// import Visit from "./Visit";
import Downloads from "./Downloads";
// import Contacts from "./Contacts";
import First from "./First";
import Iccr from "./Iccr";
import Asean from "./Asean";
import Sii from "./Sii";
import IStudents from "./IStudents";
import IITHStudents from "./IITHStudents";
import IFaculty from "./IFaculty";
import Sut from "./Sut";
import Deakin from "./Deakin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/life" element={<Life />} />
        {/* <Route path="/photo" element={<PhotoGallery />} /> */}
        <Route path="/admission" element={<Admission />} />
        {/* <Route path="/collab" element={<Collaborations />} /> */}
        <Route path="/jica" element={<Jica />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/visa" element={<Visa />} />
        {/* <Route path="/visit" element={<Visit />} /> */}
        <Route path="/download" element={<Downloads />} />
        {/* <Route path="/contact" element={<Contacts />} /> */}
        <Route path="/first" element={<First />} />
        <Route path="/asean" element={<Asean />} />
        <Route path="/iccr" element={<Iccr />} />
        <Route path="/sii" element={<Sii />} />
        <Route path="/internationalStudents" element={<IStudents />} />
        <Route path="/iithStudents" element={<IITHStudents />} />
        <Route path="/internationalFaculty" element={<IFaculty />} />
        <Route path="/deakin" element={<Deakin />} />
        <Route path="/sut" element={<Sut />} />
      </Routes>
    </div>
  );
}

export default App;
