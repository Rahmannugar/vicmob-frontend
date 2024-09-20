import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Admissions from "./pages/Admissions";
import { useEffect, useState } from "react";

const App = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {!hasMounted ? (
        <div className="flex flex-col space-y-3 justify-center h-screen items-center">
          <img
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726476802/vicmob-logo_vc17p3.jpg"
            alt="vicmob-logo"
            className="w-[100px] h-[100px] rounded-full spinner"
          />
          <h1 className="font-bold text-orange-900 text-xl">VICMOB SCHOOLS</h1>
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default App;
