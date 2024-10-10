import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="relative z-50 border-b">
      <div className="bg-blue-950 w-screen p-3 md:p-7 flex md:justify-between justify-center items-center">
        <motion.a href="/" className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726476802/vicmob-logo_vc17p3.jpg"
            alt="vicmob-logo"
            className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-white text-sm font-bold">
              VICMOB <span className="text-yellow-300">SCHOOLS</span>
            </h1>
            <span className="text-white text-[10px] font-bold">
              Home Of Champions
            </span>
          </div>
        </motion.a>

        {/* desktop navbar */}
        <div className="text-white font-bold hidden md:flex space-x-4">
          <motion.a href="/" className="hover:opacity-40 duration-100">
            Home
          </motion.a>
          <motion.a
            href="/admissions"
            className="hover:opacity-40 duration-100"
          >
            Admission
          </motion.a>
          <motion.a
            href="/curriculum"
            className="hover:opacity-40 duration-100"
          >
            Curriculum
          </motion.a>
          <motion.a href="/contact" className="hover:opacity-40 duration-100">
            Contact form
          </motion.a>
          <motion.a href="/about" className="hover:opacity-40 duration-100">
            About us
          </motion.a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
