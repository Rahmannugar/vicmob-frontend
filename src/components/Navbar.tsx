const Navbar = () => {
  return (
    <nav className="relative z-50 border-b">
      <div className="bg-blue-950 w-screen p-3 md:p-7 flex md:justify-between justify-center items-center">
        <a href="/" className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726476802/vicmob-logo_vc17p3.jpg"
            alt="vicmob-logo"
            className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-full"
          />
          <h1 className="text-white text-sm font-bold">VICMOB SCHOOLS</h1>
        </a>

        {/* desktop navbar */}
        <div className="text-white font-bold hidden md:flex space-x-4">
          <a href="/" className="hover:opacity-40 duration-100">
            Home
          </a>
          <a href="/admissions" className="hover:opacity-40 duration-100">
            Admission
          </a>
          <a href="/curriculum" className="hover:opacity-40 duration-100">
            Curriculum
          </a>
          <a href="/contact" className="hover:opacity-40 duration-100">
            Contact form
          </a>
          <a href="/about" className="hover:opacity-40 duration-100">
            About us
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
