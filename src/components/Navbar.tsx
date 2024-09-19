import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handleNav = () => {
    setVisible(!visible);
  };

  return (
    <nav className="relative z-50 border-b">
      <div className="bg-orange-800 w-screen p-3 md:p-7 flex justify-between items-center">
        <img
          src="https://res.cloudinary.com/thirtythree/image/upload/v1726476802/vicmob-logo_vc17p3.jpg"
          alt="vicmob-logo"
          className="w-[50px] h-[50px] rounded-full"
        />

        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer text-white"
        >
          <MenuIcon />
        </div>

        <div
          className={`${
            visible ? "max-h-screen" : "max-h-0"
          } absolute left-0 w-screen md:hidden z-50 bg-white overflow-hidden transition-all duration-500 ease-in-out`}
          style={{ top: "100%" }}
        >
          <ul className="flex flex-col font-bold items-center justify-center space-y-3 py-2">
            <li className="border-black border-b w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="#">Home</a>
            </li>
            <li className="border-black border-b w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="#">Admission</a>
            </li>
            <li className="border-black border-b w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="#">Curriculum</a>
            </li>
            <li className="border-black border-b w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="#">Contact form</a>
            </li>
            <li className=" w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="#">About us</a>
            </li>
          </ul>
        </div>

        {/* desktop navbar */}
        <div className="text-white font-bold hidden md:flex space-x-4">
          <a href="#" className="hover:opacity-40 duration-100">
            Home
          </a>
          <a href="#" className="hover:opacity-40 duration-100">
            Admission
          </a>
          <a href="#" className="hover:opacity-40 duration-100">
            Curriculum
          </a>
          <a href="#" className="hover:opacity-40 duration-100">
            Contact form
          </a>
          <a href="#" className="hover:opacity-40 duration-100">
            About us
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
