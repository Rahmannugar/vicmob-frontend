import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handleNav = () => {
    setVisible(!visible);
  };

  return (
    <nav className="relative z-50">
      <div className="bg-orange-800 w-screen p-3 flex justify-between items-center">
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
            visible
              ? "max-h-screen" // Adjust the max height to control how much of the menu is visible
              : "max-h-0"
          } absolute left-0 w-screen md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out`}
          style={{ top: "100%" }}
        >
          <ul className="flex flex-col items-center justify-center space-y-6">
            <li className="border-black border-b w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="">Home</a>
            </li>
            <li className="border-black border-b w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="">Contact form</a>
            </li>
            <li className="border-black border-b w-screen px-3 hover:text-center hover:text-orange-700 duration-100">
              <a href="">About us</a>
            </li>
          </ul>
        </div>

        {/* desktop navbar */}
        <div className="text-white hidden md:flex space-x-4">
          <a href="" className="hover:opacity-40 duration-100">
            Home
          </a>
          <a href="" className="hover:opacity-40 duration-100">
            Contact form
          </a>
          <a href="" className="hover:opacity-40 duration-100">
            About us
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
