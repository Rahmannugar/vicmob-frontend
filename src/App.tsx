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
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";

const App = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 1700);

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

          {/* bottom navigation */}
          <div
            className={` fixed mb-[-5px] bg-blue-900 bottom-0 left-0 md:hidden z-50 w-full h-20 py-5`}
          >
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
              <a href="/admissions" className="px-5  border-r">
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center group"
                >
                  <div className="text-white">
                    <SchoolIcon />
                  </div>
                  <span className="text-xs text-white">Admission</span>
                </button>
              </a>

              <a href="/curriculum" className="px-3 border-r">
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center group"
                >
                  <div className="flex justify-center">
                    <div className="text-white">
                      <MenuBookIcon />
                    </div>
                  </div>
                  <span className="text-xs text-white">Curriculum</span>
                </button>
              </a>

              <a href="/contact" className="px-5 border-r">
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center group"
                >
                  <div className="text-white">
                    <PermContactCalendarIcon />
                  </div>
                  <span className="text-xs text-white">Contact</span>
                </button>
              </a>

              <a href="/about" className="px-5">
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center  group"
                >
                  <div className="text-white">
                    <InfoIcon />
                  </div>
                  <span className="text-xs text-white">About</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
