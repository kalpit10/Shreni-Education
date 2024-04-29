import "./App.css";
import Home from "./components/Home";
// import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Story from "./components/Story";
import Team from "./components/Team";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/ourstory" element={<Story />} />
          <Route path="/faculty" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
