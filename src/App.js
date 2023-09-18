import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Skills from "./pages/skills";
import Interest from "./pages/interest";
import Awards from "./pages/awards";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </>
  );
}

export default App;
