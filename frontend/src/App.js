import "./App.css";
import Home from "./components/Home";
// import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Story from "./components/Story";
import Team from "./components/Team";
import SchoolCurriculum from "./side-components-courses/SchoolCurriculum";
import CEL from "./side-components-courses/CEL";
import SE from "./side-components-courses/SE";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/ourstory" element={<Story />} />
          <Route path="/faculty" element={<Team />} />
          <Route path="/school-curriculum" element={<SchoolCurriculum />} />
          <Route path="/cambridge-exams" element={<CEL />} />
          <Route path="/standardised-exams" element={<SE />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
