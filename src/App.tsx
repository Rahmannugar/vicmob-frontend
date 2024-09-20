import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Admissions from "./pages/Admissions";
// vicmobschools@gmail.com

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<Curriculum />} path="/curriculum" />
        <Route element={<Admissions />} path="/admissions" />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
